export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer
      className="relative pt-24 pb-12 overflow-hidden"
      style={{
        background: '#040403',
        borderTop: '1px solid rgba(201,169,110,0.14)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-14 pb-16"
          style={{ borderBottom: '1px solid rgba(201,169,110,0.08)' }}
        >
          {/* Brand Identity */}
          <div className="space-y-5">
            <div>
              <p className="font-display text-[#e8d5a3] text-[1.2rem] font-light tracking-[0.22em] uppercase">
                The Demo Perfume
              </p>
              <p className="font-display text-[#c9a96e] text-[0.6rem] tracking-[0.46em] uppercase mt-1">
                Dubai · UAE
              </p>
            </div>

            <p className="font-body text-[#665e52] text-[0.8rem] leading-[1.85] tracking-wide max-w-[310px]">
              Independent haute parfumerie redesign concept for The Demo Perfume, Dubai.
              Pioneering bespoke scent development, private label prestige, and architectural packaging.
            </p>

            <div className="flex items-center gap-3 pt-1">
              {/* Instagram */}
              <a
                href="https://instagram.com/#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Demo Perfume on Instagram"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:border-[#c9a96e] hover:text-[#e8d5a3]"
                style={{
                  border: '1px solid rgba(201,169,110,0.22)',
                  color: '#c9a96e',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1.5" y="1.5" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="1" />
                  <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1" />
                  <circle cx="10.3" cy="3.7" r="0.7" fill="currentColor" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/the-perfume-factory"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Demo Perfume on LinkedIn"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:border-[#c9a96e] hover:text-[#e8d5a3]"
                style={{
                  border: '1px solid rgba(201,169,110,0.22)',
                  color: '#c9a96e',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1.5" y="1.5" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1" />
                  <path
                    d="M4 6v4M4 4.5v.01M6.5 10V7.5c0-1 .5-1.5 1.5-1.5s1.5.5 1.5 1.5V10"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <p className="label text-[0.62rem] text-[#c9a96e] mb-5">Navigation</p>
            <ul className="space-y-3">
              {[
                { l: 'Home', h: '#home' },
                { l: 'Our Expertise', h: '#expertise' },
                { l: 'Fragrance Creation', h: '#fragrance' },
                { l: 'Packaging Showcase', h: '#packaging' },
                { l: 'Create Your Brand', h: '#brand-journey' },
                { l: 'Why Partner With Us', h: '#why-us' },
              ].map(({ l, h }) => (
                <li key={l}>
                  <a
                    href={h}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(h)
                    }}
                    className="font-body text-[#665e52] hover:text-[#e8d5a3] transition-colors text-[0.78rem] tracking-[0.08em]"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <p className="label text-[0.62rem] text-[#c9a96e] mb-5">Capabilities</p>
            <ul className="space-y-3">
              {[
                'Private Label Manufacturing',
                'Custom Olfactory Architecture',
                'Zamak & Crystal Closures',
                'Luxury Box Printing & Foiling',
                'Cleanroom Filling & Maceration',
                'Global Regulatory Compliance',
              ].map((item) => (
                <li key={item} className="font-body text-[#665e52] text-[0.78rem] tracking-[0.04em]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <p className="label text-[0.62rem] text-[#c9a96e] mb-5">Studio & Atelier</p>
            <div className="space-y-4">
              <div>
                <p className="label text-[0.52rem] text-[#8a8070] mb-1">Location</p>
                <p className="font-body text-[#665e52] text-[0.78rem] leading-relaxed">
                  Dubai Industrial City,<br />Dubai, United Arab Emirates
                </p>
              </div>

              <div>
                <p className="label text-[0.52rem] text-[#8a8070] mb-1">Direct Inquiries</p>
                <a
                  href="mailto:info@demoperfume.com"
                  className="font-body text-[#665e52] hover:text-[#e8d5a3] text-[0.78rem] transition-colors"
                >
                  info@demoperfume.com
                </a>
              </div>

              <div>
                <p className="label text-[0.52rem] text-[#8a8070] mb-1">Official Reference</p>
                <a
                  href="https://demoperfume.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[#c9a96e] hover:text-[#e8d5a3] text-[0.78rem] transition-colors inline-flex items-center gap-1"
                >
                  <span>demoperfume.com</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-body text-[#443e36] text-[0.68rem] tracking-wide">
            © {new Date().getFullYear()} The Demo Perfume. All rights reserved.
          </p>
          <p className="font-body text-[#3c362f] text-[0.66rem] tracking-wide text-center sm:text-right">
            Independent client presentation redesign concept. Not an official corporate site.
          </p>
        </div>
      </div>
    </footer>
  )
}
