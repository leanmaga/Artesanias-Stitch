import {  StarsCanvas } from "../components"
import CarouselAros from "../components/CarouselAros";

import { styles } from "../styles";

const Aros = () => {
  return (
    <>
        <div className="flex justify-center w-full h-screen text-center">
        

        <div className="col-2"></div>

        <div className="col-8">
            <h1 className={`${styles.sectionHeadText} text-center`}>Aros</h1>
            <CarouselAros/>
        </div>

        <div className="col-2"></div>

        </div>

        <StarsCanvas />

    </>
  )
}

export default Aros