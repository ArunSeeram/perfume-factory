import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const services = [
  {
    id: 'private-label',
    num: '01',
    title: 'Private Label\nFragrances',
    tag: 'Brand Identity',
    desc: 'Launch your own signature scent under your brand. We handle the complete creation process — from scent formulation and material sourcing to final bottling and branded packaging.',
    img: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'fragrance-dev',
    num: '02',
    title: 'Fragrance\nDevelopment',
    tag: 'Artisan Craft',
    desc: 'Our master perfumers work closely with you to curate a distinct olfactory signature. From initial aromatic brief to final formulation, every note is calibrated with utmost precision.',
    img: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'luxury-packaging',
    num: '03',
    title: 'Luxury\nPackaging',
    tag: 'Luxury Design',
    desc: 'Elevate your fragrance with bespoke packaging solutions — hand-finished heavy glass flacons, custom metallic caps, rigid presentation boxes, and tactile finishes that command prestige.',
    img: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=900&q=85&auto=format&fit=crop',
  },
]

function ServiceCard({ s, i }: { s: typeof services[0]; i: number }) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 45 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: i * 0.14, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, transition: { duration: 0.35, ease: 'easeOut' } }}
      className="card-glass group relative flex flex-col overflow-hidden"
    >
      {/* Featured Visual */}
      <div className="relative h-[270px] overflow-hidden bg-[#0d0c09]">
        <motion.img
          src={s.img}
          alt={`${s.title.replace('\n', ' ')} — The Demo Perfume Dubai`}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, #11100c 20%, rgba(10,10,8,0.3) 60%, transparent)',
          }}
        />

        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span
            className="label text-[0.54rem] px-3 py-1 border"
            style={{
              background: 'rgba(6,6,6,0.78)',
              borderColor: 'rgba(201,169,110,0.28)',
            }}
          >
            {s.tag}
          </span>
        </div>

        {/* Numbering Watermark */}
        <span
          className="absolute top-3 right-5 font-display text-[3.4rem] font-light leading-none select-none pointer-events-none"
          style={{ color: 'rgba(201,169,110,0.14)' }}
        >
          {s.num}
        </span>
      </div>

      {/* Card Body */}
      <div className="flex flex-col gap-4 p-8 flex-1">
        <h3 className="font-display text-[#f5f0e8] text-[1.6rem] font-light leading-tight whitespace-pre-line group-hover:text-[#e8d5a3] transition-colors">
          {s.title}
        </h3>

        <div className="h-px w-10 bg-gradient-to-r from-[#c9a96e] to-transparent" />

        <p className="font-body text-[#8a8070] text-[0.82rem] leading-[1.85] font-light tracking-wide">
          {s.desc}
        </p>

        <div className="mt-auto pt-4">
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 label text-[0.62rem] text-[#c9a96e] group-hover:text-[#e8d5a3] hover:gap-3 transition-all duration-300"
            whileHover={{ x: 3 }}
          >
            <span>Consult Perfumer</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6h8M6.5 2.5 10 6l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </div>
      </div>

      {/* Bottom Gold Accent Hover Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          background: 'linear-gradient(90deg, transparent, #c9a96e, transparent)',
          transformOrigin: 'center',
        }}
      />
    </motion.article>
  )
}

export default function Expertise() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="expertise" className="relative py-32" style={{ background: '#080806' }}>
      {/* Decorative subtle texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="g2" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M 56 0 L 0 0 0 56" fill="none" stroke="#c9a96e" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#g2)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        {/* Section Heading */}
        <div ref={ref} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c9a96e]" />
            <span className="label">Our Expertise</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c9a96e]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(2.4rem,4.2vw,3.8rem)] font-light text-[#f5f0e8] leading-tight"
          >
            Signature Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 font-body text-[#8a8070] text-[0.85rem] max-w-xl mx-auto leading-[1.9] tracking-wide"
          >
            End-to-end fragrance and packaging solutions for discerning brands that demand nothing less than exceptional distinction.
          </motion.p>
        </div>

        {/* 3 Service Columns */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
