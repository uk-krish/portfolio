import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
      style: "link_hover",
    },
    {
      id: 2,
      link: "about",
      style: "link_hover",
    },
    {
      id: 3,
      link: "Projects",
      style: "link_hover",
    },
    {
      id: 4,
      link: "skills",
      style: "link_hover",
    },
    {
      id: 4,
      link: "contact",
      style: "contact_btn",
    },
  ];

  return (
    <section className="flex justify-between w-full h-20 items-center px-4 bg-[#181818] custom_nav fixed text-[#FAFAFA] z-10 para ">
      <div className="flex items-center">
        <div className="md:w-[100px] w-[50px] ">
          <svg
            viewBox="0 0 562 354"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M176.777 0.000167847L176.777 0L141.421 35.3553L35.3553 141.421L0 176.777L35.3553 212.132L141.421 318.198L176.777 353.553L176.777 353.553L176.777 282.843L70.7107 176.777L176.777 70.7107L176.777 70.7108V0.000167847Z"
              fill="#0D60D5"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M384.33 354L384.33 354L419.686 318.645L525.752 212.579L561.107 177.223L525.752 141.868L419.686 35.802L384.33 0.446605L384.33 0.446788L384.33 71.1573L490.396 177.223L384.33 283.289L384.33 283.289V354Z"
              fill="#0D60D5"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M174.488 176.777L280.554 70.7107L386.62 176.777L306.058 257.339L342.153 291.954L421.975 212.132L457.33 176.777L421.975 141.421L315.909 35.3553L280.554 0L245.198 35.3553L139.132 141.421L103.777 176.777L139.132 212.132L245.198 318.198L280.554 353.553L315.909 318.198L316.691 317.416L280.596 282.8L280.554 282.843L174.488 176.777Z"
              fill="#2FC2FD"
            />
          </svg>
        </div>
        <h1 className="md:text-[34px] text-[28px] head_font  font-semibold ml-2 text-[#2FC2FD] ">
          UK_KRISH
        </h1>
      </div>

      <ul className="md:flex hidden mr-10 ">
        {links.map(({ id, link, style }) => (
          <li
            key={id}
            className={`px-8 cursor-pointer capitalize font-medium  duration-200 p-2 ${style}`}
          >
            <Link to={link} smooth duration={200}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden text-[#E5F0FF] "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        {nav && (
          <ul
            className="
          flex flex-col justify-center items-center absolute top-[80px] left-0 w-full h-screen bg-[#181818]
          "
          >
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-6 py-10 cursor-pointer capitalize font-medium hover:scale-125  duration-200 "
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Navbar;
