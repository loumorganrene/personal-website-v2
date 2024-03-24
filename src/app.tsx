import Header from "./components/header/header";
import { useSectionRefs } from "./hooks/useSectionRefs";
import ContactPage from "./pages/contact/contact-page";
import EducationPage from "./pages/education/education-page";
import FeedbacksPage from "./pages/feedbacks/feedbacks-page";
import HomePage from "./pages/home/home-page";
import ProjectsPage from "./pages/projects/projects-page";
import { SectionRef } from "./types/enum";
import ReactScrollWheelHandler from "react-scroll-wheel-handler"

function App() {
  const sectionRefs = useSectionRefs()
  const handleScroll = (event: { deltaY: number }) => {
    if ('deltaY' in event) {
      if (event.deltaY > 0) {
        // on scrolling down
        window.scrollTo({
          top: window.scrollY + window.innerHeight,
          behavior: 'smooth'
        });
      } else {
        // on scrolling up
        window.scrollTo({
          top: window.scrollY - window.innerHeight,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <>
      <ReactScrollWheelHandler
        className="scroll-wheel-handler scroll-m-0"
        upHandler={() => handleScroll({ deltaY: -1 })}
        downHandler={() => handleScroll({ deltaY: 1 })}
      >
        <Header sectionRefs={sectionRefs} />
        <main>
          <HomePage />
          <EducationPage ref={sectionRefs[SectionRef.Education]} />
          <ProjectsPage ref={sectionRefs[SectionRef.Projects]} />
          <ContactPage ref={sectionRefs[SectionRef.Contact]} />
          <FeedbacksPage ref={sectionRefs[SectionRef.Feedbacks]} />
        </main>
      </ReactScrollWheelHandler>
    </>
  );
}

export default App;
