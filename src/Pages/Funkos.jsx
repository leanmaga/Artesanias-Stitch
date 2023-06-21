import { StarsCanvas } from "../components"
import CarouselFunkos from "../components/CarouselFunkos";

import { styles } from "../styles";

const Funkos = () => {
  return (
    <>
    <div className="flex justify-center w-full h-screen text-center">

    <div className="col-2"></div>

    <div className="col-8">
        <h1 className={`${styles.sectionHeadText} text-center`}>Funkos</h1>
        <CarouselFunkos/>
    </div>

    <div className="col-2"></div>

    </div>

    <StarsCanvas />

</>
  )
}

export default Funkos