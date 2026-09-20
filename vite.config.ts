import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function portfolioAssetPlugin(): Plugin {
  const imagesDir = path.resolve(__dirname, 'public/portfolio-assets/images')
  const videosDir = path.resolve(__dirname, 'public/portfolio-assets/videos')
  const manifestPath = path.resolve(__dirname, 'public/portfolio-assets/manifest.json')

  const scanAssets = () => {
    let images: string[] = []
    let videos: string[] = []

    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true })
    }
    if (!fs.existsSync(videosDir)) {
      fs.mkdirSync(videosDir, { recursive: true })
    }

    images = fs.readdirSync(imagesDir).filter(f => /\.(png|jpe?g|webp|gif|svg)$/i.test(f)).sort()
    videos = fs.readdirSync(videosDir).filter(f => /\.(mp4|webm|mov)$/i.test(f)).sort()

    const manifest = {
      images,
      videos,
      updatedAt: Date.now()
    }

    try {
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8')
    } catch (e) {
      console.error('Error writing manifest.json:', e)
    }

    return manifest
  }

  return {
    name: 'portfolio-asset-plugin',
    buildStart() {
      scanAssets()
    },
    configureServer(server) {
      scanAssets()

      // Middleware to return real-time manifest on demand
      server.middlewares.use((req, res, next) => {
        if (req.url && (req.url.startsWith('/portfolio-assets/manifest.json') || req.url.startsWith('/api/portfolio-assets'))) {
          const fresh = scanAssets()
          res.setHeader('Content-Type', 'application/json')
          res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate')
          res.end(JSON.stringify(fresh))
          return
        }
        next()
      })

      // Watch portfolio-assets directory for new/removed files
      server.watcher.add(path.resolve(__dirname, 'public/portfolio-assets'))
      server.watcher.on('all', (_event, filePath) => {
        if (filePath.includes('portfolio-assets') && !filePath.endsWith('manifest.json') && !filePath.endsWith('.md')) {
          const fresh = scanAssets()
          server.ws.send({
            type: 'custom',
            event: 'portfolio-assets-updated',
            data: fresh
          })
        }
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    portfolioAssetPlugin()
  ],
})
