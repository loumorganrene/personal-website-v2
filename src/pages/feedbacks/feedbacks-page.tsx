import Section from "@/components/section/section"
import SectionTitle from "@/components/section/section-title"

function FeedbacksPage() {
  return (
    <>
      <Section
        sectionName={"feedbacks"}
        className="bg-feedback-page-sm bg-no-repeat bg-center !bg-150vh"
      >
        <SectionTitle title="feedbacks" className="border-lpred"/>
      </Section>
    </>
  )
}

export default FeedbacksPage
