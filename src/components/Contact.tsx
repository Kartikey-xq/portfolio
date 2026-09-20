import React, { useState } from 'react'
import { Phone, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react'
import { GithubIcon } from './icons/GithubIcon'

export const Contact: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false)
  const phoneNumber = '9258580525'

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(phoneNumber)
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 scroll-mt-16 bg-gradient-to-b from-zinc-950/60 to-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-400 mb-6">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
          Let's Build Something
        </h2>

        <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12">
          I'm currently looking for Shopify Developer, Shopify Liquid Developer and Junior Frontend opportunities.
        </p>

        {/* Contact Details Card */}
        <div className="max-w-xl mx-auto bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          <div className="text-left mb-6 pb-6 border-b border-zinc-800/80">
            <span className="text-xs uppercase font-mono tracking-wider text-zinc-500 block mb-1">
              Candidate
            </span>
            <span className="text-xl font-bold text-white block">
              Kartikey Joshi
            </span>
            <span className="text-xs text-purple-400 font-mono">
              Shopify Liquid Developer · Fresher
            </span>
          </div>

          <div className="space-y-4">
            {/* Phone Card */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-950/80 border border-zinc-800">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-purple-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase block">Phone</span>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-base font-mono font-semibold text-zinc-100 hover:text-purple-400 transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyPhoneNumber}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800 transition-colors"
                  title="Copy Phone Number"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`tel:${phoneNumber}`}
                  className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-colors"
                >
                  Call
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href="https://github.com/Kartikey-xq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 transition-all group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase block">GitHub</span>
                  <span className="text-sm font-mono font-semibold text-zinc-200 group-hover:text-white">
                    github.com/Kartikey-xq
                  </span>
                </div>
              </div>

              <span className="p-2 rounded-lg bg-zinc-900 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>

        {/* Bottom prompt note */}
        <div className="mt-12 text-zinc-500 text-xs font-mono">
          Available for Immediate Joining · Remote or On-site
        </div>
      </div>
    </section>
  )
}
