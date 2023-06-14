import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { experiences } from "../constants";

import { Link } from 'react-router-dom';


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <div className='flex flex-column justify-center items-center gap-1'>
        
        <div className='flex-1 flex flex-col justify-between items-center'>
          
          <img className='w-75 h-75' src={experience.image}  alt={experience.title} />

        </div> 
        
        
        <Link to="/pagina">
          <button className='flex justify-center items-center gap-1 btn btn-primary'>Productos</button>
        </Link>

        
      </div>

     

    </VerticalTimelineElement>
    
  );
};

const Experience = () => {
  return (
    <div className="mt-20">
      <div>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Mis creaciones.
        </h2>
      </div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");