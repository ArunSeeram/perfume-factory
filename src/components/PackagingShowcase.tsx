import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const images = [
  {
    src:  'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=900&q=85&auto=format&fit=crop',
    alt:  'Architectural glass flacon with amber perfume essence',
    title: 'Architectural Flacons',
    tag:  'Heavy Crystal Glass',
    span: 'col-span-2 row-span-2 min-h-[380px]',
  },
  {
    src:  'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=85&auto=format&fit=crop',
    alt:  'Hand-tied silk ribbon and gold neck collar detail',
    title: 'Bespoke Closures',
    tag:  'Metal & Silk',
    span: 'col-span-1 min-h-[180px]',
  },
  {
    src:  'https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=600&q=85&auto=format&fit=crop',
    alt:  'Rigid luxury fragrance box presentation with foil stamping',
    title: 'Presentation Boxes',
    tag:  'Gold Foil & Velvet',
    span: 'col-span-1 min-h-[180px]',
  },
  {
    src:  'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=85&auto=format&fit=crop',
    alt:  'Refractive glass textures and polished luxury finishes',
    title: 'Custom Finishes',
    tag:  'Frosted & Embossed',
    span: 'col-span-2 min-h-[180px]',
  },
]

export default function PackagingShowcase() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      id="packaging"
      className="py-32 relative overflow-hidden"
      style={{ background: '#060606' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="flex items-center gap-4 mb-5"
            >
              <div className="h-px w-10 bg-[#c9a96e]" />
              <span className="label">Bespoke Design</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-light text-[#f5f0e8] leading-tight"
            >
              Packaging Showcase
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="font-body text-[#8a8070] text-[0.82rem] leading-[1.85] max-w-md tracking-wide"
          >
            Every flacon is an objet d'art. Every outer box an indelible statement.
            Our custom glass silhouettes, metallic hardware, and precision finishing protect and glorify the scent within.
          </motion.p>
        </div>

        {/* Mosaic Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-auto">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden group rounded-sm ${img.span}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.75, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
              />

              {/* Ambient Vignette Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(to top, rgba(6,6,6,0.85) 0%, rgba(6,6,6,0.2) 50%, transparent 100%)',
                }}
              />

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
                <div>
                  <span className="label text-[0.52rem] text-[#c9a96e] block mb-1">
                    {img.tag}
                  </span>
                  <p className="font-display text-[#f5f0e8] text-lg font-light leading-snug">
                    {img.title}
                  </p>
                </div>
              </div>

              {/* Subtle Gold Border on Hover */}
              <div
                className="absolute inset-0 border border-[#c9a96e] opacity-0 group-hover:opacity-40 transition-opacity duration-400 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
