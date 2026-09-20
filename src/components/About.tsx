import React from 'react'
import { Target, ShieldCheck } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-zinc-800/80 scroll-mt-16 bg-zinc-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-purple-400">
              13
            </span>
            <span className="text-xs uppercase tracking-wider font-mono px-2.5 py-1 rounded bg-zinc-900/80 border border-zinc-800 text-zinc-400">
              Background
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            About Me
          </h2>
        </div>

        {/* Editorial Bio Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              I’m <strong className="text-white font-semibold">Kartikey Joshi</strong>, a fresher focused on Shopify and frontend development. My goal is to build production-ready storefront experiences rather than only working on tutorial or academic projects.
            </p>

            <p>
              My first major portfolio project gave me hands-on experience working on a real client Shopify store, implementing custom Liquid sections, responsive UI, interactions, animations and campaign-focused storefront features.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-zinc-800/80">
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                <Target className="w-4 h-4 text-purple-400" />
              </div>
              <span>Production-first development mindset</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-rose-400" />
              </div>
              <span>Honest, real-world client experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
