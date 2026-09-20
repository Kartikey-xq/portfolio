import React from 'react'
import { ArrowDown, Sparkles, ExternalLink } from 'lucide-react'
import { GithubIcon } from './icons/GithubIcon'

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-36 overflow-hidden border-b border-zinc-800/80">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-600/10 via-rose-500/10 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300 mb-8 sm:mb-10 shadow-sm backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-medium text-zinc-200">
            Available for Shopify Developer Opportunities
          </span>
        </div>

        {/* Hero Name & Title */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
            Kartikey Joshi
          </h1>

          <div className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400 mb-6">
            Shopify Liquid Developer
          </div>

          <div className="inline-block px-3 py-1 rounded-md bg-purple-950/40 border border-purple-800/40 text-purple-300 font-medium text-sm sm:text-base mb-6">
            Fresher with real-world client product experience
          </div>

          <p className="text-base sm:text-xl text-zinc-400 leading-relaxed max-w-3xl mb-10 font-normal">
            Building custom Shopify storefront experiences with Liquid, HTML, CSS and JavaScript — from custom sections and responsive UI to interactive pre-launch and e-commerce experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#client-project"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5 group"
            >
              <span>View Client Project</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href="https://github.com/Kartikey-xq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 font-medium text-sm transition-all group"
            >
              <GithubIcon className="w-4 h-4 text-zinc-300 group-hover:text-white" />
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent hover:bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-zinc-200 font-medium text-sm transition-all"
            >
              Contact Me
            </a>
          </div>

          {/* Technology Badges */}
          <div className="pt-8 border-t border-zinc-900/80 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="text-xs uppercase font-mono tracking-wider text-zinc-500 mr-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Core Tech
            </span>
            {['Shopify', 'Liquid', 'HTML', 'CSS', 'JavaScript'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-300 font-mono text-xs font-medium tracking-wide shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
