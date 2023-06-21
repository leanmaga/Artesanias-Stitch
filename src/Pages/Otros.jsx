import { StarsCanvas } from "../components"
import CarouselOtros from "../components/CarouselOtros";

import { styles } from "../styles";
const Otros = () => {
  return (
    <>
    <div className="flex justify-center w-full h-screen text-center">
   

    <div className="col-2"></div>

    <div className="col-8">
        <h1 className={`${styles.sectionHeadText} text-center`}>Otros</h1>
        <CarouselOtros/>
    </div>

    <div className="col-2"></div>

    </div>

    <StarsCanvas />

</>
  )
}

export default Otros