import { useState, useRef } from 'react'
import { motion, useTransform, useScroll, type Variants } from 'motion/react'
import ThreeDPerfumeBottle from './ThreeDPerfumeBottle'

// ─── Atelier Studio Bottle Visual (Photorealistic Online Imagery) ───
function AtelierStudioBottle() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] mx-auto flex items-center justify-center py-4">
      <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.95)] border border-[rgba(201,169,110,0.25)]">
        <img
          src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=900&q=95&auto=format&fit=crop"
          alt="The Demo Perfume signature luxury fragrance bottle"
          className="w-full h-auto object-cover select-none pointer-events-none"
        />
        {/* Soft vignette gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 40%, transparent 40%, rgba(6,6,6,0.65) 100%)',
          }}
        />
      </div>
    </div>
  )
}

// ─── Framer Motion Stagger Variants ───
const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const [viewMode, setViewMode] = useState<'3d-interactive' | 'atelier'>('3d-interactive')

  // Scroll Parallax via Motion
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const textOp = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 130% 100% at 65% 50%, #100e09 0%, #060606 60%)',
      }}
    >
      {/* ── Ambient Background Lighting ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute right-0 top-0 w-2/3 h-full"
          style={{
            background: 'radial-gradient(ellipse 70% 70% at 75% 40%, rgba(201,169,110,0.09) 0%, transparent 68%)',
          }}
        />
        {/* Subtle geometric grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.022]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" x="0" y="0" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M 72 0 L 0 0 0 72" fill="none" stroke="#c9a96e" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      {/* ── Main Hero Content ── */}
      <div className="relative z-10 w-full pt-36 lg:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-14">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-8 items-center min-h-[75vh]">

            {/* Left Column: Headline & Editorial Copy */}
            <motion.div style={{ y: textY, opacity: textOp }} className="order-2 lg:order-1">
              <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col gap-6">

                {/* Subtitle / Category Label */}
                <motion.div variants={item} className="flex items-center gap-4">
                  <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#c9a96e]" />
                  <span className="label">Luxury Fragrance Creation · Dubai</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  variants={item}
                  className="font-display text-[clamp(2.8rem,5.5vw,5.2rem)] font-light leading-[1.05] text-[#f5f0e8]"
                >
                  A Scent That{' '}
                  <em className="block italic text-[#c9a96e]">Becomes</em>
                  <span className="block">Your Signature.</span>
                </motion.h1>

                {/* Supporting Editorial Paragraph */}
                <motion.p
                  variants={item}
                  className="font-body text-[#8a8070] text-[0.85rem] sm:text-[0.9rem] leading-[1.9] max-w-[460px] tracking-[0.015em]"
                >
                  From fragrance creation to distinctive packaging, we bring your fragrance vision to
                  life — crafting olfactory identities that endure, captivate, and define.
                </motion.p>

                {/* CTA Action Buttons */}
                <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-2">
                  <motion.a
                    href="#expertise"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>Explore Our Expertise</span>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path
                        d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.a>

                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="btn-outline text-[0.64rem] py-2.5 px-5 tracking-[0.14em]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Start Your Journey
                  </motion.a>
                </motion.div>

                {/* Service Indicators */}
                <motion.div
                  variants={item}
                  className="flex flex-wrap items-center gap-6 pt-6 border-t border-[rgba(201,169,110,0.12)]"
                >
                  {['Private Label', 'Fragrance Creation', 'Luxury Packaging'].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                      <span className="label text-[0.58rem] text-[#c9a96e]/90">{t}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column: Interactive 3D Perfume Bottle Experience (Rotate 360°) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
              className="relative order-1 lg:order-2 flex flex-col items-center justify-center min-h-[480px] sm:min-h-[560px]"
            >
              {/* Floating Olfactory Badge - Top Right */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute top-2 right-2 sm:right-6 z-20 pointer-events-none"
              >
                <div className="card-glass px-3.5 py-1.5 rounded-full border border-[rgba(201,169,110,0.3)] shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
                  <span className="label text-[0.52rem] text-[#e8d5a3]">
                    ✦ Haute Parfumerie · Dubai
                  </span>
                </div>
              </motion.div>

              {/* Floating Scent Notes Card - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-16 left-2 sm:left-4 z-20 hidden sm:block max-w-[210px] pointer-events-none"
              >
                <div className="card-glass p-3 rounded border border-[rgba(201,169,110,0.22)] shadow-[0_12px_30px_rgba(0,0,0,0.8)] backdrop-blur-md">
                  <span className="label text-[0.5rem] text-[#c9a96e] block mb-1">Signature Accord</span>
                  <p className="font-display text-[#f5f0e8] text-sm font-light leading-snug">
                    Imperial Amber & Oud
                  </p>
                  <p className="font-body text-[#8a8070] text-[0.62rem] leading-tight mt-1">
                    Saffron · Damask Rose · Agarwood
                  </p>
                </div>
              </motion.div>

              {/* Main 3D Interactive Turntable / Studio View */}
              <div className="relative w-full flex items-center justify-center">
                {viewMode === '3d-interactive' ? (
                  <ThreeDPerfumeBottle />
                ) : (
                  <AtelierStudioBottle />
                )}

                {/* Warm Volumetric Light Pedestal under Flacon */}
                <div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-14 rounded-full blur-3xl pointer-events-none"
                  style={{ background: 'rgba(201,169,110,0.28)' }}
                />
              </div>

              {/* View Switcher: Interactive 3D Turntable vs Studio Atelier Visual */}
              <div className="relative z-20 mt-2 flex items-center gap-2 bg-[#0d0c09] p-1 rounded-full border border-[rgba(201,169,110,0.2)]">
                <button
                  type="button"
                  onClick={() => setViewMode('3d-interactive')}
                  className={`px-3 py-1 rounded-full text-[0.56rem] tracking-[0.18em] uppercase font-medium transition-all duration-300 ${viewMode === '3d-interactive'
                      ? 'bg-gradient-to-r from-[#e8d5a3] to-[#c9a96e] text-[#060606] shadow-sm'
                      : 'text-[#8a8070] hover:text-[#e8d5a3]'
                    }`}
                >
                  Interactive 3D Turntable
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('atelier')}
                  className={`px-3 py-1 rounded-full text-[0.56rem] tracking-[0.18em] uppercase font-medium transition-all duration-300 ${viewMode === 'atelier'
                      ? 'bg-gradient-to-r from-[#e8d5a3] to-[#c9a96e] text-[#060606] shadow-sm'
                      : 'text-[#8a8070] hover:text-[#e8d5a3]'
                    }`}
                >
                  Atelier Studio
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Scroll Down Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="label text-[0.52rem] text-[#8a8070]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 5l4 4 4-4" stroke="#c9a96e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
