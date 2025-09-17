import FamilyMatrix from '@/component/partner/FamilyMatrix'
import FeaturesSection from '@/component/partner/FeaturesSection'
import Hero from '@/component/partner/Hero'
import HeroCurve from '@/component/partner/HeroCurve'
import StatsSection from '@/component/partner/StasSection'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
        <HeroCurve/>
        <FeaturesSection/>
        <StatsSection/>
        <FamilyMatrix/>

    </div>
  )
}

export default page