import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const steps = [
  {
    n: '01',
    title: 'Concept & Olfactory Brief',
    desc: 'We begin with an in-depth creative discovery session to crystallize your brand story, target market, aesthetic codes, and signature fragrance family.',
  },
  {
    n: '02',
    title: 'Bespoke Scent Formulation',
    desc: 'Our master perfumers create candidate accords using premium raw essences, refining top, heart, and base notes through interactive evaluation cycles.',
  },
  {
    n: '03',
    title: 'Custom Flacon & Box Engineering',
    desc: 'From custom glass molds, weighted zamak caps, and fine mist atomizers to debossed rigid presentation boxes, every detail is engineered to perfection.',
  },
  {
    n: '04',
    title: 'Certified Production & Delivery',
    desc: 'Maceration, filtration, cleanroom filling, quality inspection, and international compliance documentation — delivered turnkey from Dubai to the world.',
  },
]

export default function CreateBrand() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      id="brand-journey"
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #090806 0%, #110f0a 50%, #070705 100%)' }}
    >
      {/* Subtle Background Monogram Watermark */}
      <div
        className="absolute right-[-2%] top-[6%] font-display text-[26vw] font-light leading-none select-none pointer-events-none"
        style={{ color: 'rgba(201,169,110,0.02)', lineHeight: 1 }}
      >
        TPF
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-14 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Mission & Invitation */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="flex items-center gap-4 mb-7"
            >
              <div className="h-px w-10 bg-[#c9a96e]" />
              <span className="label">Your Brand Journey</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[clamp(2.3rem,3.6vw,3.6rem)] font-light text-[#f5f0e8] leading-[1.08] mb-7"
            >
              Create Your<br />
              <em className="italic text-[#c9a96e]">Own Fragrance Brand</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="font-body text-[#8a8070] text-[0.85rem] leading-[1.9] tracking-wide mb-8"
            >
              Whether you are an established fashion house, luxury hotel group, high-profile creator,
              or visionary entrepreneur, The Demo Perfume offers the infrastructure, artistry, and global supply
              chain to bring an unforgettable fragrance collection to market under your own marque.
            </motion.p>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              <span>Schedule Brand Consultation</span>
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
          </div>

          {/* Right Column: 4-Stage Turnkey Process */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: 22 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.1 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex gap-6 py-7 group"
                style={{
                  borderBottom: i < steps.length - 1 ? '1px solid rgba(201,169,110,0.09)' : 'none',
                }}
              >
                {/* Step Number */}
                <div className="flex-shrink-0 w-12">
                  <span
                    className="font-display text-[2.2rem] font-light leading-none group-hover:text-[#c9a96e] transition-colors duration-400"
                    style={{ color: 'rgba(201,169,110,0.32)' }}
                  >
                    {step.n}
                  </span>
                </div>

                {/* Step Narrative */}
                <div>
                  <h3 className="font-display text-[#e8d5a3] text-[1.2rem] font-light mb-2 group-hover:text-[#f5f0e8] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-body text-[#8a8070] text-[0.82rem] leading-[1.85] tracking-wide">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
