import React from "react";
import { motion} from "framer-motion";
import { useInView } from "react-intersection-observer";


const Showing={
  starting:{
    opacity:0,
    y:0,
  },
  After:{
    opacity:1,
    y:100,
    transition:{
      duration:1,
    }
  },
  After_About:{
    opacity:1,
    y:100,
    transition:{
      duration:1,
      x:50,
      delay:0.3,
      y:{delay:0.3,duration:1}
    }
  },

}




const About = () => {
  const[ref,inView]=useInView({
    triggerOnce:false,
    threshold:.2
  })
  
  return (

    <div
    id="about"
    name="About "
    className="mt-36 para"
    >
        <motion.div 
        className="Heading mx-auto text-center text_white md:text-[40px] text-[28px] "
        variants={Showing}
        initial="starting"
        ref={ref}
        animate={inView?"After":"starting"}
        >
          <h1 className=" font-bold head_font">
            A Little About <span className="text_highlight">Myself</span>
          </h1>
        </motion.div>

        <motion.div
         className="mx-auto max-w-[600px] mt-8 "
         variants={Showing}
         initial="starting"
         ref={ref}
         animate={inView?"After_About":"starting"}
         >
          <p className="text-center tracking-widest  leading-8 text-[18px] text_white">
            Hi ,
            <br />
            My name is <span className="text_highlight">
              Unnikrishnan.C
            </span>{" "}
            I'm an Engineering student pursuing Bachelor's degree in Information
            Technology. I am passionate about software development and aspire to
            become a successful software developer. As a fresher, I am eager to
            gain practical experience in the field and am currently seeking
            software development internships and full-time roles.
          </p>
        </motion.div>
    </div>
  );
};

export default About;
