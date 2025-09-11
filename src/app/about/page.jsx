import AboutHero from '@/component/About/Aboutepage'
import AboutSection from '@/component/About/AboutSection'
import NextSection from '@/component/About/NextSection'
import React from 'react'

const About = () => {
  return (
    <div>
        <AboutHero/>
        <NextSection/>
        <AboutSection/>
    </div>
  )
}
export default About
