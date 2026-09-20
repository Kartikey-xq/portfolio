import React from 'react'
import { Phone, FileText } from 'lucide-react'
import { GithubIcon } from './icons/GithubIcon'

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-zinc-900 bg-black text-zinc-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-zinc-300 font-semibold block text-sm">
              Kartikey Joshi
            </span>
            <span className="text-zinc-500 font-mono text-xs">
              Shopify Liquid Developer · Fresher Portfolio
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://github.com/Kartikey-xq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href="tel:9258580525"
              className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>9258580525</span>
            </a>

            <a
              href="/portfolio-assets/ASSET-GUIDE.md"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors"
              title="Open Asset Upload Guide"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Asset Guide</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-600 font-mono text-[11px]">
          <div>
            Real Client Project · Shopify · Liquid · Production Store
          </div>
          <div>
            &copy; {new Date().getFullYear()} Kartikey Joshi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
