import React from 'react'
import { CheckCircle } from 'lucide-react'

const RESPONSIBILITIES = [
  'Custom Shopify Liquid sections',
  'Responsive storefront development',
  'Client requirement implementation',
  'Shopify theme customization',
  'Custom UI components',
  'JavaScript interactions',
  'Scroll-based animations',
  'Scroll-scrubbed animations',
  'Pre-order experiences',
  'Pre-launch countdown',
  'Store/domain setup support',
]

export const WhatIWorkedOn: React.FC = () => {
  return (
    <section id="what-i-worked-on" className="py-20 sm:py-28 border-b border-zinc-800/80 bg-zinc-950/60 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-purple-400">
              11
            </span>
            <span className="text-xs uppercase tracking-wider font-mono px-2.5 py-1 rounded bg-zinc-900/80 border border-zinc-800 text-zinc-400">
              Scope of Work
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            What I Worked On
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Direct responsibilities and engineering tasks completed on the production client Shopify storefront.
          </p>
        </div>

        {/* Clean cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {RESPONSIBILITIES.map((item, index) => (
            <div
              key={item}
              className="p-4 sm:p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/70 hover:border-zinc-700/80 hover:bg-zinc-900/70 transition-all duration-200 flex items-start gap-3.5 group"
            >
              <div className="w-6 h-6 rounded-lg bg-purple-950/40 border border-purple-800/40 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-purple-500/50 transition-colors">
                <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
              </div>
              <div>
                <span className="font-mono text-[11px] text-zinc-600 block mb-0.5">
                  Item #{String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
