module Enums {
  enum MainNavIconType {
    GraduationCap = "fa-solid fa-graduation-cap",
    LaptopCode = "fa-solid fa-laptop-code",
    Envelope = "fa-solid fa-envelope"
  }
  export default MainNavIconType

  enum TechnologyIconType {
    HTML = "icon-html5.svg",
    CSS = "icon-css3.svg",
    JAVASCRIPT = "icon-js.svg",
    SASS = "icon-sass.svg",
    TYPESCRIPT = "icon-typescript.svg",
    REACT = "icon-react.svg" ,
    REDUX = "icon-redux.svg",
    GIT = "icon-git.svg"
  }
  export default TechnologyIconType
}

interface IMainNavLinks {
  name: string;
  url: string;
  icon: Enums.MainNavIconType;
}

interface ISectionProps {
  sectionName: string;
  children: React.ReactNode;
}

interface IEducation {
  workTitle: string;
  startDate: number;
  endDate: number;
  school: {
    name: string;
    logo: string;
    url: string;
  }
  description: string;
}

interface IProjects {
  title: string;
  image: string;
  description: string;
  url: string;
  technologies: Enums.TechnologyIconType;
}

interface IFeedbacks {
  authorName: string;
  authorSociety: string;
  message: string;
}