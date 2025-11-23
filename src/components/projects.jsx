import Card from "./cards/card"
import mernAI from "../assets/advanced-va.png"
import animPortfolio from "../assets/portfolio.png"
import incinx from "../assets/incinx.png"
import va from "../assets/va.png"
import weather from "../assets/weather-app.png"
import dimg from "../assets/Dictionary.jpg"
import cc from "../assets/currency-converter.png"
import rps from "../assets/rps-game.png"
import gsapAnim from "../assets/coffee.png"
import kisanSetu from "../assets/KisanSetu.userDashboard.png"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

useGSAP(()=>{
    gsap.from("#projects h1", { y: 100, 
      duration: 1, 
      opacity: 0, 
      scrollTrigger: {
        trigger: "#projects",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      }
    })
     gsap.from("#projects .card", {
    opacity: 0,
    y: 50,
    scale: 0.9,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#projects",
      start: "top 60%",
      end: "top 30%",
      scrub: 2,
    },
    ease: "power3.out",
  })
  })


  return (
   <section id="projects" className="min-h-screen w-full pt-20">
    <h1 className="md:text-8xl text-6xl text-center font-serif font-bold bg-linear-to-l from-pink-400 to-pink-600 text-transparent bg-clip-text">Projects</h1>
    <div className="flex flex-col justify-center items-center mt-30">
      <div className="card hide-scrollbar h-full md:w-[90%] w-[85%] flex items-center gap-5 bg-gray-200/10 shadow-lg backdrop-blur-xl border border-white/30 rounded-3xl py-8 px-8 overflow-x-scroll">
      <Card title={"Kisan Setu"} image={kisanSetu} 
      info={"A MERN-powered dual-dashboard platform connecting farmers and customers directly. Users can shop fresh groceries, while farmers manage inventory and sales in real time. Features include Razorpay integration, COD, secure auth, and a seamless farm-to-home buying flow without any middlemen."}
      TechStack={["ReactJS", "TailwindCSS", "MongoDB", "NodeJS", "ExpressJS", "Redux", "JWT", "Cloudinary"]}
      liveLink={"https://kisansetu-frontend-dj4j.onrender.com/"}/>
      <Card title={"Advanced Virtual Assistant"} image={mernAI}
      info={"An advanced AI-powered virtual assistant built with the MERN stack which can perform automates tasks, and delivers personalized responses in real-time and has a responsive frontend"}
      TechStack={["MongoDB" , "Express.JS", "React.JS", "Node.JS", "JWT Auth", "TailwindCSS", "REST API"]} />
      <Card title={"Animated Protfolio"} image={animPortfolio}
      info={"An immersive animated portfolio crafted with React and GSAP, brought to life with lightweight Lottie animations for a fluid and modern user experience."}
      TechStack={["HTML", "CSS", "JavaScript", "ReactJS", "GSAP", "LottieFiles", "Responsive Frontend"]}/>
      <Card title={"INCINX"} image={incinx}
      info={"INCINX is a production-based company portfolio built with React, featuring smooth GSAP animations and clean, component-driven UI using React Bits."}
      TechStack={["HTML", "TailwindCSS", "JavaScript", "ReactJS", "GSAP", "React Bits"]} liveLink={"https://sweet-tarsier-5841ee.netlify.app/"}  />
      <Card title={"Virtual Assistant"} image={va}
      info={"An AI-powered virtual assistant developed in React using Gemini API, offering seamless interaction and dynamic responses through a clean HTML/CSS interface."}
      TechStack={["React.IS", "Google Gemini API", "JavaScript (ES6+)", "CSS3", "Responsive Frontend"]}/>
      <Card title={"Weather App"} image={weather}
      info={"An interactive weather application that provides real-time temperature, wind stats, humidity, and visual weather icons based on the user’s searched location."}
      TechStack={["JavaScript (ES6+)", "Weather API", "Dynamic Icons", "Responsive Frontend"]}/>
      <Card title={"Dictionary App"} image={dimg}
      info={"A modern dictionary app featuring intuitive word lookup and seamless light/dark mode toggling for enhanced usability."} 
      TechStack={["HTML5","JavaScript (ES6+)", "CSS", "Flexbox"]}/>
      <Card title={"Currency Converter"} image={cc}
      info={"An interactive currency converter that displays live exchange rates for 160 countries along with their respective flags for a more visual experience."}
      TechStack={["HTML5", "CSS", "JavaScript (ES6+)", "Fetch API"]} />
      <Card title={"RPS Game"} image={rps} 
      info={"A fun and interactive Rock-Paper-Scissors game, where the player competes against a smart bot that randomly generates its moves in real time."}
      TechStack={["HTML5", "CSS", "JavaScript (ES6+)"]}/>
      <Card title={"GSAP Animated Website"} image={gsapAnim} 
      info={"A visually engaging Starbucks-themed website featuring smooth GSAP-powered scroll animations and dynamic coffee product showcases for an immersive browsing experience."}
      TechStack={["HTML5", "CSS", "JavaScript (ES6+)", "GSAP"]}/>
     </div>
    </div>
     
   </section>
  )
}

export default Projects
