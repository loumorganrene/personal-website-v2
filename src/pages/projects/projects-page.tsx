import React from 'react'
import Section from "@/components/section/section"
import SectionTitle from "@/components/section/section-title"

const ProjectsPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <>
      <Section sectionName="projects" className="bg-project-page bg-cover bg-top" ref={ref}>
      <SectionTitle title="projects" className="border-lpgrey" />
      </Section>
    </>
  )
})

export default ProjectsPage
