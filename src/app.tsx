import Header from "./components/header/header"
import { useSectionRefs } from "./hooks/useSectionRefs"
import ContactPage from "./pages/contact/contact-page"
import EducationPage from "./pages/education/education-page"
import FeedbacksPage from "./pages/feedbacks/feedbacks-page"
import HomePage from "./pages/home/home-page"
import ProjectsPage from "./pages/projects/projects-page"
import { SectionRef } from "./types/enum"

function App() {
  const sectionRefs = useSectionRefs()

  return (
    <>
        <Header sectionRefs={sectionRefs} />
        <main>
          <HomePage />
          <EducationPage ref={sectionRefs[SectionRef.Education]} />
          <ProjectsPage ref={sectionRefs[SectionRef.Projects]} />
          <ContactPage ref={sectionRefs[SectionRef.Contact]} />
          <FeedbacksPage ref={sectionRefs[SectionRef.Feedbacks]} />
        </main>
    </>
  );
}

export default App;
