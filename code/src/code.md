<div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card name={data.name} title={data.title} social={data.social} />
        <Project title={data.projects.title} description={data.projects.description} />
      </div>
    </div>


    <div className="grid-container grid-row-3 min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
          <div className="grid-item" data-aos="fade-down" data-aos-duration="800">
            <Card name={data.name} title={data.title} social={data.social} />
          </div>
          <div className="grid-item" data-aos="fade-down" data-aos-duration="800">
          <Projects title={data.projects.title} description={data.projects.description}  />
            <Skills />
          </div>
        </div>
        <div className="grid-container min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
          <div className="grid-item" data-aos="fade-down" data-aos-duration="800">
            <Contact/>
          </div>
          <div className="grid-item" data-aos="fade-down" data-aos-duration="800">
            Reseaux sociaux
          </div>
        </div>