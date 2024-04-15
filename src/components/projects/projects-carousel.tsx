import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import projectsList from "@/data/projects-list"
import { Card, CardContent } from "../ui/card"
import { useEffect, useRef } from "react"


function ProjectsCarousel() {
  const carouselItemRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!carouselItemRef) {
      return
    }

    if (carouselItemRef && carouselItemRef.current) {
      carouselItemRef.current.addEventListener('mouseover', ()=> console.log("over") )
      carouselItemRef.current.removeEventListener('mouseout', ()=> {})
    }

  }, [carouselItemRef])
  return (
    <>
      <Carousel ref={carouselItemRef} opts={{ loop: true }} plugins={[Autoplay({ delay: 5000 })]}>
        <CarouselContent>
          {projectsList.map((_, index) => (
            <CarouselItem key={index}>
              <div className="px-12">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <h3>{projectsList[index].title.toUpperCase()}</h3>
                    <img src={projectsList[index].image} alt={projectsList[index].title} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </>
  )
}

export default ProjectsCarousel
