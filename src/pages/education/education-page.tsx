import React from 'react'
import SectionTitle from "@/components/section/section-title"
import Section from "@/components/section/section"
import EducationPopover from '@/components/education/education-popover'
import LineTo from 'react-lineto'
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
          <EducationPopover title="Front End Developer" variant="red-bubble" size="circle" className="A" side="right">
            <EducationCard contents={educationList[0]} />
          </EducationPopover>

          <LineTo key={1} from="A" to="B" borderColor='black' borderWidth={4} zIndex={-1} />

          <EducationPopover title="Web Developer" variant="green-bubble" size="circle" className="self-end B" side="left">
            <EducationCard contents={educationList[1]} />
          </EducationPopover>

          <LineTo key={2} from="B" to="C" borderColor='black' borderWidth={4} zIndex={-1} />

          <EducationPopover title="Arts & Design" variant="grey-bubble" size="circle" className="C" side="right">
            <EducationCard contents={educationList[2]} />
          </EducationPopover>
        </div>
      </Section>
    </>
  )
})

export default EducationPage
