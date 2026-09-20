import React from 'react'
import { CheckCircle2, Layers, ShoppingBag, Code2, Globe, ExternalLink } from 'lucide-react'

interface ProjectOverviewProps {
  liveStoreUrl?: string
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ liveStoreUrl }) => {
  return (
    <section id="client-project" className="py-20 sm:py-28 border-b border-zinc-800/80 scroll-mt-16 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Prominent Real-Client Pill */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Case Study
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800">
            Real Client Project · Shopify · Liquid · Production Store
          </span>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
              Client Project
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Client Shopify Store — Production E-commerce Website
            </p>
          </div>

          {/* Conditional Live Store Button (only if provided in assets/config) */}
          {liveStoreUrl && (
            <div className="shrink-0">
              <a
                href={liveStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-colors shadow-lg shadow-purple-900/20"
              >
                <Globe className="w-4 h-4" />
                <span>View Live Store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Case Study Meta Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
            <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono uppercase tracking-wider mb-2">
              <ShoppingBag className="w-3.5 h-3.5 text-purple-400" />
              Role
            </div>
            <div className="text-base font-semibold text-zinc-100">
              Shopify Developer
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
            <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono uppercase tracking-wider mb-2">
              <Globe className="w-3.5 h-3.5 text-rose-400" />
              Project Type
            </div>
            <div className="text-base font-semibold text-zinc-100">
              Real Client E-commerce Store
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
            <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              Focus
            </div>
            <div className="text-base font-semibold text-zinc-100">
              Custom Shopify Storefront Development
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
            <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono uppercase tracking-wider mb-2">
              <Code2 className="w-3.5 h-3.5 text-rose-400" />
              Technologies
            </div>
            <div className="text-sm font-semibold text-zinc-100 font-mono">
              Shopify · Liquid · HTML · CSS · JavaScript
            </div>
          </div>
        </div>

        {/* Narrative Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-900/40 border border-zinc-800">
          <div className="max-w-3xl">
            <h3 className="text-lg font-semibold text-white mb-3">
              Hands-On Production Storefront Implementation
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
              This was a real client project where I worked on the Shopify storefront, custom Liquid sections, frontend behavior, responsive UI, animations, pre-launch/pre-order experiences, and related store setup. The development involved translating direct client requirements and visual references into high-performance, maintainable theme sections directly within Shopify.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-zinc-800/80">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Custom Liquid theme architectures tailored to client design specs</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Engineered interactive sizing and scroll animations directly in theme</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Responsive mobile-first storefront testing and iteration</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Production pre-launch countdown & pre-order campaign setup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
