import Header from "./components/header/header";
import ContactPage from "./pages/contact/contact-page";
import EducationPage from "./pages/education/education-page";
import FeedbacksPage from "./pages/feedbacks/feedbacks-page";
import HomePage from "./pages/home/home-page";
import ProjectsPage from "./pages/projects/projects-page";

function App() {
  return (
    <>
      <Header />
      <main>
        <HomePage />
        <EducationPage />
        <ProjectsPage />
        <ContactPage />
        <FeedbacksPage />
      </main>
    </>
  );
}

export default App;
