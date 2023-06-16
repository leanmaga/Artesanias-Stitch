import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <section className={`relative pt-[100px] lg:pt-[100px] `} id='hero'>
      
      <div className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 inset-0 ${styles.paddingX} flex flex-row justify-center items-start gap-5`}>
        
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='flex flex-col justify-center items-center mt-5'>

          <h1 className={`${styles.heroHeadText}`}>
            <span id="title" className='text-[#915EFF]'>Artesanias Stitch</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Venta de aros, llaveros, pinturas,
            souvenirs, impresiones en 3d y mucho más...
          </p> 

        </div>
        
      </div>
      
      <div className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 inset-0 ${styles.paddingX} flex flex-col justify-center h-[500px] items-center p-5`}>
        <ComputersCanvas className="w-[100%] h-[100%]"/>
      </div>
      
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center xs:hidden'>
        
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
        </div>
        
      </div>

    </section>
  );
};

export default Hero;
