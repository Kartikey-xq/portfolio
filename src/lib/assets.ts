import { useEffect, useState } from 'react'
import type { AssetManifest } from '../types'

const MANIFEST_URL = '/portfolio-assets/manifest.json'

// Probe common filename patterns if manifest is empty or fails
async function probeImage(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = url
  })
}

async function probeVideo(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, { method: 'HEAD' })
    return res.ok && !res.headers.get('content-type')?.includes('text/html')
  } catch {
    return false
  }
}

export function usePortfolioAssets() {
  const [manifest, setManifest] = useState<AssetManifest>({
    images: [],
    videos: [],
    updatedAt: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  const fetchManifest = async () => {
    try {
      const res = await fetch(`${MANIFEST_URL}?t=${Date.now()}`, { cache: 'no-store' })
      if (res.ok) {
        const data: AssetManifest = await res.json()
        
        // If manifest has items, use them
        if (data.images?.length > 0 || data.videos?.length > 0) {
          setManifest(data)
          setIsLoading(false)
          return
        }
      }
    } catch {
      // Ignore network failure and try probe
    }

    // Fallback: probe standard filenames dynamically if manifest was empty
    const foundImages: string[] = []
    const prefixes = [
      '01-custom-sections-built',
      '02-requirement-understanding',
      '03-domain-setup',
      '07-preorder-sections',
      '08-countdown-prelaunch'
    ]

    const extensions = ['png', 'jpg', 'jpeg', 'webp']

    for (const prefix of prefixes) {
      for (let i = 1; i <= 5; i++) {
        const num = String(i).padStart(2, '0')
        for (const ext of extensions) {
          const filename = `${prefix}-${num}.${ext}`
          const testUrl = `/portfolio-assets/images/${filename}`
          const exists = await probeImage(testUrl)
          if (exists) {
            foundImages.push(filename)
            break
          }
        }
      }
    }

    const foundVideos: string[] = []
    const videoConfigs = [
      { prefix: '04-quick-size-guide', exts: ['mp4', 'webm'] },
      { prefix: '05-scroll-based-animations', exts: ['mp4', 'webm'] },
      { prefix: '06-scrub-based-animation', exts: ['mp4', 'webm'] }
    ]

    for (const vc of videoConfigs) {
      for (const ext of vc.exts) {
        const filename = `${vc.prefix}.${ext}`
        const testUrl = `/portfolio-assets/videos/${filename}`
        const exists = await probeVideo(testUrl)
        if (exists) {
          foundVideos.push(filename)
          break
        }
      }
    }

    setManifest({
      images: foundImages,
      videos: foundVideos,
      updatedAt: Date.now()
    })
    setIsLoading(false)
  }

  useEffect(() => {
    let active = true

    const run = async () => {
      try {
        const res = await fetch(`${MANIFEST_URL}?t=${Date.now()}`, { cache: 'no-store' })
        if (res.ok) {
          const data: AssetManifest = await res.json()
          if (active && (data.images?.length > 0 || data.videos?.length > 0)) {
            setManifest(data)
            setIsLoading(false)
            return
          }
        }
      } catch {
        // Continue to fallback probe
      }

      const foundImages: string[] = []
      const prefixes = [
        '01-custom-sections-built',
        '02-requirement-understanding',
        '03-domain-setup',
        '07-preorder-sections',
        '08-countdown-prelaunch'
      ]
      const extensions = ['png', 'jpg', 'jpeg', 'webp']

      for (const prefix of prefixes) {
        for (let i = 1; i <= 5; i++) {
          const num = String(i).padStart(2, '0')
          for (const ext of extensions) {
            const filename = `${prefix}-${num}.${ext}`
            const testUrl = `/portfolio-assets/images/${filename}`
            const exists = await probeImage(testUrl)
            if (exists) {
              foundImages.push(filename)
              break
            }
          }
        }
      }

      const foundVideos: string[] = []
      const videoConfigs = [
        { prefix: '04-quick-size-guide', exts: ['mp4', 'webm'] },
        { prefix: '05-scroll-based-animations', exts: ['mp4', 'webm'] },
        { prefix: '06-scrub-based-animation', exts: ['mp4', 'webm'] }
      ]

      for (const vc of videoConfigs) {
        for (const ext of vc.exts) {
          const filename = `${vc.prefix}.${ext}`
          const testUrl = `/portfolio-assets/videos/${filename}`
          const exists = await probeVideo(testUrl)
          if (exists) {
            foundVideos.push(filename)
            break
          }
        }
      }

      if (active) {
        setManifest({
          images: foundImages,
          videos: foundVideos,
          updatedAt: Date.now()
        })
        setIsLoading(false)
      }
    }

    run()

    // Listen for custom Vite HMR events if in development
    if (import.meta.hot) {
      import.meta.hot.on('portfolio-assets-updated', (data: AssetManifest) => {
        if (active) {
          setManifest(data)
        }
      })
    }

    return () => {
      active = false
    }
  }, [])

  return {
    manifest,
    isLoading,
    refreshAssets: fetchManifest,
    getImages: (prefix: string) => {
      const regex = new RegExp(`^${prefix}`, 'i')
      return manifest.images
        .filter((file) => regex.test(file))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
        .map((file) => `/portfolio-assets/images/${file}`)
    },
    getVideo: (prefix: string) => {
      const regex = new RegExp(`^${prefix}`, 'i')
      const match = manifest.videos.find((file) => regex.test(file))
      return match ? `/portfolio-assets/videos/${match}` : null
    },
    liveStoreUrl: manifest.liveStoreUrl
  }
}
