import React, { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { AssetPlaceholder } from './AssetPlaceholder'

interface VideoShowcaseProps {
  videoSrc: string | null
  sectionTitle: string
  expectedFilename: string
  recommendation?: string
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({
  videoSrc,
  sectionTitle,
  expectedFilename,
  recommendation,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [showControlsHint, setShowControlsHint] = useState(false)

  if (!videoSrc) {
    return (
      <AssetPlaceholder
        type="video"
        sectionTitle={sectionTitle}
        expectedFilename={expectedFilename}
        recommendation={recommendation}
      />
    )
  }

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <div className="w-full relative group">
      {/* Subtle outer accent glow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600/10 via-rose-600/10 to-transparent blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Frame Container */}
      <div
        className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl transition-all duration-300 group-hover:border-zinc-700"
        onMouseEnter={() => setShowControlsHint(true)}
        onMouseLeave={() => setShowControlsHint(false)}
      >
        {/* Browser / Player Top Bar */}
        <div className="px-4 py-2.5 bg-zinc-900/80 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 inline-block" />
            <span className="ml-2 font-mono text-[11px] text-zinc-400 truncate max-w-[200px] sm:max-w-md">
              {videoSrc.split('/').pop()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-purple-950/40 text-purple-300 border border-purple-800/40">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse inline-block" />
              Live Demo
            </span>
          </div>
        </div>

        {/* Video Player */}
        <div
          onClick={togglePlay}
          className="relative w-full aspect-video sm:aspect-[16/10] bg-black/90 cursor-pointer overflow-hidden flex items-center justify-center"
        >
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-contain"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Minimal non-intrusive hover controls */}
          <div
            className={`absolute inset-0 bg-black/30 backdrop-blur-[1px] transition-opacity duration-200 flex items-center justify-center ${
              !isPlaying || showControlsHint ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                togglePlay()
              }}
              className="w-14 h-14 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
            </button>
          </div>

          {/* Corner audio toggle */}
          <button
            onClick={toggleMute}
            className="absolute bottom-3 right-3 p-2 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/60 text-zinc-300 transition-colors z-20"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  )
}
