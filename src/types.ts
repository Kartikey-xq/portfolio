export interface AssetManifest {
  images: string[]
  videos: string[]
  liveStoreUrl?: string
  updatedAt?: number
}

export interface SectionAssetConfig {
  sectionId: string
  prefix: string
  type: 'image' | 'video'
  defaultFilename: string
  sampleFilenames: string[]
  label: string
  recommendation: string
}

export const SECTION_CONFIGS: Record<string, SectionAssetConfig> = {
  customSections: {
    sectionId: 'custom-sections',
    prefix: '01-custom-sections-built',
    type: 'image',
    defaultFilename: '01-custom-sections-built-01.png',
    sampleFilenames: [
      '01-custom-sections-built-01.png',
      '01-custom-sections-built-02.png',
      '01-custom-sections-built-03.png'
    ],
    label: 'Custom Sections Built',
    recommendation: 'Full-width screenshots showing custom Shopify Liquid theme sections you developed (e.g. banners, product displays, custom layouts).'
  },
  requirementUnderstanding: {
    sectionId: 'requirement-understanding',
    prefix: '02-requirement-understanding',
    type: 'image',
    defaultFilename: '02-requirement-understanding-01.png',
    sampleFilenames: [
      '02-requirement-understanding-01.png',
      '02-requirement-understanding-02.png'
    ],
    label: 'Requirement Understanding',
    recommendation: 'Screenshots showing client briefs, design wireframes/references, or side-by-side comparison with the completed section.'
  },
  domainSetup: {
    sectionId: 'domain-setup',
    prefix: '03-domain-setup',
    type: 'image',
    defaultFilename: '03-domain-setup-01.png',
    sampleFilenames: [
      '03-domain-setup-01.png',
      '03-domain-setup-02.png'
    ],
    label: 'Domain Setup',
    recommendation: 'Shopify admin screenshot showing domain verification, connected custom domain, and SSL configuration.'
  },
  quickSizeGuide: {
    sectionId: 'quick-size-guide',
    prefix: '04-quick-size-guide',
    type: 'video',
    defaultFilename: '04-quick-size-guide.mp4',
    sampleFilenames: ['04-quick-size-guide.mp4'],
    label: 'Quick Size Guide',
    recommendation: 'Short screen recording (5–15s) demonstrating opening, navigating, and interacting with the quick size guide drawer or modal.'
  },
  scrollAnimations: {
    sectionId: 'scroll-animations',
    prefix: '05-scroll-based-animations',
    type: 'video',
    defaultFilename: '05-scroll-based-animations.mp4',
    sampleFilenames: ['05-scroll-based-animations.mp4'],
    label: 'Scroll-Based Animations',
    recommendation: 'Screen recording demonstrating elements smoothly fading, sliding, or transforming as the user scrolls the Shopify store.'
  },
  scrubAnimation: {
    sectionId: 'scrub-animation',
    prefix: '06-scrub-based-animation',
    type: 'video',
    defaultFilename: '06-scrub-based-animation.mp4',
    sampleFilenames: ['06-scrub-based-animation.mp4'],
    label: 'Scrub-Based Animation',
    recommendation: 'Screen recording demonstrating scroll-scrubbed motion where animation frames follow exact user scroll position.'
  },
  preorderSections: {
    sectionId: 'preorder-sections',
    prefix: '07-preorder-sections',
    type: 'image',
    defaultFilename: '07-preorder-sections-01.png',
    sampleFilenames: [
      '07-preorder-sections-01.png',
      '07-preorder-sections-02.png'
    ],
    label: 'Pre-Order Sections',
    recommendation: 'High-res screenshots of pre-order badges, custom callout cards, delivery notices, and custom purchase buttons.'
  },
  countdownPrelaunch: {
    sectionId: 'countdown-prelaunch',
    prefix: '08-countdown-prelaunch',
    type: 'image',
    defaultFilename: '08-countdown-prelaunch-01.png',
    sampleFilenames: [
      '08-countdown-prelaunch-01.png',
      '08-countdown-prelaunch-02.png'
    ],
    label: 'Pre-Launch Countdown',
    recommendation: 'Screenshots of the pre-launch countdown timer bar or campaign banner creating urgency for the upcoming drop.'
  }
}
