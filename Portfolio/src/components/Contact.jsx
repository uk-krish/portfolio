import React from "react";

import { 
  FaAnglesDown,
  FaBehance,
  FaDribbble,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";



const Contact = () => {
  const social = [
    {
      id: 1,
      socialname: <FaGithub size="30"/>,
      link: "https://github.com/uk-krish",
    },
    {
      id: 2,
      socialname:<FaLinkedin size="30"/>,
      link: "https://www.linkedin.com/in/uk-krish",
    },
    {
      id: 3,
      socialname: <FaDribbble size="30"/>,
      link: "https://dribbble.com/uk-krish",
    },
    {
      id: 4,
      socialname: <FaBehance size="30"/>,
      link: "https://www.behance.net/uk-krish",
    },
  ];

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      name="contact"
      className="flex flex-col p-3    mx-auto   text-white"
    >
       <div className="Heading mx-auto text-center ">
        <h1 className=" text-5xl textunder hover:scale-125 text-[#F2F1D0] ">Contact</h1>
      </div>
      <div className="mx-auto">
      <a className="flex mx-auto m-5 p-3 justify-center contact_btn2 text-[18px] font-medium " href="mailto:unnikrishnan131100@gmail.com" target="_blank" >Send email</a>

      <ul className=" flex mx-auto items-center justify-center mt-8 mb-8 ">
            {
              social.map((link)=>(
                <li
                 onClick={()=>openLink(link.link)}
                 className="ml-6 p-4 rounded-full hover:scale-110  bg-[#3f3f3fcb]"
                  >
                  {link.socialname }
                </li>
              ))
            }
          </ul>
      </div>
    </section>
  );
};

export default Contact;
