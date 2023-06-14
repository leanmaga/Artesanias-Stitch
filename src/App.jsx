

import { About, Contact, Experience, Feedbacks, Hero, Navbar,  StarsCanvas } from "./components";

const App = () => {
  return (
    <div className="snap-container">
      <div className='relative z-0 bg-black'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero className='snap-section'/>
        </div>
        <div >
          <About className='snap-section' />

          <Experience className='snap-section block'/>
          
          <Feedbacks className='snap-section block'/>
        </div>
        <div >
          <Contact className='snap-section block'/>
          <StarsCanvas />
        </div>
      </div>
    </div>
  );
}

export default App;
