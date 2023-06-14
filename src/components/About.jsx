import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";



const About = () => {
  return (
    <div id='about' className='relative w-full h-screen mx-auto'>
      
      <motion.div 
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}></p>
        <h2 className={styles.sectionHeadText}>¿Quién soy?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Soy una apasionada de las artesanias y llevo más de 10 años 
        trabajando en el mundo del diseño y la producción de piezas 
        únicas y hechas a mano. Mi emprendimiento, Artesanias Stitch, 
        se enfoca en ofrecer productos de alta calidad y 
        diseños innovadores a un público que valora el trabajo artesanal 
        y el diseño personalizado.

      </motion.p>

    </div>
  );
};


export default SectionWrapper(About, "about");