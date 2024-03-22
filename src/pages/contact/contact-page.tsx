import Section from "@/components/section/section"
import SectionTitle from "@/components/section/section-title"

function ContactPage() {
  return (
    <>
      <Section
        sectionName="contact"
        className="bg-contact-page bg-no-repeat !bg-contact"
      >
        <SectionTitle title="contact" className="border-dashed border-lpgrey" />
      </Section>
    </>
  )
}

export default ContactPage
