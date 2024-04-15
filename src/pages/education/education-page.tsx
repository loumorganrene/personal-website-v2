import React from 'react'
import SectionTitle from "@/components/section/section-title"
import Section from "@/components/section/section"
import EducationCollapsible from '@/components/education/education-collapsible'
import EducationCard from '@/components/education/education-card'
import educationList from '@/data/education-list'

const EducationPage = React.forwardRef<HTMLDivElement>((_, forwardedRef) => {

  return (
    <>
      <Section sectionName="education" className="flex flex-col justify-between" ref={forwardedRef}>
        <SectionTitle title="education" className="border-lpred" />
        <div className="flex flex-col justify-around h-screen px-4">
          <EducationCollapsible id="div1" title="Front End Developer" variant="red-bubble" size="circle" contentStyle='left-10'>
            <EducationCard contents={educationList[0]} />
          </EducationCollapsible>

          <EducationCollapsible id="div2" title="Web Developer" variant="green-bubble" size="circle" contentStyle='right-10 w-[80vw]' collapsibleStyle="self-end" className="origin-top-right">
            <EducationCard contents={educationList[1]} descClassName='pl-0 pr-10' />
          </EducationCollapsible>

          <EducationCollapsible id="div3" title="Arts & Design" variant="grey-bubble" size="circle" contentStyle='left-10'>
            <EducationCard contents={educationList[2]} />
          </EducationCollapsible>
        </div>
      </Section>
    </>
  )
})

export default EducationPage
