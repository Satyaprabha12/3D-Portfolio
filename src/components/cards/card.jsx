import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)


const Card = ({title, image, info, TechStack, liveLink})=> {

  const [showOverlay, setShowOverlay] = useState(false)


  return (
   <div className="shrink-0 flex flex-col md:w-[400px] w-[300px] h-[500px] text-base font-medium text-[(--clr-text)] bg-[rgba(236,149,200,0.2)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-[10px] pt-4 px-4 pb-0
   hover:scale-105 cursor-pointer hover:shadow-[2px_2px_20px_black] transition-shadow ease-in-out">
     <div className="card relative group w-full max-w-[400px] h-56 overflow-hidden aspect-4/3"
     onClick={()=> setShowOverlay(!showOverlay)}>
        <img src={image} className="w-full h-full object-cover"/>
        <div className={`absolute bottom-0 w-full h-full translate-y-full transition-all duration-500 ease-in-out flex items-center justify-center backdrop-blur-[7px] bg-linear-to-t from-[rgba(255,0,208,0.619)] to-[rgba(0,0,0,0.5)] group-hover:translate-y-0 ${showOverlay?"translate-y-0": ""}`}>
        <li><a href={liveLink} target="_blank" rel="noopener noreferrer"
        className="text-md sm:text-lg underline hover:opacity-80">Live</a></li>
     </div> 
     </div>
     <div className="text-center text-2xl text-white mt-8">{title}</div>
     <div className="text-center text-sm text-gray-400 mt-3">{info}</div>
     <div className="flex gap-2 mt-3 items-center justify-center flex-wrap">
        {TechStack?.map((tech, index) => (
          <span key={index} className="px-3 py-1 mt-2 text-sm font-medium bg-white/10 text-pink-400 rounded-lg">
            {tech}
          </span>
        ))}
      </div>
</div>
  )
}


export default Card
