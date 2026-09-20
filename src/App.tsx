import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProjectOverview } from './components/ProjectOverview'
import { ProjectSection } from './components/ProjectSection'
import { AssetGallery } from './components/AssetGallery'
import { VideoShowcase } from './components/VideoShowcase'
import { WhatIWorkedOn } from './components/WhatIWorkedOn'
import { Skills } from './components/Skills'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { usePortfolioAssets } from './lib/assets'
import { SECTION_CONFIGS } from './types'

export const App: React.FC = () => {
  const { getImages, getVideo, liveStoreUrl } = usePortfolioAssets()

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 flex flex-col selection:bg-purple-500/20 selection:text-purple-200">
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Client Project Overview */}
        <ProjectOverview liveStoreUrl={liveStoreUrl} />

        {/* 3. Custom Sections Built */}
        <ProjectSection
          id="custom-sections"
          stepNumber="03"
          badge="Theme Sections"
          title="Custom Sections Built"
          description={
            <p>
              Built custom Shopify theme sections using Liquid, HTML, CSS, and JavaScript to achieve tailored designs and layout behaviors beyond standard theme sections. Each section is modular, fully responsive, and editable through the Shopify theme customizer.
            </p>
          }
        >
          <AssetGallery
            images={getImages(SECTION_CONFIGS.customSections.prefix)}
            sectionTitle="Custom Sections Built"
            expectedFilename={SECTION_CONFIGS.customSections.defaultFilename}
            sampleFilenames={SECTION_CONFIGS.customSections.sampleFilenames}
            recommendation={SECTION_CONFIGS.customSections.recommendation}
            altTextPrefix="Custom Shopify Liquid Section Screenshot"
          />
        </ProjectSection>

        {/* 4. Requirement Understanding */}
        <ProjectSection
          id="requirement-understanding"
          stepNumber="04"
          badge="Engineering Process"
          title="Requirement Understanding"
          description={
            <div className="space-y-3">
              <p>
                The development process centered on translating direct client requirements and visual references into functional, performant Shopify storefront components.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-400 font-mono pt-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Understanding client requirements & scope
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Converting designs/specs into Liquid sections
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Identifying responsive layout behavior
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Implementing requested UI interactions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Iterating based on client feedback
                </li>
              </ul>
            </div>
          }
        >
          <AssetGallery
            images={getImages(SECTION_CONFIGS.requirementUnderstanding.prefix)}
            sectionTitle="Requirement Understanding"
            expectedFilename={SECTION_CONFIGS.requirementUnderstanding.defaultFilename}
            sampleFilenames={SECTION_CONFIGS.requirementUnderstanding.sampleFilenames}
            recommendation={SECTION_CONFIGS.requirementUnderstanding.recommendation}
            altTextPrefix="Requirement & Design Reference Screenshot"
          />
        </ProjectSection>

        {/* 5. Domain Setup */}
        <ProjectSection
          id="domain-setup"
          stepNumber="05"
          badge="Store Launch"
          title="Domain Setup"
          description={
            <p>
              Assisted in the practical side of getting the Shopify storefront ready for the client's launch, including primary domain connection, DNS verification, and store readiness settings directly within the Shopify admin.
            </p>
          }
        >
          <AssetGallery
            images={getImages(SECTION_CONFIGS.domainSetup.prefix)}
            sectionTitle="Domain Setup"
            expectedFilename={SECTION_CONFIGS.domainSetup.defaultFilename}
            sampleFilenames={SECTION_CONFIGS.domainSetup.sampleFilenames}
            recommendation={SECTION_CONFIGS.domainSetup.recommendation}
            altTextPrefix="Shopify Domain Setup Screenshot"
          />
        </ProjectSection>

        {/* 6. Quick Size Guide */}
        <ProjectSection
          id="quick-size-guide"
          stepNumber="06"
          badge="Interactive Feature"
          title="Quick Size Guide"
          description={
            <p>
              Implemented a quick size-guide experience to help customers understand sizing directly within the storefront, reducing friction before checkout.
            </p>
          }
        >
          <VideoShowcase
            videoSrc={getVideo(SECTION_CONFIGS.quickSizeGuide.prefix)}
            sectionTitle="Quick Size Guide"
            expectedFilename={SECTION_CONFIGS.quickSizeGuide.defaultFilename}
            recommendation={SECTION_CONFIGS.quickSizeGuide.recommendation}
          />
        </ProjectSection>

        {/* 7. Scroll-Based Animations */}
        <ProjectSection
          id="scroll-animations"
          stepNumber="07"
          badge="Motion & Polish"
          title="Scroll-Based Animations"
          description={
            <p>
              Implemented lightweight storefront interactions where visual elements gracefully reveal and respond to page scrolling, adding a modern polish to the brand experience.
            </p>
          }
        >
          <VideoShowcase
            videoSrc={getVideo(SECTION_CONFIGS.scrollAnimations.prefix)}
            sectionTitle="Scroll-Based Animations"
            expectedFilename={SECTION_CONFIGS.scrollAnimations.defaultFilename}
            recommendation={SECTION_CONFIGS.scrollAnimations.recommendation}
          />
        </ProjectSection>

        {/* 8. Scrub-Based Animation */}
        <ProjectSection
          id="scrub-animation"
          stepNumber="08"
          badge="Interactive UI"
          title="Scrub-Based Animation"
          description={
            <p>
              A scroll-scrubbed visual interaction where animation progress is tied directly to the user's scrolling behavior, delivering an engaging, dynamic product showcase.
            </p>
          }
        >
          <VideoShowcase
            videoSrc={getVideo(SECTION_CONFIGS.scrubAnimation.prefix)}
            sectionTitle="Scrub-Based Animation"
            expectedFilename={SECTION_CONFIGS.scrubAnimation.defaultFilename}
            recommendation={SECTION_CONFIGS.scrubAnimation.recommendation}
          />
        </ProjectSection>

        {/* 9. Pre-Order Sections */}
        <ProjectSection
          id="preorder-sections"
          stepNumber="09"
          badge="Campaign Feature"
          title="Pre-Order Sections"
          description={
            <p>
              Implemented custom storefront sections supporting the client's pre-order and pre-launch campaign, featuring custom badges, dedicated pre-order callouts, and clear delivery timeline cues.
            </p>
          }
        >
          <AssetGallery
            images={getImages(SECTION_CONFIGS.preorderSections.prefix)}
            sectionTitle="Pre-Order Sections"
            expectedFilename={SECTION_CONFIGS.preorderSections.defaultFilename}
            sampleFilenames={SECTION_CONFIGS.preorderSections.sampleFilenames}
            recommendation={SECTION_CONFIGS.preorderSections.recommendation}
            altTextPrefix="Pre-Order Storefront Section Screenshot"
          />
        </ProjectSection>

        {/* 10. Pre-Launch Countdown */}
        <ProjectSection
          id="countdown-prelaunch"
          stepNumber="10"
          badge="Launch Urgency"
          title="Pre-Launch Countdown"
          description={
            <p>
              Implemented a custom countdown experience for the store's pre-launch campaign to create urgency and communicate the launch timeline to visitors.
            </p>
          }
        >
          <AssetGallery
            images={getImages(SECTION_CONFIGS.countdownPrelaunch.prefix)}
            sectionTitle="Pre-Launch Countdown"
            expectedFilename={SECTION_CONFIGS.countdownPrelaunch.defaultFilename}
            sampleFilenames={SECTION_CONFIGS.countdownPrelaunch.sampleFilenames}
            recommendation={SECTION_CONFIGS.countdownPrelaunch.recommendation}
            altTextPrefix="Pre-Launch Countdown Timer Screenshot"
          />
        </ProjectSection>

        {/* 11. What I Worked On */}
        <WhatIWorkedOn />

        {/* 12. Skills */}
        <Skills />

        {/* 13. About Me */}
        <About />

        {/* 14. Contact */}
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
