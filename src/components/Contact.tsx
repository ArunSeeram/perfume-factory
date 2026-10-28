import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulated elegant sending experience for concept presentation
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
  }

  const inputCls = `
    w-full bg-[#0c0a07] border border-[rgba(201,169,110,0.18)]
    px-4 py-3.5 font-body text-[#f5f0e8] text-[0.82rem] tracking-wide
    placeholder:text-[#554d3f]
    focus:outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[rgba(201,169,110,0.3)]
    transition-all duration-300 rounded-sm
  `

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-32 overflow-hidden"
      style={{ background: '#050504' }}
    >
      {/* Ambient warm gradient pool */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 85%, rgba(201,169,110,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-14 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-16 lg:gap-20 items-start">

          {/* Left Column: Direct Inquiries & Contact Metadata */}
          <div className="lg:pt-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-10 bg-[#c9a96e]" />
              <span className="label">Consultation & Inquiries</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[clamp(2.3rem,3.4vw,3.6rem)] font-light text-[#f5f0e8] leading-[1.08] mb-6"
            >
              Begin Your<br />
              <em className="italic text-[#c9a96e]">Fragrance Journey</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="font-body text-[#8a8070] text-[0.84rem] leading-[1.9] tracking-wide mb-10"
            >
              Share your project vision with our creative team. Whether developing a signature private label,
              commissioning bespoke fragrance formulations, or creating iconic custom packaging, we look forward to collaborating.
            </motion.p>

            {/* Verified Location & Studio Details */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.24 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    border: '1px solid rgba(201,169,110,0.25)',
                    background: 'rgba(201,169,110,0.06)',
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 1C4.8 1 3 2.8 3 5c0 3.3 4 8 4 8s4-4.7 4-8c0-2.2-1.8-4-4-4z"
                      stroke="#c9a96e"
                      strokeWidth="1.2"
                    />
                    <circle cx="7" cy="5" r="1.5" stroke="#c9a96e" strokeWidth="1" />
                  </svg>
                </div>
                <div>
                  <p className="label text-[0.55rem] text-[#c9a96e] mb-1">Creation Studio & Headquarters</p>
                  <p className="font-body text-[#8a8070] text-[0.82rem] leading-relaxed">
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    border: '1px solid rgba(201,169,110,0.25)',
                    background: 'rgba(201,169,110,0.06)',
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="3" width="12" height="9" rx="1.5" stroke="#c9a96e" strokeWidth="1.2" />
                    <path d="M1 4.5l6 4 6-4" stroke="#c9a96e" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="label text-[0.55rem] text-[#c9a96e] mb-1">Corporate & Client Relations</p>
                  <a
                    href="mailto:info@demoperfume.com"
                    className="font-body text-[#8a8070] text-[0.82rem] hover:text-[#e8d5a3] transition-colors"
                  >
                    info@demoperfume.com
                  </a>
                </div>
              </div>

              {/* Direct WhatsApp Client Concierge */}
              <div className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    border: '1px solid rgba(201,169,110,0.25)',
                    background: 'rgba(201,169,110,0.06)',
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                      stroke="#c9a96e"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="label text-[0.55rem] text-[#c9a96e] mb-1">Direct Brand Concierge</p>
                  <a
                    href="https://wa.me/?text=Hello%20The%20Perfume%20Factory,%20I%20would%20like%20to%20inquire%20about%20bespoke%20fragrance%20creation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-body text-[#8a8070] text-[0.82rem] hover:text-[#e8d5a3] transition-colors"
                  >
                    <span>Connect on WhatsApp</span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 9L9 1M9 1H3M9 1V7" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.14, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="card-glass p-8 sm:p-10 relative rounded-sm"
          >
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="flex flex-col items-center justify-center py-16 text-center gap-6"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    border: '1px solid rgba(201,169,110,0.4)',
                    background: 'rgba(201,169,110,0.08)',
                  }}
                >
                  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M6 14l5 5 11-11"
                      stroke="#c9a96e"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="font-display text-[#e8d5a3] text-2xl font-light mb-2">
                    Inquiry Received
                  </h3>
                  <p className="font-body text-[#8a8070] text-[0.84rem] max-w-sm leading-relaxed">
                    Thank you, {form.name || 'valued partner'}. A fragrance development director will contact you within 24 business hours.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle')
                    setForm({ name: '', email: '', company: '', type: '', message: '' })
                  }}
                  className="btn-outline text-[0.62rem] py-2 px-6"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="label text-[0.55rem] block mb-2 text-[#c9a96e]">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handle}
                      placeholder="e.g. Elena Rostova"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="label text-[0.55rem] block mb-2 text-[#c9a96e]">
                      Business Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handle}
                      placeholder="elena@maisonluxury.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className="label text-[0.55rem] block mb-2 text-[#c9a96e]">
                    Company / Brand Name
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handle}
                    placeholder="Maison de Parfum / Private Client"
                    className={inputCls}
                  />
                </div>

                {/* Project Type Select with Custom Icon */}
                <div className="relative">
                  <label className="label text-[0.55rem] block mb-2 text-[#c9a96e]">
                    Project Classification *
                  </label>
                  <div className="relative">
                    <select
                      name="type"
                      required
                      value={form.type}
                      onChange={handle}
                      className={`${inputCls} pr-10`}
                      style={{
                        appearance: 'none',
                        WebkitAppearance: 'none',
                      }}
                    >
                      <option value="" disabled style={{ background: '#12100c', color: '#666' }}>
                        Select Project Scope
                      </option>
                      <option value="private-label" style={{ background: '#12100c', color: '#f5f0e8' }}>
                        Private Label Fragrance Line
                      </option>
                      <option value="bespoke" style={{ background: '#12100c', color: '#f5f0e8' }}>
                        Bespoke Haute Parfumerie Formulation
                      </option>
                      <option value="packaging" style={{ background: '#12100c', color: '#f5f0e8' }}>
                        Luxury Packaging & Flacon Engineering
                      </option>
                      <option value="turnkey" style={{ background: '#12100c', color: '#f5f0e8' }}>
                        Turnkey Brand Incubation (End-to-End)
                      </option>
                      <option value="other" style={{ background: '#12100c', color: '#f5f0e8' }}>
                        Other Commercial Collaboration
                      </option>
                    </select>

                    {/* Custom Down Chevron Arrow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#c9a96e]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="label text-[0.55rem] block mb-2 text-[#c9a96e]">
                    Project Vision & Timelines *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handle}
                    placeholder="Tell us about your brand aesthetic, desired olfactory notes, target launch date, and approximate volume..."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center mt-2"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{status === 'sending' ? 'Transmitting Inquiry…' : 'Send Direct Inquiry'}</span>
                  {status !== 'sending' && (
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path
                        d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </motion.button>

                <p className="font-body text-[#5a5245] text-[0.66rem] text-center tracking-wide pt-2">
                  Confidentiality guaranteed. All fragrance development briefs are protected under mutual NDA.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
