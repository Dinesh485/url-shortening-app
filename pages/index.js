
import { useState } from "react";
import Nav from "../components/nav";
import ShortenedList from "../components/shortenedList";
import ShortenUrl from "../components/shortenUrl";
import Link from 'next/Link'
function App() {
  const [linkstoshort , setlinkstoshort] = useState([])
  const [error, setError] = useState(null)
  return (
    <div className="App font-poppins overflow-hidden">
      <Nav />
      <section>
        <div className="wrapper pb-40 flex flex-col items-center justify-center gap-10 md:flex-row md:pt-16 xl:gap-14 ">
          <div className=" relative  w-full md:order-2 md:w-2/3 max-w-[500px]">
          <img  src="/images/illustration-working.svg"  alt="illustration" className="block min-w-[150%] " />
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-5 md:order-1 md:text-left md:items-start">
            <h1 className="text-[40px] leading-[43px] tracking-tighter font-extrabold  text-Very-Dark-Violet lg:text-6xl lg:leading-tight xl:text-7xl xl:leading-tight">More than just shorter links</h1>
            <p className="text-Grayish-Violet text-lg font-medium max-w-[500px]">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
            <Link href = '/'><a   className="btn text-lg px-10 py-3 lg:mt-10">
              Get Started
            </a></Link>
          </div>
        </div>
      </section>
      <section className="bg-gray-200">
         <div className="wrapper pt-0 pb-20 md:pb-32">
           <div className="relative pt-28 md:pt-20 lg:pt-24">
           <ShortenUrl setlinkstoshort = {setlinkstoshort} error = {error} setError ={setError} />
           <ShortenedList linkstoshort = {linkstoshort} setError ={setError} setlinkstoshort ={setlinkstoshort} />
           </div>
           <div className="my-16 text-center md:my-24 lg:mb-8 xl:mt-26">
             <h2 className="text-3xl font-bold text-Very-Dark-Violet mb-4 md:text-4xl">Advanced Statistics</h2>
             <p className="text-Grayish-Violet font-medium md:max-w-[500px] md:mx-auto">Track how your links are performing across the web with our advanced statisitcs dashboard</p>
           </div>
           <div className="flex flex-col items-center relative lg:flex-row lg:gap-4 xl:gap-8 max-w-[1200px] mx-auto">
              <span className="h-full bg-Cyan w-2 absolute top-0 lg:h-2 lg:w-full lg:top-1/2 lg:-translate-y-1/2 "></span>
              <div className="relative p-10 px-6 rounded-lg pt-20 text-center flex flex-col items-center bg-white max-w-lg md:pb-16 lg:items-start lg:text-left lg:aspect-[3/2] lg:max-w-[400px]">
                  <div className="flex items-center justify-center rounded-full   aspect-square bg-Dark-Violet absolute bottom-full translate-y-1/2 w-[88px] ">
                  <img  src='/images/icon-brand-recognition.svg' alt="icon" />
                  </div>
                  <h3 className="text-2xl font-bold text-Very-Dark-Violet mb-5">Brand Recognition</h3>
                  <p className="font-medium text-Grayish-Violet ">Boost your brand recoginition with each click. Gneric links don&apos;t mean a thing. Branded links help instil confidence in your content.</p>
              </div>
              <div className="relative p-10 px-6 rounded-lg pt-20 text-center flex flex-col items-center bg-white mt-24 max-w-lg md:pb-16 lg:items-start lg:text-left lg:aspect-[3/2] lg:max-w-[400px]">
                  <div className="flex items-center justify-center rounded-full   aspect-square bg-Dark-Violet absolute bottom-full translate-y-1/2 w-[88px] ">
                  <img  src='/images/icon-detailed-records.svg' alt="icon" />
                  </div>
                  <h3 className="text-2xl font-bold text-Very-Dark-Violet mb-5">Detailed Records</h3>
                  <p className="font-medium text-Grayish-Violet ">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
              </div>
              <div className="relative p-10 px-6 rounded-lg pt-20 text-center flex flex-col items-center bg-white mt-24 max-w-lg md:pb-16 lg:mt-[200px] lg:items-start lg:text-left lg:aspect-[3/2] lg:max-w-[400px]">
                  <div className="flex items-center justify-center rounded-full   aspect-square bg-Dark-Violet absolute bottom-full translate-y-1/2 w-[88px] ">
                  <img  src='/images/icon-fully-customizable.svg' alt="icon" />
                  </div>
                  <h3 className="text-2xl font-bold text-Very-Dark-Violet mb-5">Fully Customizable</h3>
                  <p className="font-medium text-Grayish-Violet ">improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
              </div>
           </div>
         </div>
      </section>
      <section className="bg-Dark-Violet bg-[url('/images/bg-boost-mobile.svg')] bg-right bg-no-repeat lg:bg-[url('/images/bg-boost-desktop.svg')]">
        <div className="wrapper h-[250px] flex items-center justify-center gap-4  flex-col  md:gap-6" >
            <h2 className="font-bold text-3xl text-white text-center md:text-4xl ">Boost your links today</h2>
            <Link href = '/'><a  className="btn text-xl py-4 px-8">Get Started</a></Link>
        </div>
      </section>
      <footer className="bg-Very-Dark-Violet">
        <div className="wrapper flex flex-col items-center gap-12 py-12 md:flex-row md:items-start md:justify-between xl:py-20">
          <div><img  src="/images/logo-footer.svg" alt="log" className="w-36" /></div>
          <div className="flex flex-col items-center capitalize gap-10 md:flex-row md:flex-wrap md:justify-end md:items-start xl:gap-24">
             <div className="text-Gray flex flex-col gap-2 text-center md:text-left xl:gap-3">
                <h3 className="text-white font-bold mb-2">Features</h3>
                <Link href = '/'><a className="hover:text-Cyan" >Link shortening</a></Link>
                <Link href = '/'><a className="hover:text-Cyan" >Brand links</a></Link>
                <Link href = '/'><a className="hover:text-Cyan" >analytics</a></Link>
             </div>
             <div className="text-Gray flex flex-col gap-2 text-center md:text-left xl:gap-3">
                <h3 className="text-white font-bold mb-2">Resources</h3>
                <Link href = '/'><a className="hover:text-Cyan" >blog</a></Link>
                <Link href = '/'><a className="hover:text-Cyan" >developers</a></Link>
                <Link href = '/'><a className="hover:text-Cyan" >support</a></Link>
             </div>
             <div className="text-Gray flex flex-col gap-2 text-center md:text-left xl:gap-3">
                <h3 className="text-white font-bold mb-2">Company</h3>
                <Link href = '/'><a className="hover:text-Cyan" >About</a></Link>
                <Link href = '/'><a className="hover:text-Cyan" >our team</a></Link>
                <Link href = '/'><a className="hover:text-Cyan" >careers</a></Link>
                <Link href = '/'><a className="hover:text-Cyan" >contact</a></Link>
             </div>
             <div className=" flex  gap-6 text-center md:self-start items-center text-white">
               
                 <Link href = '/'><a className="hover:text-Cyan" >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
                  </a></Link>
                <Link href = '/'><a className="hover:text-Cyan" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20"><path fill="currentColor" d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"/></svg>
                  </a></Link>
                <Link href = '/'><a className="hover:text-Cyan" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
                  </a></Link>
                <Link href = '/'><a className="hover:text-Cyan" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a></Link>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
