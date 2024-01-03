import FeeContainer from './fee_container/Fee_container';
import About from './about/About';
import Testimonial from './testimonial/Testimonial';
import Instructor from './instructor/Instructor';
import HeroSection from './hero_section/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection className="z-0" />
      <div className='flex relative'>
        <About />
        <FeeContainer />
      </div>
      <Instructor />
      <Testimonial />
    </main>
  )
}
