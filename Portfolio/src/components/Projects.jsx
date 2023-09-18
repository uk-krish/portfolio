import React from "react";
import Projects_List from "../data/Project_List";
import noimage from "./../assests/images/noimages.png";

const Projects = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };
  return (
    <section
      id="Projects"
      className="flex flex-col py-36 max-h-max max-w-[1280px] mx-auto   text-white"
    >
      <div className="Heading mx-auto text-center ">
        <h1 className=" text-5xl textunder hover:scale-125 text-[#F2F1D0] ">
          PROJECTS
        </h1>
      </div>

      <div className="projects mt-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {Projects_List.map((project) => (
            <div className="w-[400px]  hover:scale-105 max-h-max bg-[#111111] rounded-xl mx-auto ml-10 mt-10 p-3 ">
              <img
                className="h-[250px] "
                src={project.image ? project.image : noimage}
                alt=""
              />
              <h1 className="font-extrabold text-2xl text-center m-3">
                {project.title}
              </h1>
              <p className="m-3 h-[150px] ml-6 text-[17px] ">
                {project.describe}
              </p>
              <div className="flex p-3 justify-between w-80  mx-auto ">
                <button
                 onClick={()=>openLink(project.view_code)}
                  className={`${
                    project.view_code
                      ? "custom_btn"
                      : "cursor-default hidden"
                  } p-3 font-extrabold w-32 rounded `}
                >
                  See code
                </button>
                <button
                 onClick={()=>openLink(project.live_demo)}
                  className={`${
                    project.live_demo
                      ? "custom_btn1"
                      : "cursor-default hidden"
                  } p-3 font-extrabold w-32`}
                >
                  Live Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
