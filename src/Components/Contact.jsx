import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FaBehance, FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa6";

const Showing = {
  starting: {
    opacity: 0,
    y: -50 ,
  },
  After: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

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
    <section
      id="contact"
      name="contact"
      className="flex para  p-10 conatct_back mt-16  mx-auto justify-center text-white"
    >
      <motion.div
        className="bg-black max-w-[690px] p-4  mx-auto rounded-xl   "
        variants={Showing}
        initial="starting"
        ref={ref}
        animate={inView ? "After" : "starting"}
      >
        <h1 className=" text-center font-bold mt-6 md:text-[28px] text-[20px] head_font">
          Get In <span className="text_highlight ">Touch</span>
        </h1>
        <p className="text-center mt-4">
          I'm looking for any new opportunities, my inbox is always open,
          Interested in working together ? or just want to talk ? I'll buy the
          coffee.
        </p>

        <button className="flex head_font mx-auto mt-6 p-3  contact_btn ">
          <a
            href="mailto:unnikrishnan131100@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Let's Do This
          </a>
        </button>
        <ul className="flex mx-auto w-96 mt-6 mb-6 list-none ">
          {social.map((link) => (
            <li
              onClick={() => openLink(link.link)}
              className="ml-6 p-4 rounded-full mx-auto hover:scale-110  bg-[#3f3f3fcb]"
            >
              {link.socialname}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Contact;
