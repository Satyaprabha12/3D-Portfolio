import { Canvas } from "@react-three/fiber"
import StudioLights from "./three/studioLigths.jsx"
import clsx from "clsx"
import { Suspense, useRef, useEffect, useState } from "react"
import MacbookModel from "./models/Macbook.jsx"
import { useMediaQuery } from "react-responsive"
import { Html } from "@react-three/drei"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    id: 1,
    highlight: "EDUCATION",
    text: (<ul className="list-disc ml-5 ">
             <li><span className="text-pink-500 font-semibold">DEGREE: </span>Bachelor's of Science in Information Technology</li>
              <li><span className="text-pink-500 font-semibold">INSTITUTION: </span>Mumbai University</li>
              <li><span className="text-pink-500 font-semibold">YEAR OF PASSING: </span>2023</li>
    </ul>),
    top: "40%",
  },
  {
    id: 2,
    highlight: "experience",
    text: (<ul className="list-disc ml-5 ">
             <li><span className="text-pink-500 font-semibold uppercase">role: </span>Software Developer Intern</li>
              <li><span className="text-pink-500 font-semibold uppercase">duration: </span>1 YEAR</li>
              <li><span className="text-pink-500 font-semibold uppercase">key Responsibilities & Achievements: </span>
              <ul className="text-sm">Worked closely under senior developers to design, develop, and maintain web applications.,<br /> 
              Gained hands-on experience with JavaScript, React, HTML, CSS, and version control tools like Git.<br />
              Assisted in implementing features, fixing bugs, and participating in code reviews.</ul>
              </li>
    </ul>),
    top: "70%",
  },
  {
    id: 3,
    highlight: "SKILLS",
    text: (<ul className="list-disc ml-5 ">
              <li><span className="text-pink-500 font-semibold">Frontend:</span> React, HTML, CSS, JavaScript, TailwindCSS</li>
              <li><span className="text-pink-500 font-semibold">Backend:</span> Node.js, Express.js</li>
              <li><span className="text-pink-500 font-semibold">Database:</span> MongoDB, MySQL</li>
              <li><span className="text-pink-500 font-semibold">Tools:</span> Git, GitHub, VS Code</li>
    </ul>),
    top: "120%",
  },
]

const ModelScroll = () => {
  const groupRef = useRef()
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" })

  useGSAP(() => {
    if (!groupRef.current) return
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        pinSpacing:false,
      },
    })

    tl.to(groupRef.current.rotation, { y: Math.PI * 2, ease: "power1.inOut" })
    
  }, [])

  return (
    <group ref={groupRef}>
      <Suspense fallback={
          <Html center>
            <h1 className="text-white text-3xl uppercase">loading...</h1>
          </Html>}>
        <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  )
}

const About = () => {
  const [activeFeature, setActiveFeature] = useState(0)
  const featureRefs = useRef([])
  featureRefs.current = []


  useEffect(() => {
    let obj = { index: 0 }

    gsap.to(obj, {
      index: features.length - 1,
      ease: "none",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      onUpdate: () => {
        const newIndex = Math.round(obj.index)
        setActiveFeature(newIndex)
      },
    })
  }, [])

  useGSAP(()=>{
    gsap.from("#about h1", { 
      x: -100, 
      duration: 1, 
      opacity: 0, 
      scrollTrigger: {
        trigger: "#about h1",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      }
    })
     gsap.from(".info", { x: 100,
      scale:0.8, 
      duration: 1, 
      opacity: 0, 
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#about",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      }
    })


    
  featureRefs.current.forEach((el, index) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 80%", 
        end: "top 60%",   
        scrub: true,      
      }
    })
  })
  },[])
  


  return (
    <section id="about" className="w-full h-[200vh] relative mt-10 p-1">
      <h1 className="text-4xl font-serif absolute top-10 left-1/2 transform -translate-x-1/2 font-bold bg-linear-to-r from-pink-400 to-pink-700 text-transparent bg-clip-text mt-10 z-50">Education, Experience & Expertise</h1>

      <div className="w-full h-screen lg:h-dvh relative z-40">
        <Canvas id="canvas" className="w-full h-[80vh] lg:h-dvh relative z-40">
          <StudioLights />
          <ambientLight intensity={0.5} />
          <ModelScroll />
        </Canvas>

       <div className="info absolute inset-0 pointer-events-none">
          {features.map((feature, index) => (
            <div key={feature.id} ref={el => featureRefs.current[index] = el}
              className={clsx(
                "absolute max-w-xs p-4 text-white text-lg md:text-xl transition-all duration-500",
                index === activeFeature ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
              style={{
                top: feature.top,
                left: index % 2 === 0 ? "5%" : "auto",
                right: index % 2 !== 0 ? "5%" : "auto",}}>
              <h3 className="text-white text-xl md:text-3xl font-bold uppercase mb-2">{feature.highlight}</h3>
              <h4>{feature.text}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About
