import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Mail, FileDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useGSAP } from "@gsap/react";




const roles = ["A Web Developer", "Frontend Developer", "MERN Stack Developer"];

const Home = () => {

  const textRef = useRef(null)

  useEffect(()=>{
    let idx = 0
    const interval = setInterval(()=>{
      idx = (idx + 1) % roles.length
      gsap.to(textRef.current,{
        opacity:0,
        y:-20,
        duration:0.4,
        delay:1,
        onComplete:()=>{
          textRef.current.innerText = roles[idx]
          gsap.fromTo(
            textRef.current,
            {y: 20, opacity:0},
            {y:0, opacity:1, duration:0.4}
          )
        }
      })
    },2000)

  return () => clearInterval(interval);
  }, []);

   useGSAP(()=>{
  let tl = gsap.timeline()

  tl.from(".line1",{ 
    y: 60,
    duration: 1,
    opacity: 0, 
    ease: "power3.out"
  })
  .from(".line2",{ 
    y: 60,
    duration: 1,
    opacity: 0,
    ease: "power3.out"
  })
  .from(".line3", { 
    y: 40,
    scale: 0.8,
    opacity: 0,     
    duration: 1,
  })
})
useGSAP(() => {
  gsap.from(".footer-anim", {
    x: -90,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  })
})
useGSAP(() => {
  gsap.from(".footer-icon", {
    x: 90,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.1 
  });
});

  return (
    <section id="home" className="h-screen w-full flex flex-col justify-between">
  <div className="flex flex-col items-center justify-center flex-1 gap-4 sm:text-left">
    <h1 className="line1 text-xl sm:text-2xl text-white">Hello!</h1>
    <span className="line2 relative z-20 text-white text-4xl sm:text-6xl font-serif">I'm Satyaprabha Yadav</span>
    <span ref={textRef} className="line3 text-pink-400 font-semibold text-2xl sm:text-4xl z-20 relative">
      {roles[0]}
    </span>
    <video className="absolute top-[487px] sm:top-[380px] w-[300px] sm:w-auto max-w-full h-auto z-10" src="/videos/hero.mp4" autoPlay muted playsInline />
  </div>

  <footer className=" w-full flex flex-col sm:flex-row items-center justify-between px-6 sm:px-6 py-4 z-20 gap-4 sm:gap-0">
    <div className="footer-anim flex flex-row items-center justify-between sm:justify-start gap-3 sm:gap-5 w-full sm:w-auto relative -top-2 sm:top-0">
      <button type="button" className="flex items-center gap-1 text-white font-medium shadow-pink-400/50 hover:gap-2 hover:text-pink-400 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-pink-400/50 cursor-pointer"
      onClick={()=>{
        window.location.href ="mailto:satyaprabha747@gmail.com"
      }}>
        Hire Me <Mail size={18} />
      </button>
      <a href="/Satyaprabha-Yadav-Resume.pdf" download="Satyaprabha-Yadav-Resume.pdf" className="flex items-center gap-1 text-white font-medium shadow-pink-400/50 hover:gap-2 hover:text-pink-400 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-pink-400/50">
        Download CV <FileDown size={20} />
      </a>
    </div>

    <div className="footer-icon hidden sm:flex flex-nowrap items-center gap-4 text-white text-2xl justify-end w-auto">
      <a href="https://github.com/Satyaprabha12" target="_blank" rel="noopener noreferrer"
      className="hover:text-purple-400 hover:scale-125 transition-all duration-300">
      <FaGithub /></a>
      <a href="https://www.linkedin.com/in/satyaprabha-yadav-8a7054306/" target="_blank" rel="noopener noreferrer"
      className="hover:text-[#0077B5] hover:scale-125 transition-all duration-300">
      <FaLinkedin /></a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
      className="relative group w-8 h-8">
      <FaInstagram className="relative w-full h-full z-20 group-hover:text-white hover:scale-110 transition-all duration-300" />
      <span className="absolute inset-0 bg-linear-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] opacity-0 group-hover:opacity-100 rounded-md hover:scale-110 transition-all duration-300"></span>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
      className="text-3xl hover:text-[#1DA1F2] hover:scale-125 transition-all duration-300">
      <FaTwitter /></a>
    </div>
  </footer>
</section>

  )
}

export default Home
