import React from 'react';
import Card from "./Card";
import Projects from './Project';
import Skills from './Skills';
import Contact from './Contact';
import data from "../assets/data";

const Grid = () => {
    return (
      <>
        <div className="grid grid-rows-2 grid-flow-col gap-2 min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
        <div className="row-span-2" data-aos="fade-down" data-aos-duration="800">
          <Card name={data.name} title={data.title} social={data.social} />
        </div>
        <div className="row-span-1" data-aos="fade-down" data-aos-duration="800">
          <Projects title={data.projects.title} description={data.projects.description} />
        </div>
        <div className="row-span-1">
          <Skills />
        </div>
      </div>
    </>
    );
  };
  
  export default Grid;  