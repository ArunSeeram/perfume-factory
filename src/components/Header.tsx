import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const navLinks = [
  { label: 'Our Expertise', href: '#expertise' },
  { label: 'Fragrance Creation', href: '#fragrance' },
  { label: 'Packaging', href: '#packaging' },
  { label: 'Brand Journey', href: '#brand-journey' },
  { label: 'Why Partner', href: '#why-us' },
]

function scrollTo(id: string) {
  const el = document.querySelector(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(7, 7, 6, 0.96)' : 'rgba(7, 7, 6, 0.82)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(201, 169, 110, 0.18)',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.6)' : 'none',
        }}
      >
        {/* ── Top Announcement Bar (collapses smoothly when scrolled) ── */}
        <div
          className={`overflow-hidden transition-all duration-300 border-b border-[rgba(201,169,110,0.12)] ${scrolled ? 'h-0 opacity-0' : 'h-8 opacity-100'
            }`}
          style={{ background: 'linear-gradient(90deg, #090806 0%, #16120b 50%, #090806 100%)' }}
        >
          <div className="h-full flex items-center justify-center px-4 gap-3">
            <span className="hidden sm:inline-block h-px w-12 bg-gradient-to-r from-transparent to-[#c9a96e]" />
            <p className="font-body text-[#c9a96e] text-[0.6rem] sm:text-[0.66rem] tracking-[0.26em] uppercase font-medium">
              Bespoke Fragrance Creation &nbsp;·&nbsp; Private Label &nbsp;·&nbsp; Luxury Packaging Solutions
            </p>
            <span className="hidden sm:inline-block h-px w-12 bg-gradient-to-l from-transparent to-[#c9a96e]" />
          </div>
        </div>

        {/* ── Main Navigation Bar (Logo firmly anchored to far left with wide breathing space) ── */}
        <nav className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="flex items-center justify-between h-[72px]">

            {/* Brand Logo (Far Left Anchor — functions as Home button) */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('#home')
              }}
              className="flex flex-col leading-none group cursor-pointer flex-shrink-0 mr-auto"
              aria-label="The Demo Perfume Home"
            >
              <span className="font-display text-[#f5f0e8] text-[1.24rem] font-light tracking-[0.22em] uppercase group-hover:text-[#c9a96e] transition-colors">
                The Perfume
              </span>
              <span className="font-display text-[#c9a96e] text-[0.62rem] font-medium tracking-[0.48em] uppercase mt-0.5">
                Factory · Dubai
              </span>
            </a>

            {/* Desktop Navigation Links (Spaced elegantly on right) */}
            <div className="hidden lg:flex items-center ml-auto">
              <ul className="flex items-center gap-7 xl:gap-8">
                {navLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollTo(l.href)
                      }}
                      className="font-body text-[#dcd4c5] hover:text-[#c9a96e] transition-colors duration-200 text-[0.72rem] tracking-[0.16em] uppercase font-medium py-1 block relative group whitespace-nowrap"
                    >
                      <span>{l.label}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-[#c9a96e] group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Vertical Luxury Hairline Divider */}
              <div className="h-6 w-px bg-[rgba(201,169,110,0.25)] mx-7 xl:mx-9" />

              {/* Standalone CTA Button */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo('#contact')
                }}
                className="btn-primary text-[0.62rem] py-2 px-4.5 tracking-[0.14em] whitespace-nowrap flex-shrink-0"
              >
                <span>Start Your Journey</span>
              </a>
            </div>

            {/* Hamburger Button for Mobile/Tablet */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="p-2 text-[#c9a96e] hover:text-[#f5f0e8] transition-colors"
                aria-label="Open navigation menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="3" y1="18" x2="16" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ── Mobile Navigation Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/75 backdrop-blur-md z-[60]"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 right-0 bottom-0 w-[300px] sm:w-[340px] z-[70] flex flex-col shadow-2xl"
              style={{
                background: '#0d0b08',
                borderLeft: '1px solid rgba(201,169,110,0.22)',
              }}
            >
              {/* Drawer Header */}
              <div
                className="flex items-center justify-between p-6"
                style={{ borderBottom: '1px solid rgba(201,169,110,0.14)' }}
              >
                <div className="flex flex-col">
                  <span className="font-display text-[#f5f0e8] text-lg font-light tracking-[0.2em] uppercase">
                    The Demo Perfume
                  </span>
                  <span className="font-display text-[#c9a96e] text-[0.6rem] tracking-[0.4em] uppercase">
                    Dubai
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="p-1.5 text-[#8a8070] hover:text-[#f5f0e8] transition-colors"
                  aria-label="Close navigation menu"
                >
                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                    <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col p-6 gap-1 flex-1 overflow-y-auto">
                {[{ label: 'Home', href: '#home' }, ...navLinks, { label: 'Contact', href: '#contact' }].map((l, i) => (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(l.href)
                      setMenuOpen(false)
                    }}
                    className="py-3.5 text-[#dcd4c5] hover:text-[#c9a96e] transition-colors text-[0.78rem] tracking-[0.16em] uppercase font-light"
                    style={{ borderBottom: '1px solid rgba(201,169,110,0.08)' }}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>

              {/* Drawer CTA */}
              <div className="p-6 border-t border-[rgba(201,169,110,0.14)]">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo('#contact')
                    setMenuOpen(false)
                  }}
                  className="btn-primary w-full justify-center text-[0.62rem] py-2.5 tracking-[0.14em]"
                >
                  <span>Start Your Journey</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
