

import { CardsApproach } from '@/components/CardsApproach'
import { MacbookScrollDemo } from '@/components/Mac'
import SectionHeader from '@/components/SectionHeader'
import React from 'react'

const MyApproach = () => {
  return (
    <section className='pb-16 lg:py-24'>
      <SectionHeader eyebrow='How i take a challenge' title='My Approach'/>
      <CardsApproach />
      <MacbookScrollDemo />
    </section>
  )
}

export default MyApproach