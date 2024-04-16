import { TechnologyIconType } from "../types/enum"

const projectsList: IProject[] = [
  {
    title: "OhMyFood",
    image: "project1.png",
    description: "OhMyFood is a FoodTech startup of gastronomic restaurant meal reservation website. The project was to develop the UI with only HTML, CSS/SASS in a mobile first approach. Accent was set on animations and aesthetic effect on event (click and hover).",
    url: "https://loumorganrene.github.io/OhMyFood/",
    technologies: [
      TechnologyIconType.HTML,
      TechnologyIconType.CSS,
      TechnologyIconType.SASS, 
    ],
  },
  {
    title: "FishEye",
    image: "project2.png",
    description: "FishEye is a plateform for independant photographer to show there best work and found new clients. The project was to be develop with accessibility in mind using semantic HTML, ARIA attribute and keyboard event handling but also in a JavaScript OOP approach with design patterns such as factories and observers.",
    url: "https://loumorganrene.github.io/FishEye/",
    technologies: [
      TechnologyIconType.HTML,
      TechnologyIconType.CSS,
      TechnologyIconType.JAVASCRIPT, 
    ],
  },
  {
    title: "Les petits plats",
    image: "project3.png",
    description: "Les petits plats is the prototype of a recipe website from a cookbook edition company. The project was focused on developping a highly performant search engine algorythm.",
    url: "https://loumorganrene.github.io/LesPetitsPlats/",
    technologies: [
      TechnologyIconType.HTML,
      TechnologyIconType.CSS,
      TechnologyIconType.JAVASCRIPT,
      "Bootstrap" 
    ],
  },
  {
    title: "Kasa",
    image: "project3.jpg",
    description: "Kasa is a  ",
    url: "https://github.com/loumorganrene/Kasa",
    technologies: [
      TechnologyIconType.HTML,
      TechnologyIconType.CSS,
      TechnologyIconType.REACT,
    ],
  },
]

export default projectsList