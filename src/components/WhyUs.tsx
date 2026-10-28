import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#c9a96e" strokeWidth="1.2" />
        <path d="M9 14l3.5 3.5L19 10" stroke="#c9a96e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'End-to-End Orchestration',
    desc: 'From initial fragrance brief and raw ingredient sourcing to formulation, packaging, and logistics, we guide the entire lifecycle under one roof.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 4l2.6 5.3 5.9.85-4.25 4.14 1 5.86L14 17.27l-5.25 2.88 1-5.86L5.5 10.18l5.9-.85L14 4z"
          stroke="#c9a96e"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Master Perfumer Formulation',
    desc: 'Collaborating with experienced noses in Grasse and Dubai to craft rare, distinctive scent profiles that leave an indelible olfactory footprint.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="5" width="18" height="18" rx="3" stroke="#c9a96e" strokeWidth="1.2" />
        <path d="M9 14h10M14 9v10" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Bespoke Packaging Engineering',
    desc: 'Heavy custom-molded glass, metallic caps, silk-screen printing, and luxury rigid box sets that look and feel unequivocally prestigious.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M8 14c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M14 8v2M14 18v2M8 14H6M22 14h-2" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Flexible Private Label Tiers',
    desc: 'Scalable production runs tailored to boutique niche launches as well as large-scale global brand rollouts with strict quality assurance.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 5v4M14 19v4M5 14h4M19 14h4" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="14" cy="14" r="5" stroke="#c9a96e" strokeWidth="1.2" />
      </svg>
    ),
    title: 'Dubai Global Fragrance Hub',
    desc: 'Situated at the historic crossroads of Eastern oud heritage and modern Western haute parfumerie, offering strategic global dispatch.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M7 21l7-14 7 14" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 17h9" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Collaborative Creative Partnership',
    desc: 'We work transparently as an extension of your brand team, ensuring creative alignment, confidentiality, and mutual ambition.',
  },
]

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      id="why-us"
      className="relative py-32 overflow-hidden"
      style={{ background: '#080806' }}
    >
      {/* Radial warm lighting */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(201,169,110,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c9a96e]" />
            <span className="label">Why Partner With Us</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c9a96e]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-light text-[#f5f0e8] leading-tight"
          >
            The Demo Perfume Difference
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-5 font-body text-[#8a8070] text-[0.85rem] max-w-xl mx-auto leading-[1.9] tracking-wide"
          >
            Uncompromising craftsmanship, bespoke technical mastery, and creative vision dedicated to your brand's olfactory legacy.
          </motion.p>
        </div>

        {/* 6 Trust Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="card-glass relative p-8 group rounded-sm"
            >
              {/* Pillar Icon Emblem */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors duration-400 group-hover:border-[rgba(201,169,110,0.5)]"
                style={{
                  border: '1px solid rgba(201,169,110,0.22)',
                  background: 'rgba(201,169,110,0.06)',
                }}
              >
                {p.icon}
              </div>

              <h3 className="font-display text-[#e8d5a3] text-[1.2rem] font-light mb-3 group-hover:text-[#f5f0e8] transition-colors">
                {p.title}
              </h3>

              <p className="font-body text-[#8a8070] text-[0.8rem] leading-[1.85] tracking-wide">
                {p.desc}
              </p>

              {/* Corner Accent Detail */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full border-t border-r border-[rgba(201,169,110,0.4)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
