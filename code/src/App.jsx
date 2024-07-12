import React, { useEffect } from "react";

import Card from "./templates/Card";
import Project from "./templates/Project";

import data from "./assets/data";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card name={data.name} title={data.title} social={data.social} />
        <Project title={data.projects.title} description={data.projects.description} />
      </div>
    </div>
  );
}
