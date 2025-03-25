import React from 'react'
import { Banner } from '../components/Banner/Banner'
import { Skills } from '../components/Skills/Skills'
import { ContactSection } from '../components/ContactSection/ContactSection'

export const Home = () => {
  return (
    <div>
        <Banner/>
        <Skills/>
        <ContactSection/>
    </div>
  )
}
