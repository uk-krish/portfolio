import React from "react";
import { Link } from "react-scroll";
import profile from "../assests/images/profile(org).jpeg";
import {
  FaAnglesDown,
  FaBehance,
  FaDribbble,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

const Home = () => {
  const social = [
    {
      id: 1,
      socialname: <FaGithub size="30" />,
      link: "https://github.com/uk-krish",
    },
    {
      id: 2,
      socialname: <FaLinkedin size="30" />,
      link: "https://www.linkedin.com/in/uk-krish",
    },
    {
      id: 3,
      socialname: <FaDribbble size="30" />,
      link: "https://dribbble.com/uk-krish",
    },
    {
      id: 4,
      socialname: <FaBehance size="30" />,
      link: "https://www.behance.net/uk-krish",
    },
  ];

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id="home" name="home" className=" h-[980px] home-bg  para">
      <div className="flex flex-col items-center mx-auto justify-center py-48 text-white ">
        <div className="image h-[300px] ">
          <img
            className="sm:w-[300px] w-[250px] rounded-full  "
            src={profile}
            alt=""
          />
        </div>

        <div className="Details py-12">
          <div className=" ">
            <h1 className="md:text-5xl text-3xl text-center tracking-widest head_font ">
              UNNIKRISHNAN C
            </h1>
            <h1 className="md:text-[18px] text-[14px] mt-2">
              Web Development | Web Designer | Full Stack Developer
            </h1>
          </div>

          <div className="flex mx-auto items-center justify-center mt-5  ">
            <buttmx className="p-3 w-[130px] rounded-lg custom_btn font-bold mr-5 cursor-pointer">
              <a
               href="https://drive.google.com/file/d/1MXVn1eLvVIp_Ixqh39rsufAEjm4hfTYk/view?usp=sharing"
                target="_blank" rel="noreferrer"
              >
                Download CV
              </a>
            </buttmx>
            <button className="p-3  w-[130px] rounded-lg custom_btn font-bold ml-5">
              <Link to={"Projects"} smooth duration={200}>
                MY WORKS
              </Link>
            </button>
          </div>

          <ul className=" flex mx-auto items-center justify-center mt-8 ">
            {social.map((link) => (
              <li
                onClick={() => openLink(link.link)}
                className="ml-6 p-4 rounded-full hover:scale-110 bg-[#3f3f3fcb]"
              >
                {link.socialname}
              </li>
            ))}
          </ul>

          <div className="flex justify-center bottom-0  mt-14">
            <Link to={"about"} smooth duration={500}>
              {" "}
              <FaAnglesDown className="text-white text-5xl hover:scale-125 " />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
