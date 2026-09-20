import React, { useState } from 'react'
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { AssetPlaceholder } from './AssetPlaceholder'

interface AssetGalleryProps {
  images: string[]
  sectionTitle: string
  expectedFilename: string
  sampleFilenames?: string[]
  recommendation?: string
  altTextPrefix?: string
}

export const AssetGallery: React.FC<AssetGalleryProps> = ({
  images,
  sectionTitle,
  expectedFilename,
  sampleFilenames,
  recommendation,
  altTextPrefix = 'Client Shopify Store Screenshot',
}) => {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null)

  if (!images || images.length === 0) {
    return (
      <AssetPlaceholder
        type="image"
        sectionTitle={sectionTitle}
        expectedFilename={expectedFilename}
        sampleFilenames={sampleFilenames}
        recommendation={recommendation}
      />
    )
  }

  const openLightbox = (index: number) => setActiveModalIndex(index)
  const closeLightbox = () => setActiveModalIndex(null)
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex - 1 + images.length) % images.length)
    }
  }
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex + 1) % images.length)
    }
  }

  // Grid layout adapts based on image count
  const isSingle = images.length === 1

  return (
    <>
      <div
        className={`grid gap-4 sm:gap-6 ${
          isSingle
            ? 'grid-cols-1'
            : images.length === 2
            ? 'grid-cols-1 md:grid-cols-2'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {images.map((imgSrc, idx) => {
          const filename = imgSrc.split('/').pop() || `Asset ${idx + 1}`
          return (
            <div
              key={imgSrc}
              onClick={() => openLightbox(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/60 shadow-xl transition-all duration-300 hover:border-zinc-700 hover:shadow-purple-500/5 hover:-translate-y-0.5"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-zinc-900/90">
                <img
                  src={imgSrc}
                  alt={`${altTextPrefix} - ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />

                {/* Subtle dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-mono text-xs text-zinc-300 truncate max-w-[80%] bg-zinc-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-zinc-700/50">
                      {filename}
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-zinc-900/90 border border-zinc-700/60 flex items-center justify-center text-zinc-200">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom detail pill */}
              <div className="p-3 bg-zinc-900/40 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
                  Fig. {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-[11px] text-zinc-400 truncate max-w-[200px]">
                  {filename}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Lightbox Modal */}
      {activeModalIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between pb-3 text-zinc-300">
              <span className="font-mono text-xs text-zinc-400">
                {images[activeModalIndex].split('/').pop()} ({activeModalIndex + 1} / {images.length})
              </span>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Preview Container */}
            <div className="relative w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 flex items-center justify-center max-h-[80vh]">
              <img
                src={images[activeModalIndex]}
                alt={`${altTextPrefix} preview`}
                className="max-h-[80vh] w-auto max-w-full object-contain"
              />

              {/* Navigation controls if multiple images */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-900 text-zinc-200 border border-zinc-700/60 transition-all hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-900 text-zinc-200 border border-zinc-700/60 transition-all hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
