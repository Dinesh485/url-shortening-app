import { useEffect, useRef } from "react";

const Nav = () => {
  const navDropDown = useRef(null)

  useEffect(()=>{
     const h =   navDropDown.current.scrollHeight;
     const r = document.querySelector(':root')
     r.style.setProperty('--nav-dropdown-height' , h + 'px')
  },[])
  return (
    <nav>
      <div className="wrapper ">
        <div className="flex justify-between items-center relative ">
          <img src={require("../images/logo.svg").default} alt="" className="logo" />
          <div className="group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 stroke-Grayish-Violet" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path  strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <div ref = {navDropDown} className="bg-Dark-Violet text-white font-bold absolute mt-5 rounded-xl h-0  right-0 w-full overflow-hidden group-hover:h-[var(--nav-dropdown-height)] transition-[height] duration-300 ease-out">
              <div className="p-6 py-10 text-[18px] flex flex-col gap-6 ">
                  <div class = 'flex flex-col gap-6   text-center'>
                    <a href="/">Features</a>
                    <a href="/">Price</a>
                    <a href="/">Resources</a>
                  </div>
                  <hr className=" border-Gray/30" />
                  <div class = 'flex flex-col gap-6   text-center'>
                    <a href="/">Login</a>
                    <a href="/" className="btn block">Sign Up</a>
                    
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
