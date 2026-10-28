import { motion } from 'motion/react'

export default function AnnouncementBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="relative z-40 h-9 px-4 text-center overflow-hidden flex items-center justify-center border-b border-[rgba(201,169,110,0.12)]"
      style={{ background: 'linear-gradient(90deg, #090806 0%, #15120c 50%, #090806 100%)' }}
    >
      {/* Subtle shimmer effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.15), transparent)',
          width: '50%',
        }}
      />

      <div className="relative flex items-center justify-center gap-3 sm:gap-5">
        <div className="hidden sm:block h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#c9a96e]" />
        <p className="font-body text-[#c9a96e] text-[0.56rem] sm:text-[0.62rem] tracking-[0.28em] sm:tracking-[0.34em] uppercase font-medium">
          Bespoke Fragrance Creation &nbsp;·&nbsp; Private Label &nbsp;·&nbsp; Luxury Packaging
        </p>
        <div className="hidden sm:block h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#c9a96e]" />
      </div>
    </motion.div>
  )
}
