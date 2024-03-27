import React from 'react'
import SectionTitle from "@/components/section/section-title"
import Section from "@/components/section/section"
import EducationPopover from '@/components/education-popover/education-popover'
import LineTo from 'react-lineto'
import { useWindowDimensions } from '@/hooks/useWindowDimension'

const EducationPage = React.forwardRef<HTMLDivElement>((_, forwardedRef) => {
  useWindowDimensions()
  return (
    <>
      <Section sectionName="education" className="flex flex-col justify-between" ref={forwardedRef}>
        <SectionTitle title="education" className="border-lpred" />
        <div className="flex flex-col justify-around h-screen px-4">
          <EducationPopover title="Front End Developer" variant="red-bubble" size="circle" className="A" side="right">
            <p className="text-wrap w-60">Ceci contiendra une carte | This will contain a card</p>
          </EducationPopover>
          <LineTo key={1} from="A" to="B" borderColor='black' borderWidth={4} zIndex={-1} />
          <EducationPopover title="Web Developer" variant="green-bubble" size="circle" className="self-end B" side="left">
            <p className='text-wrap w-60'>Ceci contiendra une carte | This will contain a card</p>
          </EducationPopover>
          <LineTo key={2} from="B" to="C" borderColor='black' borderWidth={4} zIndex={-1} />
          <EducationPopover title="Illustrator" variant="grey-bubble" size="circle" className="C" side="right">
            <p className='text-wrap w-60'>Ceci contiendra une carte | This will contain a card</p>
          </EducationPopover>
        </div>
      </Section>
    </>
  )
})

export default EducationPage
