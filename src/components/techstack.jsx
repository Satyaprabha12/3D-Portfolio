import { useGSAP } from "@gsap/react"
import { techStackIcons } from "./constants/index.js"
import TechIcon from "./techlogos/techIcon.jsx"
import gsap from "gsap"


const TechStack = () => {

   useGSAP(()=>{
    gsap.from("#skills p", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#skills p",
    scrub: 2,
    start: "top 60%",
    end: "top 30%",
  }
})
      gsap.from("#skills h1", { y: 100, 
      duration: 1, 
      opacity: 0, 
      scrollTrigger: {
        trigger: "#skills h1",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      }
    })
    gsap.fromTo(".tech-card",{
      y:50,
      opacity:0,
    },
      { y:0,
        opacity:1,
        duration:1,
        ease:"power2.inOut",
        stagger:0.2,
        scrollTrigger: {
        trigger: ".tech-card",
        scrub: 2,
        start: "top 60%", 
        end:"top 40%",
        toggleActions: "play none none none",
        }
      })
   })

  return (
    <div id="skills" className="flex-center w-full min-h-screen pt-20">
        <div className="mt-40 w-full h-full md:px-10 px-5">
            <p className="w-fit mx-auto px-2 py-0.5 text-sm border border-white/10 bg-white/10 text-center text-white font-serif rounded-2xl shadow-[0_0_5px_#ec4899]">🫱🏼‍🫲🏽 The Skills I bring to the Table</p>
            <h1 className="md:text-6xl text-2xl mt-3 text-center font-serif font-bold bg-linear-to-l from-white to-pink-600 text-transparent bg-clip-text">My Preferred Tech Stack</h1> 
        </div>
        <div className="tech-grid grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 xl:gap-16 md:gap-10 px-10 gap-5 mt-16">
          {techStackIcons.map((icon)=>(
            <div key={icon.name} className="tech-card text-white bg-pink-500/5 flex flex-col md:justify-center items-center xl:gap-5 xl:h-[50vh] relative z-10 group-hover:cursor-grab overflow-hidden group xl:rounded-full rounded-lg">
             <div className="absolute left-0 -bottom-full w-full h-full bg-linear-to-t from-[rgba(255,255,255,0.62)] to-[rgba(255,2,196,0.5)] group-hover:bottom-0 transition-all duration-700" />
             <div className="flex flex-col md:justify-center items-center xl:gap-5 xl:h-[50vh] overflow-hidden relative z-10 group-hover:cursor-grab">
                <div className="flex justify-center items-center w-52 h-60 relative">
                <TechIcon model={icon} />
                </div>
                <div className="p-x w-full">
                   <p className="text-lg 2xl:text-2xl pb-5 xl:pb-0 font-semibold text-white-50 text-center">{icon.name}</p> 
                </div>
                </div>
            </div>
          ))}
        </div>
      
    </div>
  )
}

export default TechStack
