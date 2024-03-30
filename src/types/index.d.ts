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
    REACT = "icon-react.svg",
    REDUX = "icon-redux.svg",
    GIT = "icon-git.svg"
  }
  export default TechnologyIconType

  enum SocialNetworkIconType {
    Github = 'icon-github.svg',
    LinkedIn = 'icon-linkedin.svg'
  }

  export default SocialNetworkIconType
}

// COMPONENT PROPS
interface ISectionProps {
  sectionName: string;
  children?: React.ReactNode;
  className?: string;
}

interface ISectionTitleProps {
  title: string;
  className?: string;
}

interface ILogoProps {
  image: string;
  className?: string;
}
interface INavProps {
  linkList: IMainNavLink[];
  className?: string;
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
}

interface IScrollButtonProps {
  direction: string;
  target: string;
  size?: string;
  className?: string;
}

// SECTIONS DATA MODEL

interface IMainNavLink {
  name: string;
  url: string;
  icon: Enums.MainNavIconType;
}

interface IEducation {
  workTitle?: string;
  startDate: number;
  endDate: number;
  school: {
    name: string;
    logo: string;
    url: string;
  }
  content: {
    description: string;
    skills: string[];
  };
}

interface IProject {
  title: string;
  image: string;
  description: string;
  url: string;
  technologies: Enums.TechnologyIconType;
}

interface IContactFormFields {
  fullName: string;
  email: string;
  message: string;
}

interface IProfessionalDetails {
  firstName: string;
  lastName: string;
  address: string;
  postalCode: number;
  city: string;
  country: string;
}

interface ISocialNetworkLink {
  name: string;
  url: string;
  icon: Enums.SocialNetworkIconType;
}

interface IFeedback {
  authorName: string;
  authorSociety: string;
  message: string;
}