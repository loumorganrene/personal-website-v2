import React from 'react'
import Section from "@/components/section/section"
import SectionTitle from "@/components/section/section-title"
import ProjectsCarousel from '@/components/projects/projects-carousel'

const ProjectsPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <>
      <Section sectionName="projects" className="bg-project-page bg-cover bg-top" ref={ref}>
      <SectionTitle title="projects" className="border-lpgrey" />
        <ProjectsCarousel />
      </Section>
    </>
  )
})

export default ProjectsPage
