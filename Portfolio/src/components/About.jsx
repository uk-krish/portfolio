import React from "react";

const About = () => {
  return (
    <section
      id="about"
      name="About "
      className="flex flex-col bg-[#111111] py-36  max-h-max  mx-auto   text-white"
    >
 <div className="Heading mx-auto text-center ">
        <h1 className=" text-5xl textunder hover:scale-125 text-[#F2F1D0] ">ABOUT</h1>
      </div>

        <div className="details_about mx-auto max-w-[700px] rounded  bg-[#86868663] p-8 mt-16">
            <p className="text-[20px]  font-light tracking-wide text-justify leading-loose">
            Hi , I'm an Engineering student pursuing Bachelor's degree in Information Technology. I am passionate about software development and aspire to become a successful software developer. As a fresher, I am eager to gain practical experience in the field and am currently seeking software development internships and full-time roles.      
            </p>
          </div>
          

    </section>
  );
};

export default About;
