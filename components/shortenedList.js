import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const ShortenedList = ({ linkstoshort, setError, setlinkstoshort }) => {
  return (
    <div className="flex flex-col gap-4">
      {linkstoshort.length > 0 &&
        linkstoshort.map((link, index) => {
          return <SigleLink originalLink={link} setError={setError} linkstoshort={linkstoshort} setlinkstoshort={setlinkstoshort} key={index} />;
        })}
    </div>
  );
};

const SigleLink = ({ originalLink, setError, setlinkstoshort, linkstoshort }) => {
  const [shortenedLink, setShortenedLink] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`https://api.shrtco.de/v2/shorten?url=${originalLink}`);
        if (response.data.ok) {
          return setShortenedLink(response.data.result.full_short_link);
        }
      } catch (err) {
        setError(err.response.data.error);
        const newLinks = linkstoshort.filter(link => link !== originalLink);
        
        setlinkstoshort(newLinks);
      }
    };
    fetchData();
  }, []);

  const copyToClipboard = (e,link) =>{

        navigator.clipboard.writeText(link)
        if(document.activeElement === e.target){
          e.target.innerText = 'Copied!'
        e.target.classList.add('bg-Dark-Violet')
        }

        e.target.addEventListener('blur', () =>{
          e.target.innerText = 'Copy'
          e.target.classList.remove('bg-Dark-Violet')
        })
      
  }
  return shortenedLink ? (
    <div className=" bg-white rounded-lg font-medium lg:flex lg:justify-between lg:items-center">
      <div className="border-b border-solid border-Gray p-4 md:px-6 overflow-hidden lg:border-none">{originalLink}</div>

      <div className="p-4 md:px-6 flex flex-col gap-4 lg:flex-row lg:items-center">
        <Link href={shortenedLink}><a  className="block overflow-hidden text-Cyan" target="_blank">
          {shortenedLink}
        </a></Link>
        <button className="btn font-bold rounded-md block lg:w-[120px] lg:box-border lg:px-0 lg:text-center transition-none" onClick = {(e) => copyToClipboard(e,shortenedLink)}>Copy</button>
      </div>
    </div>
  ) : (
    <div className="  rounded-lg font-medium h-[120px] bg-white animate-pulse lg:h-[75px] "></div>
  );
};

export default ShortenedList;
