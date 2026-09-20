import React, { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { GithubIcon } from './icons/GithubIcon'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Overview', href: '#client-project' },
    { label: 'Custom Sections', href: '#custom-sections' },
    { label: 'Animations', href: '#scroll-animations' },
    { label: 'What I Worked On', href: '#what-i-worked-on' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070709]/85 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono font-bold text-xs text-purple-400 group-hover:border-purple-500/50 transition-colors">
            KJ
          </div>
          <div>
            <span className="text-sm font-bold text-white tracking-tight block">
              Kartikey Joshi
            </span>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
              Shopify Liquid Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/Kartikey-xq"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-lg bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-colors shadow-sm"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 px-4 py-6 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-white py-2 border-b border-zinc-900"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://github.com/Kartikey-xq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs font-semibold"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="tel:9258580525"
                className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-lg bg-purple-600 text-white text-xs font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
