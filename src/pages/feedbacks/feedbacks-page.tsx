import React from 'react';
import Section from "@/components/section/section"
import SectionTitle from "@/components/section/section-title"

const FeedbacksPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <>
      <Section
        sectionName={"feedbacks"}
        className="bg-feedback-page-sm bg-no-repeat bg-center !bg-150vw"
        ref={ref}
      >
        <SectionTitle title="feedbacks" className="border-lpred"/>
      </Section>
    </>
  )
})

export default FeedbacksPage
