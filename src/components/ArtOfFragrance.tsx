import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'motion/react'

export default function ArtOfFragrance() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-70px' })

  // Scroll parallax on the featured editorial visual
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section
      ref={ref}
      id="fragrance"
      className="relative overflow-hidden"
      style={{ background: '#0b0a07' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[78vh]">

          {/* Left Column: Parallax Editorial Perfume Bottle Visual */}
          <div className="relative overflow-hidden min-h-[460px] lg:min-h-full">
            <motion.div style={{ y: imgY }} className="absolute inset-[-10%]">
              <img
                src="https://media.istockphoto.com/id/860801382/photo/perfume-spraying-on-purple-background.jpg?s=2048x2048&w=is&k=20&c=fvcIn_ilAkmgyLF9UzIaRpy5U6yAM7t-wHBvNT4k-nQ="
                alt="Bespoke luxury perfume bottle with warm amber fragrance liquid"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </motion.div>

            {/* Cinematic Gradient Overlays */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, transparent 35%, #0b0a07 100%)',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, #0b0a07 10%, transparent 45%)',
              }}
            />

            {/* Floating Luxury Editorial Quote */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-10 left-8 right-8 lg:right-6 z-10"
            >
              <div className="border-l-2 border-[#c9a96e] pl-5 backdrop-blur-[2px]">
                <p className="font-display text-[#e8d5a3] text-[1.25rem] sm:text-[1.4rem] font-light leading-snug italic">
                  "Fragrance is the invisible signature<br className="hidden sm:block" /> that lingers long after you have departed."
                </p>
                <p className="label mt-3 text-[0.55rem] text-[#c9a96e]/90">
                  The Demo Perfume · Dubai
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Craft Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 26 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-24"
          >
            <div className="flex items-center gap-4 mb-7">
              <div className="h-px w-10 bg-[#c9a96e]" />
              <span className="label">The Craft</span>
            </div>

            <h2 className="font-display text-[clamp(2.3rem,3.4vw,3.6rem)] font-light text-[#f5f0e8] leading-[1.08] mb-7">
              The Art of{' '}
              <em className="italic text-[#c9a96e]">Fragrance</em>
            </h2>

            <p className="font-body text-[#8a8070] text-[0.84rem] leading-[1.9] tracking-wide mb-4">
              Fragrance is far more than an olfactory sensation — it is an emotional dialect. At The Demo Perfume,
              we approach every creation as an unfolding narrative, sculpted from the world's most prized raw botanical essences
              and rare aromatic accords.
            </p>

            <p className="font-body text-[#8a8070] text-[0.84rem] leading-[1.9] tracking-wide mb-8">
              From the initial top notes that arrest the senses to the deep, resonant base accords that become a memory,
              each formulation is engineered with intention, longevity, and singular presence.
            </p>

            {/* Key Pillars */}
            <ul className="space-y-3.5 mb-10">
              {[
                'Bespoke scent architecture designed specifically for your brand',
                'Meticulously sourced botanicals, natural extracts, and rare resins',
                'Seamless collaborative formulation process from concept to flacon',
                'Certified international standards ensuring stability and lasting sillage',
              ].map((f) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] mt-[0.38rem] flex-shrink-0" />
                  <span className="font-body text-[#8a8070] text-[0.8rem] leading-relaxed">
                    {f}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary self-start"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Begin Your Fragrance Story</span>
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
