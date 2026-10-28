import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface ThreeDPerfumeBottleProps {
  onInteractionStart?: () => void
}

export default function ThreeDPerfumeBottle({ onInteractionStart }: ThreeDPerfumeBottleProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)
  const prevMouseRef = useRef({ x: 0, y: 0 })
  const velocityRef = useRef({ x: 0.003, y: 0 })
  const [isInteracting, setIsInteracting] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth || 360
    const height = container.clientHeight || 540

    // ── 1. Scene, Camera, Renderer ──
    const scene = new THREE.Scene()

    // Camera framed so the top cap and bottom have generous luxury breathing room
    const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 100)
    camera.position.set(0, 0.1, 5.8)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.35
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    container.appendChild(renderer.domElement)

    // ── 2. Master Bottle Group (scaled & centered to prevent clipping) ──
    const bottleGroup = new THREE.Group()
    bottleGroup.position.set(0, -0.22, 0)
    bottleGroup.scale.set(0.78, 0.78, 0.78)
    scene.add(bottleGroup)

    // ── 3. High-End Shaders & Physical Materials ──
    // Translucent Physical Crystal Glass
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.95,
      opacity: 1,
      transparent: true,
      roughness: 0.03,
      metalness: 0.02,
      ior: 1.52,
      thickness: 0.9,
      specularIntensity: 1.2,
      specularColor: new THREE.Color(0xfff5e6),
    })

    // Rich Glowing Amber Perfume Liquid
    const liquidMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xd89528,
      transmission: 0.68,
      transparent: true,
      roughness: 0.08,
      metalness: 0.04,
      ior: 1.44,
      thickness: 0.8,
    })

    // Champagne Gold Metal for hardware & cap
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.94,
      roughness: 0.22,
    })

    // High Polish Gold for rims & collar
    const polishedGoldMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5d88c,
      metalness: 0.98,
      roughness: 0.12,
    })

    // Brushed Dark Gold for back of label plaque (prevents double sticker effect)
    const labelBackingMaterial = new THREE.MeshStandardMaterial({
      color: 0x1f190e,
      metalness: 0.7,
      roughness: 0.5,
    })

    // ── 4. Bottle Geometries ──
    // Heavy Faceted Outer Glass Flask
    const glassWidth = 1.6
    const glassHeight = 2.0
    const glassDepth = 0.88
    const glassRadius = 0.22

    const shape = new THREE.Shape()
    const x = -glassWidth / 2
    const y = -glassHeight / 2
    shape.moveTo(x + glassRadius, y)
    shape.lineTo(x + glassWidth - glassRadius, y)
    shape.quadraticCurveTo(x + glassWidth, y, x + glassWidth, y + glassRadius)
    shape.lineTo(x + glassWidth, y + glassHeight - glassRadius)
    shape.quadraticCurveTo(x + glassWidth, y + glassHeight, x + glassWidth - glassRadius, y + glassHeight)
    shape.lineTo(x + glassRadius, y + glassHeight)
    shape.quadraticCurveTo(x, y + glassHeight, x, y + glassHeight - glassRadius)
    shape.lineTo(x, y + glassRadius)
    shape.quadraticCurveTo(x, y, x + glassRadius, y)

    const extrudeSettings = {
      depth: glassDepth - 0.18,
      bevelEnabled: true,
      bevelSegments: 6,
      steps: 1,
      bevelSize: 0.09,
      bevelThickness: 0.09,
    }

    const glassGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings)
    glassGeo.center()
    const glassMesh = new THREE.Mesh(glassGeo, glassMaterial)
    glassMesh.castShadow = true
    glassMesh.receiveShadow = true
    bottleGroup.add(glassMesh)

    // Inner Amber Fragrance Liquid
    const liquidGeo = new THREE.BoxGeometry(1.36, 1.66, 0.66)
    liquidGeo.translate(0, -0.08, 0)
    const liquidMesh = new THREE.Mesh(liquidGeo, liquidMaterial)
    bottleGroup.add(liquidMesh)

    // Internal Atomizer Tube
    const tubeGeo = new THREE.CylinderGeometry(0.015, 0.015, 1.78, 12)
    tubeGeo.translate(0, -0.05, 0)
    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.45,
      roughness: 0.2,
    })
    const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat)
    bottleGroup.add(tubeMesh)

    // Gold Collar at Neck
    const neckGeo = new THREE.CylinderGeometry(0.24, 0.26, 0.3, 32)
    neckGeo.translate(0, 1.06, 0)
    const neckMesh = new THREE.Mesh(neckGeo, goldMaterial)
    bottleGroup.add(neckMesh)

    // Spray Nozzle
    const nozzleGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.16, 24)
    nozzleGeo.translate(0, 1.24, 0)
    const nozzleMesh = new THREE.Mesh(nozzleGeo, polishedGoldMaterial)
    bottleGroup.add(nozzleMesh)

    // ── Weighted Sculpted Gold Cap (Comfortably Framed) ──
    const capGeo = new THREE.CylinderGeometry(0.36, 0.38, 0.72, 36)
    capGeo.translate(0, 1.58, 0)
    const capMesh = new THREE.Mesh(capGeo, goldMaterial)
    bottleGroup.add(capMesh)

    // Cap Crown Ring Detail
    const ringGeo = new THREE.TorusGeometry(0.37, 0.02, 16, 48)
    ringGeo.rotateX(Math.PI / 2)
    ringGeo.translate(0, 1.38, 0)
    const ringMesh = new THREE.Mesh(ringGeo, polishedGoldMaterial)
    bottleGroup.add(ringMesh)

    // Cap Top Bevel Dome
    const capTopGeo = new THREE.CylinderGeometry(0.32, 0.36, 0.08, 36)
    capTopGeo.translate(0, 1.96, 0)
    const capTopMesh = new THREE.Mesh(capTopGeo, polishedGoldMaterial)
    bottleGroup.add(capTopMesh)

    // ── 5. Single-Sided Metallic Brand Label Plaque (NO DOUBLE STICKER) ──
    // High-resolution canvas texture for the front plaque
    const labelCanvas = document.createElement('canvas')
    labelCanvas.width = 512
    labelCanvas.height = 512
    const ctx = labelCanvas.getContext('2d')
    if (ctx) {
      // Matte black metallic field
      ctx.fillStyle = '#0b0906'
      ctx.fillRect(0, 0, 512, 512)

      // Outer & Inner Gold Filigree Borders
      ctx.strokeStyle = '#c9a96e'
      ctx.lineWidth = 6
      ctx.strokeRect(16, 16, 480, 480)
      ctx.lineWidth = 2
      ctx.strokeRect(26, 26, 460, 460)

      // Brand Typography
      ctx.fillStyle = '#f5e8c8'
      ctx.font = '300 36px "Cormorant Garamond", Georgia, serif'
      ctx.textAlign = 'center'
      ctx.fillText('THE PERFUME', 256, 170)

      ctx.fillStyle = '#c9a96e'
      ctx.font = '600 24px "Montserrat", sans-serif'
      ctx.fillText('FACTORY', 256, 215)

      // Accent Divider Rule
      ctx.strokeStyle = '#c9a96e'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(140, 245)
      ctx.lineTo(372, 245)
      ctx.stroke()

      ctx.font = 'italic 300 28px "Cormorant Garamond", serif'
      ctx.fillStyle = '#e8d5a3'
      ctx.fillText('Dubai', 256, 295)

      ctx.font = '400 18px "Montserrat", sans-serif'
      ctx.fillStyle = '#c9a96e'
      ctx.fillText('EAU DE PARFUM', 256, 350)

      ctx.font = '300 15px "Montserrat", sans-serif'
      ctx.fillStyle = '#8a8070'
      ctx.fillText('100 ML · 3.4 FL.OZ.', 256, 395)
    }

    const labelTex = new THREE.CanvasTexture(labelCanvas)
    labelTex.anisotropy = 8

    // Front Plaque: ONLY ONE single label on the front side
    const plaqueWidth = 0.88
    const plaqueHeight = 0.88
    const plaqueThickness = 0.012

    // Plaque Box with 6 distinct materials to ensure the back is a clean solid dark metal plate
    // [right, left, top, bottom, front (texture), back (solid dark gold metal)]
    const plaqueMaterials = [
      goldMaterial,
      goldMaterial,
      goldMaterial,
      goldMaterial,
      new THREE.MeshStandardMaterial({
        map: labelTex,
        roughness: 0.35,
        metalness: 0.35,
      }),
      labelBackingMaterial, // Solid opaque dark backing — prevents double sticker through glass!
    ]

    const plaqueGeo = new THREE.BoxGeometry(plaqueWidth, plaqueHeight, plaqueThickness)
    const plaqueMesh = new THREE.Mesh(plaqueGeo, plaqueMaterials)
    plaqueMesh.position.set(0, -0.06, glassDepth / 2 + 0.006)
    bottleGroup.add(plaqueMesh)

    // ── 6. Ambient Floating Golden Particles in 3D ──
    const particleCount = 60
    const particleGeo = new THREE.BufferGeometry()
    const particlePos = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 4.2
      particlePos[i + 1] = (Math.random() - 0.5) * 4.6
      particlePos[i + 2] = (Math.random() - 0.5) * 3.2
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3))

    const particleMat = new THREE.PointsMaterial({
      color: 0xc9a96e,
      size: 0.035,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // ── 7. Studio Lighting Rig ──
    const ambientLight = new THREE.AmbientLight(0xfff8ee, 0.65)
    scene.add(ambientLight)

    // Warm Key Light (top right front)
    const keyLight = new THREE.DirectionalLight(0xffeedd, 2.8)
    keyLight.position.set(4, 5, 4)
    scene.add(keyLight)

    // Golden Rim Backlight (behind left)
    const rimLight = new THREE.DirectionalLight(0xd4a040, 3.4)
    rimLight.position.set(-4, 3, -3)
    scene.add(rimLight)

    // Soft Blue-Cyan Fill Light (creates rich glass edge highlights)
    const fillLight = new THREE.DirectionalLight(0xb0d0e0, 1.2)
    fillLight.position.set(-3, -2, 3)
    scene.add(fillLight)

    // Warm Glow at Bottle Pedestal
    const basePointLight = new THREE.PointLight(0xc9a96e, 1.8, 6)
    basePointLight.position.set(0, -1.2, 0)
    scene.add(basePointLight)

    // ── 8. Interactive Mouse & Touch Drag Controls (Full 360° Rotation) ──
    const onPointerDown = (clientX: number, clientY: number) => {
      isDraggingRef.current = true
      prevMouseRef.current = { x: clientX, y: clientY }
      velocityRef.current = { x: 0, y: 0 }
      setIsInteracting(true)
      onInteractionStart?.()
    }

    const onPointerMove = (clientX: number, clientY: number) => {
      if (!isDraggingRef.current) return
      const deltaX = clientX - prevMouseRef.current.x
      const deltaY = clientY - prevMouseRef.current.y

      // Full 360° horizontal rotation
      bottleGroup.rotation.y += deltaX * 0.01

      // Subtle vertical tilt (clamped to prevent awkward flipping)
      bottleGroup.rotation.x += deltaY * 0.005
      bottleGroup.rotation.x = Math.max(-0.35, Math.min(0.35, bottleGroup.rotation.x))

      velocityRef.current = {
        x: deltaX * 0.008,
        y: deltaY * 0.004,
      }

      prevMouseRef.current = { x: clientX, y: clientY }
    }

    const onPointerUp = () => {
      isDraggingRef.current = false
      setIsInteracting(false)
    }

    const handleMouseDown = (e: MouseEvent) => onPointerDown(e.clientX, e.clientY)
    const handleMouseMove = (e: MouseEvent) => onPointerMove(e.clientX, e.clientY)
    const handleMouseUp = () => onPointerUp()

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        onPointerDown(e.touches[0].clientX, e.touches[0].clientY)
      }
    }
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY)
      }
    }
    const handleTouchEnd = () => onPointerUp()

    const dom = renderer.domElement
    dom.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    dom.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchend', handleTouchEnd)

    // ── 9. Render Animation Loop ──
    let animationId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animationId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Inertia & Continuous 360° Auto-spin
      if (!isDraggingRef.current) {
        velocityRef.current.x *= 0.95
        velocityRef.current.y *= 0.95

        const idleSpeed = 0.006
        bottleGroup.rotation.y += velocityRef.current.x + idleSpeed
        bottleGroup.rotation.x += velocityRef.current.y

        // Gently return X tilt toward level
        bottleGroup.rotation.x += (-bottleGroup.rotation.x) * 0.025
      }

      // Elegant vertical levitation
      bottleGroup.position.y = -0.22 + Math.sin(elapsedTime * 1.5) * 0.05

      // Slowly rotate 3D particle dust
      particles.rotation.y = elapsedTime * 0.025

      renderer.render(scene, camera)
    }
    animate()

    // ── 10. Responsive Canvas Resize ──
    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth || 360
      const h = container.clientHeight || 540
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    // ── 11. Complete Memory & Resource Cleanup ──
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)

      dom.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)

      dom.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)

      if (container.contains(dom)) {
        container.removeChild(dom)
      }

      renderer.dispose()
      glassGeo.dispose()
      liquidGeo.dispose()
      neckGeo.dispose()
      capGeo.dispose()
      ringGeo.dispose()
      capTopGeo.dispose()
      tubeGeo.dispose()
      plaqueGeo.dispose()
      particleGeo.dispose()
      glassMaterial.dispose()
      liquidMaterial.dispose()
      goldMaterial.dispose()
      polishedGoldMaterial.dispose()
      labelBackingMaterial.dispose()
      labelTex.dispose()
    }
  }, [onInteractionStart])

  return (
    <div className="relative w-full h-[480px] sm:h-[560px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing">
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="w-full h-full flex items-center justify-center" />

      {/* Floating 3D Interaction Cue */}
      <div
        className={`absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full card-glass border border-[rgba(201,169,110,0.3)] shadow-[0_8px_20px_rgba(0,0,0,0.7)] transition-opacity duration-300 pointer-events-none ${
          isInteracting ? 'opacity-30' : 'opacity-100'
        }`}
      >
        <div className="flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#c9a96e] animate-pulse">
            <path
              d="M21 12a9 9 0 0 0-9-9m9 9a9 9 0 0 1-9 9m9-9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="label text-[0.52rem] text-[#e8d5a3]">
            Drag to Rotate 360° in 3D
          </span>
        </div>
      </div>
    </div>
  )
}
