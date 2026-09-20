import React from 'react'
import { ShoppingBag, Monitor, GitBranch } from 'lucide-react'

const SKILL_CATEGORIES = [
  {
    category: 'Shopify',
    icon: ShoppingBag,
    iconColor: 'text-purple-400',
    borderColor: 'border-purple-500/20',
    skills: [
      'Shopify',
      'Shopify Liquid',
      'Theme customization',
      'Custom sections'
    ]
  },
  {
    category: 'Frontend',
    icon: Monitor,
    iconColor: 'text-rose-400',
    borderColor: 'border-rose-500/20',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Responsive design',
      'UI interactions',
      'Scroll animations'
    ]
  },
  {
    category: 'Development',
    icon: GitBranch,
    iconColor: 'text-zinc-400',
    borderColor: 'border-zinc-700/40',
    skills: [
      'Git',
      'GitHub'
    ]
  }
]

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-zinc-800/80 scroll-mt-16 bg-zinc-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-purple-400">
              12
            </span>
            <span className="text-xs uppercase tracking-wider font-mono px-2.5 py-1 rounded bg-zinc-900/80 border border-zinc-800 text-zinc-400">
              Technical Stack
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Skills
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Focused technical skills applied directly in Shopify storefront development and frontend styling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.category}
                className="p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${cat.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {cat.category}
                    </h3>
                  </div>

                  <ul className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2.5 text-sm text-zinc-300 font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500/80" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800/60 font-mono text-[11px] text-zinc-500">
                  {cat.skills.length} core competencies
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
