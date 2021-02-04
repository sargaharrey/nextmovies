import {useState,useEffect,useRef} from 'react'
import {FaSearch,FaTwitter,FaFacebookF} from 'react-icons/fa'
import Link from 'next/link';
import Image from 'next/image';



const Navbar = (props) => {
const toggle = () => props.apiv[4][1](!props.apiv[4][0]);
  return(
    
  
      <>
 <div className="navbar">   
   <div className="px-4 py-10 bg-purple-light flex justify-between	 h-100 items-center">
  
     <div className="right flex">
       <a className="brand mx-7 text-xlgc text-white font-bold"><span className="text-2xlgc">C</span>ima4us </a>
       <div className="nav-items flex items-center">
         <Link href='/'>
         <a className="px-8 py-2 mx-1 bg-purple-other3 text-lights-light5 rounded">Home</a>
         </Link>
           <Link href='/'>
         <a className="px-8 py-2 mx-1 bg-purple-other3 text-lights-light5 rounded">Movies</a>
         </Link>
           <Link href='/'>
         <a className="px-8 py-2 mx-1 bg-purple-other3 text-lights-light5 rounded">Series</a>
         </Link>
           <Link href='/'>
         <a className="px-8 py-2 mx-1 bg-purple-other3 text-lights-light5 rounded">Other</a>
         </Link>
           <Link href='/'>
         <a className="px-8 py-3 mx-1 bg-purple-other3 text-lights-light5 rounded flex items-center text-xsc">افلام ومسلسلات <span className="mr-5  flex items-center"><Image  src='/netflix.png' width="100px" height="20px" alt="netflix"/> </span></a>
         </Link>
           <Link href='/'>
         <a className="px-8 py-2 mx-1 bg-purple-other3 text-lights-light5 flex rounded"><span className="mx-2  flex items-center"><Image src="/star.png" width="23px" height="23px" alt="news" /></span> <span className="mx-2"> Stars Movies </span><span className="mx-2  flex items-center"> <Image  className="mx-2" src="/star.png" width="23px" height="23px" alt="news" /></span> </a>
         </Link>
         
       </div>
     </div>
        <div className="left flex">
         <a className="rounded-full cursor-pointer	 flex px-9 py-9  bg-purple-other">
             <FaFacebookF color={'#86689E'} />
         </a>
         <a className="rounded-full cursor-pointer	 flex px-9 py-9 mx-7 bg-purple-other">
             <FaTwitter color={'#86689E'} />
         </a>
          <a className="rounded-full cursor-pointer	 flex px-9 py-9 bg-purple-other" onClick={toggle}  >
             <FaSearch color={'#86689E'} />
         </a>

     </div>
  </div>
</div>

</>

)
}
 

export default Navbar