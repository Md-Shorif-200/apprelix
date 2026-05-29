import React from 'react'
import CompanyOverviewSection from './CompanyOverviewSection'
import MissionVisionSection from './MissionVisionSection'
import GlobalSupplyChain from './GlobalSupplyChain'
import SecurityTrustSection from './SecurityTrustSection'

const AboutPage = () => {
  return (
    <div>
        <CompanyOverviewSection/>
        <MissionVisionSection/>
        <GlobalSupplyChain/>
        <SecurityTrustSection/>
    </div>
  )
}

export default AboutPage