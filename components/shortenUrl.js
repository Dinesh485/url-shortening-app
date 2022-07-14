
import { useState } from "react";

const ShortenUrl = ({setlinkstoshort,error,setError}) => {
  const [url, setUrl] = useState('');
  const handleSubmit = async(e) =>{
    e.preventDefault()
     if(!url){
       return setError('please add a link')
     }
    
    
      
        
         setlinkstoshort(state => [...state, url])
         setError(null)
    
     
  }
    return ( 
        
            <form onSubmit={(e) => handleSubmit(e)} className="bg-right-top bg-no-repeat bg-Dark-Violet bg-[url('/images/bg-shorten-mobile.svg')] p-6 rounded-lg flex flex-col  gap-4 w-full absolute top-0 -translate-y-1/2 md:flex-row md:items-center md:p-10 lg:bg-[url('/images/bg-shorten-desktop.svg')] lg:bg-cover  lg:px-14 lg:h-[150px]">
              <div className="w-full relative">
              <input onChange = {(e) => setUrl(e.target.value)} value = {url} type="text" className={`bg-white w-full p-3 rounded outline-none  border-none mb-2 md:m-0 ${error && 'ring-Red ring-[3px]'}`} placeholder="Shorten link here"/>
              {error && <p className="text-Red text-xs font-light md:absolute md:mt-2">{error}</p>}
              </div>
               <button className="btn font-bold text-lg rounded-md py-3 ">Shorten it!</button>
            </form>
           
        
     );
}
 
export default ShortenUrl;