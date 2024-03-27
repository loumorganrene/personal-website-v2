import ScrollButton from '@/components/scroll-button/scroll-button'
import LPTitle from './../../assets/logos/logo-lp-full.webp'

function HomePage() {
  return (
    <section
      id="homepage"
      className="flex flex-col justify-between w-full h-screen bg-no-repeat bg-home-page bg-300vw bg-center"
    >
      <h1 className="self-center px-4 my-auto">
        <img src={LPTitle} alt="Lou Pierre - Frontend Developer" />
      </h1>
      <ScrollButton
        direction="down"
        target="#education"
        size="w-24 h-24"
        className="self-center sticky bottom-0 animate-bounce"
      />
    </section>
  )
}

export default HomePage
