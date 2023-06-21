import { StarsCanvas } from "../components"
import CarouselLlaveros from "../components/CarouselLlaveros";

import { styles } from "../styles";
const Llaveros = () => {
  return (
    <>
    <div className="flex justify-center w-full h-screen text-center">

    <div className="col-2"></div>

    <div className="col-8">
        <h1 className={`${styles.sectionHeadText} text-center`}>Llaveros</h1>
        <CarouselLlaveros/>
    </div>

    <div className="col-2"></div>

    </div>

    <StarsCanvas />

</>
  )
}

export default Llaveros