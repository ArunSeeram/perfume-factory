import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Expertise', href: '#expertise' },
  { label: 'Fragrance Creation', href: '#fragrance' },
  { label: 'Packaging', href: '#packaging' },
  { label: 'Create Your Brand', href: '#brand-journey' },
  { label: 'Why Partner', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

function scrollTo(id: string) {
  const el = document.querySelector(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* ── Main Navigation Bar ── */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed left-0 right-0 z-50 transition-all duration-300 ease-out"
        style={{
          top: scrolled ? '0px' : '36px',
          background: scrolled ? 'rgba(6, 6, 6, 0.94)' : 'rgba(6, 6, 6, 0.55)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled
            ? '1px solid rgba(201, 169, 110, 0.16)'
            : '1px solid rgba(201, 169, 110, 0.08)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-14">
          <div className="flex items-center justify-between h-[68px]">

            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('#home')
              }}
              className="flex flex-col leading-none group"
              aria-label="The Demo Perfume Home"
            >
              <span className="font-display text-[#e8d5a3] text-[1.12rem] font-light tracking-[0.22em] uppercase group-hover:text-[#f5f0e8] transition-colors">
                The Perfume
              </span>
              <span className="font-display text-[#c9a96e] text-[0.58rem] font-light tracking-[0.5em] uppercase mt-0.5">
                Factory · Dubai
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center gap-7 xl:gap-8">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(l.href)
                    }}
                    className="font-body text-[#8a8070] hover:text-[#e8d5a3] transition-colors duration-300 text-[0.62rem] tracking-[0.22em] uppercase font-medium relative py-1"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Header CTA + Mobile Hamburger Toggle */}
            <div className="flex items-center gap-4">
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo('#contact')
                }}
                className="hidden lg:inline-flex btn-primary text-[0.62rem] py-2.5 px-5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Start Your Journey</span>
              </motion.a>

              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden p-2 text-[#c9a96e] hover:text-[#e8d5a3] transition-colors"
                aria-label="Open mobile menu"
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="15" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Navigation Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 right-0 bottom-0 w-[300px] z-50 flex flex-col"
              style={{
                background: '#0e0c08',
                borderLeft: '1px solid rgba(201,169,110,0.18)',
              }}
            >
              {/* Drawer Header */}
              <div
                className="flex items-center justify-between p-6"
                style={{ borderBottom: '1px solid rgba(201,169,110,0.1)' }}
              >
                <div className="flex flex-col">
                  <span className="font-display text-[#e8d5a3] text-base font-light tracking-[0.2em] uppercase">
                    The Demo Perfume
                  </span>
                  <span className="font-display text-[#c9a96e] text-[0.55rem] tracking-[0.35em] uppercase">
                    Dubai
                  </span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1 text-[#8a8070] hover:text-[#e8d5a3] transition-colors"
                  aria-label="Close mobile menu"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col p-6 gap-1 flex-1 overflow-y-auto">
                {navLinks.map((l, i) => (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(l.href)
                      setMenuOpen(false)
                    }}
                    className="py-3.5 text-[#8a8070] hover:text-[#e8d5a3] transition-colors text-[0.72rem] tracking-[0.18em] uppercase font-light"
                    style={{ borderBottom: '1px solid rgba(201,169,110,0.06)' }}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>

              {/* Drawer CTA */}
              <div className="p-6 border-t border-[rgba(201,169,110,0.1)]">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo('#contact')
                    setMenuOpen(false)
                  }}
                  className="btn-primary w-full justify-center text-[0.65rem]"
                >
                  <span>Start Your Fragrance Journey</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
