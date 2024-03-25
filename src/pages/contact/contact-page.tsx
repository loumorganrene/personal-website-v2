import React from 'react'
import Section from "@/components/section/section"
import SectionTitle from "@/components/section/section-title"

const ContactPage= React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <>
      <Section
        sectionName="contact"
        className="bg-contact-page bg-no-repeat !bg-contact"
        ref={ref}
      >
        <SectionTitle title="contact" className="border-dashed border-lpgrey" />
      </Section>
    </>
  )
})

export default ContactPage
