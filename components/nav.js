import { useEffect, useRef } from "react";
import Link from 'next/link'
const Nav = () => {
  const navDropDown = useRef(null)

  useEffect(()=>{
     const h =   navDropDown.current.scrollHeight;
     const r = document.querySelector(':root')
     r.style.setProperty('--nav-dropdown-height' , h + 'px')
  },[])
  return (
    <nav className="relative z-50">
      <div className="wrapper xl:py-10">
        <div className="flex justify-between items-center relative lg:justify-start lg:gap-10">
          <img src='/images/logo.svg' alt="" className="logo" />
          <div className="group lg:flex-grow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 stroke-Grayish-Violet lg:hidden" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path  strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <div ref = {navDropDown} className="bg-Dark-Violet text-white font-bold absolute mt-5 rounded-xl h-0  right-0 w-full overflow-hidden group-hover:h-[var(--nav-dropdown-height)] transition-[height] duration-300 ease-out lg:h-auto  lg:bg-transparent lg:text-Grayish-Violet lg:font-medium  lg:transform-none lg:p-0 lg:relative lg:m-0 lg:w-full   lg:justify-between">
              <div className="p-6 py-10 text-[18px] flex flex-col gap-6 md:px-20 lg:flex-row lg:p-0 lg:text-sm lg:w-full lg:justify-between ">
                  <div className = 'flex flex-col gap-6   text-center lg:flex-row lg:items-center'>
                    <Link href = '/' ><a className  = 'lg:hover:text-Very-Dark-Blue transition-colors duration-150 '>Features</a></Link>
                    <Link href = '/' ><a className  = 'lg:hover:text-Very-Dark-Blue transition-colors duration-150 '>Price</a></Link>
                    <Link href = '/' ><a className  = 'lg:hover:text-Very-Dark-Blue transition-colors duration-150 '>Resources</a></Link>
                  </div>
                  <hr className=" border-Gray/30" />
                  <div className = 'flex flex-col gap-6   text-center lg:flex-row lg:items-center'>
                    <Link href = '/' ><a className  = 'lg:hover:text-Very-Dark-Blue transition-colors duration-150 '>Login</a></Link>
                    <Link href = '/' ><a  className="btn block  md:w-fit md:mx-auto">Sign Up</a></Link>
                    
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
