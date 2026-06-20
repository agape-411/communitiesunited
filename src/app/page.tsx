'use client'

import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'


import AboutSection from '../../components/sections/AboutSection'
import ContactCouncil from '../../components/sections/ContactCouncil'
import DemandsSection from '../../components/sections/DemandsSection'
import FrameworkSection from '../../components/sections/FrameworkSection'
import Hero from '../../components/sections/Hero'
import JoinCoalition from '../../components/sections/JoinCoalition'
import WhySection from '../../components/sections/WhySection'
import OurVoice from '../../components/sections/OurVoice'
import CorridorMap from '../../components/sections/CorridorMap'

export default function Page() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CorridorMap />
        <WhySection />
        <DemandsSection />
        <FrameworkSection />
        <OurVoice />
        <JoinCoalition />
        <ContactCouncil />
        <AboutSection />
      </main>

      <Footer />
    </>
  )
}
