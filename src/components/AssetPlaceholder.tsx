import React, { useState } from 'react'
import { Image as ImageIcon, Video as VideoIcon, Copy, Check, Info } from 'lucide-react'

interface AssetPlaceholderProps {
  type: 'image' | 'video'
  expectedFilename: string
  sampleFilenames?: string[]
  recommendation?: string
  sectionTitle: string
}

export const AssetPlaceholder: React.FC<AssetPlaceholderProps> = ({
  type,
  expectedFilename,
  sampleFilenames,
  recommendation,
  sectionTitle,
}) => {
  const [copied, setCopied] = useState(false)
  const targetFolder = type === 'image' ? 'public/portfolio-assets/images/' : 'public/portfolio-assets/videos/'

  const handleCopy = () => {
    navigator.clipboard.writeText(expectedFilename)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full relative group overflow-hidden rounded-2xl border border-dashed border-zinc-800 bg-gradient-to-b from-zinc-950/60 to-zinc-900/30 p-8 sm:p-12 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-950/80">
      {/* Subtle background ambient radial light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.04),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto">
        <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 text-zinc-400 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-all duration-300 shadow-inner">
          {type === 'image' ? <ImageIcon className="w-6 h-6" /> : <VideoIcon className="w-6 h-6" />}
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900/90 text-zinc-400 border border-zinc-800 mb-3">
          <Info className="w-3.5 h-3.5 text-purple-400" />
          <span>Ready for Asset Upload</span>
        </div>

        <h4 className="text-base font-semibold text-zinc-200 mb-1.5">
          {sectionTitle} Asset Slot
        </h4>

        <p className="text-xs sm:text-sm text-zinc-400 mb-5 leading-relaxed">
          {recommendation || `Drop your ${type === 'image' ? 'screenshot' : 'video recording'} into `}
          <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800 font-mono text-xs">
            {targetFolder}
          </code>
        </p>

        {/* Expected filename badge with 1-click copy */}
        <div className="w-full max-w-md bg-zinc-900/90 border border-zinc-800 rounded-xl p-3 flex items-center justify-between gap-3 text-left">
          <div className="truncate">
            <span className="block text-[10px] uppercase font-mono tracking-wider text-zinc-500">
              Expected Filename
            </span>
            <span className="font-mono text-xs text-purple-300 font-semibold truncate block">
              {expectedFilename}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg transition-colors shrink-0"
            title="Copy exact filename"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-400" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {sampleFilenames && sampleFilenames.length > 1 && (
          <div className="mt-4 pt-4 border-t border-zinc-900 w-full text-left">
            <span className="text-[11px] text-zinc-500 font-mono block mb-1.5">
              Supports multiple files (auto-detected):
            </span>
            <div className="flex flex-wrap gap-1.5">
              {sampleFilenames.map((name) => (
                <span
                  key={name}
                  className="inline-block px-2 py-0.5 bg-zinc-900 text-zinc-400 border border-zinc-800/80 rounded font-mono text-[11px]"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
