import React from 'react'

interface ProjectSectionProps {
  id: string
  stepNumber: string
  title: string
  badge?: string
  description: React.ReactNode
  children: React.ReactNode
  className?: string
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({
  id,
  stepNumber,
  title,
  badge,
  description,
  children,
  className = '',
}) => {
  return (
    <section id={id} className={`py-16 sm:py-24 scroll-mt-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-purple-400">
              {stepNumber}
            </span>
            {badge && (
              <span className="text-xs uppercase tracking-wider font-mono px-2.5 py-1 rounded bg-zinc-900/80 border border-zinc-800 text-zinc-400">
                {badge}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
            {title}
          </h2>

          <div className="text-zinc-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            {description}
          </div>
        </div>

        {/* Section Asset / Content Body */}
        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  )
}
