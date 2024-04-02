import React from 'react'
import SectionTitle from "@/components/section/section-title"
import Section from "@/components/section/section"
import EducationPopover from '@/components/education/education-popover'
import { useWindowDimensions } from '@/hooks/useWindowDimension'
import EducationCard from '@/components/education/education-card'
import educationList from '@/data/education-list'

const EducationPage = React.forwardRef<HTMLDivElement>((_, forwardedRef) => {
  useWindowDimensions()
  return (
    <>
      <Section sectionName="education" className="flex flex-col justify-between" ref={forwardedRef}>
        <SectionTitle title="education" className="border-lpred" />
        <div className="flex flex-col justify-around h-screen px-4">
          <EducationPopover title="Front End Developer" variant="red-bubble" size="circle" side="right">
            <EducationCard contents={educationList[0]} />
          </EducationPopover>

          <EducationPopover title="Web Developer" variant="green-bubble" size="circle" side="left" className="self-end origin-top-right " >
            <EducationCard contents={educationList[1]} descClassName='pl-0 pr-10' />
          </EducationPopover>

          <EducationPopover title="Arts & Design" variant="grey-bubble" size="circle" side="right">
            <EducationCard contents={educationList[2]} />
          </EducationPopover>
        </div>
      </Section>
    </>
  )
})

export default EducationPage
