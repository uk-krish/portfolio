import React, { useEffect } from "react";
import {Projects_List} from "../data/Datas";
import noimage from "./../assests/images/noimages.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Showing = {
  starting: {
    opacity: 0,
    translateX: -50,
    translateY: -50,
  },
  After: {
    opacity: 1,
    translateX: 0,
    translateY: -50,
    
  },
};

const Projects = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  useEffect(() => {
    if (inView) console.log(inView);
  }, [inView]);

  return (
    <section
    
      id="Projects"
      className="flex flex-col py-40  max-w-[1280px] mx-auto text_white para"
    >
      <div className="Heading mx-auto text-center ">
        <h1 className=" text-5xl textunder text_white ">
          Some Things I've <span className="text_highlight">Build</span>
        </h1>
      </div>

      <div className="projects mt-16 mx-auto"
      ref={ref}
      >
        <div className="grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {Projects_List.map((project) => (
            <motion.div
             
              className="md:w-[400px] w-[350px]  max-h-max bg-[#111111] rounded-xl mx-auto md:ml-10 ml-0 mt-10 p-3 "
              variants={Showing}
              initial="starting"
              animate={inView?"After":"starting"}
              transition={{ duration: 0.3, delay: project.id * 0.3 }}
            >
              <div className="hover:scale-105">
              <img
                className="h-[250px] "
                src={project.image ? project.image : noimage}
                alt=""
              />
              <h1 className="font-extrabold text-2xl text-center m-3 head_font">
                {project.title}
              </h1>
              <p className="m-3 h-[150px] ml-6 text-[17px] ">
                {project.describe}
              </p>
              <div className="flex p-3 justify-between w-80  mx-auto ">
                <button
                  onClick={() => openLink(project.view_code)}
                  className={`${
                    project.view_code ? "custom_btn" : "cursor-default hidden"
                  } p-3 font-extrabold w-32 rounded `}
                >
                  See code
                </button>
                <button
                  onClick={() => openLink(project.live_demo)}
                  className={`${
                    project.live_demo ? "custom_btn1" : "cursor-default hidden"
                  } p-3 font-extrabold w-32`}
                >
                  Live Preview
                </button>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
