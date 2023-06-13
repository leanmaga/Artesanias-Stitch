

import { About, Contact, Experience, Feedbacks, Hero, Navbar,  StarsCanvas } from "./components";

const App = () => {
  return (
    <>
      <div className='relative z-0 bg-black'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div >
          <About />

          <Experience />
          
          <Feedbacks />
        </div>
        <div >
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  );
}

export default App;
