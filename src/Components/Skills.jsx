import React from 'react'
import { motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Skills_Data } from '../data/Datas';
const Showing={
    starting:{
      opacity:0,
      y:0,
    },
    After:{
      opacity:1,
      y:80,
      transition:{
        duration:1,
      }
    },
    Skills_Show:{
      opacity:1,
      y:0,
      transition:{
        duration:1,
      }
    },
    Skills_Desc:{
      opacity:1,
      y:25,
      transition:{
        duration:1,
        x:50,
        delay:0.5,
        y:{delay:0.5,duration:1}
      }
    },
  
  }


const Skills = () => {

    const[ref,inView]=useInView({
        triggerOnce:false,
        threshold:.2
      })
  return (
    <div
    id="skills"
    name="Skills"
    className='max-w-[1280px] mx-auto para'
    >
        <motion.div
        className="Heading mx-auto text-center text_white "
        variants={Showing}
        initial="starting"
        ref={ref}
        animate={inView?"After":"starting"}
        >
        <h1 className=" font-bold md:text-[40px] text-[28px] head_font">
        I'm <span className="text_highlight">Experienced </span>in...
          </h1>
          <motion.p
           className='md:text-[22px] text-[18px] '
           variants={Showing}
           initial="starting"
           ref={ref}
           animate={inView?"Skills_Desc":"starting"}
           >
          These are the few technologies, languages, and frameworks that I grind on a regular basis.
          </motion.p>
        </motion.div>

        <div
        className='grid grid-cols-1 sm:grid-cols-3 text_white mx-auto mt-36 ' 
       
        >
          {
            Skills_Data.map((data)=>(
             <motion.div className='mt-5 bg-black w-[150px] mx-auto rounded-lg '
             variants={Showing}
             initial="starting"
             animate={"Skills_Show"}
             transition={{ duration: 0.3, delay:data.id * 0.5 }}
             >

             <div >
                <img className={`w-[100px] mt-5  mx-auto`} src={data.image} alt="" />
                <p className='text-center mt-2 mb-2' >{data.title} </p>
              </div>
             </motion.div>
            ))
          }
        </div>

    </div>
  )
}

export default Skills