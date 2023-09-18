import React, { useState } from 'react'
import { FaBars,FaTimes } from 'react-icons/fa'
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav,setNav]=useState(false);
      const links=[
        {
          id:1,
          link:'home',
          style:'link_hover'
        }
        ,
        {
          id:2,
          link:'about',
          style:'link_hover'
        }
        ,
        {
          id:3,
          link:'Projects',
          style:'link_hover'
        }
        ,
        {
          id:4,
          link:'contact',
          style:'contact_btn'
        }
      ]
      


  return (
    <section className='flex justify-between w-full h-20 items-center px-4 bg-[#000000] fixed text-[#F2F1D0] z-10 '>
      <div>
        <h1 className='text-5xl ml-10'>UK_KRISH</h1>
      </div>

      <ul className='md:flex hidden mr-10 '> 
        {
          links.map(({id,link,style})=>(
            <li key={id} className={
              `px-4 cursor-pointer capitalize font-medium  duration-200 p-2 ${style}`
            }>
            <Link to={link} smooth duration={200}  >{link}</Link>
          </li>
          ))
        }
      </ul>

        <div
        onClick={()=>setNav(!nav)}
        className='cursor-pointer pr-4 z-10 md:hidden'
        >
          {nav?<FaTimes size={30}/>:<FaBars size={30}/>}
         {
          nav && (
            <ul className='
            flex flex-col justify-center items-center absolute top-[80px] left-0 w-full h-screen bg-black 
            '>
          {
            links.map(({id,link})=>(
              <li key={id} className='px-4 py-8 cursor-pointer capitalize font-medium hover:scale-125  duration-200 '>
              <Link onClick={()=>setNav(!nav)}  to={link} smooth duration={500} >{link}</Link>
            </li>
            ))
          }
            </ul>
          )
         }
        </div>

    </section>
  )
}

export default Navbar