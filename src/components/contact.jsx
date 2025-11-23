import arrDown from "../assets/arrow-down.svg"
import ContactModel from "./models/contacts/contactModel"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
useGSAP(()=>{
  gsap.from("#contact h1", { y: 100, 
      duration: 1, 
      opacity: 0, 
      scrollTrigger: {
        trigger: "#contact h1",
        scrub: 2,
        start: "top 90%", 
        toggleActions: "play none none none",
      }
    })
    gsap.from("#model-wrapper", { x: -100, 
      duration: 1, 
      opacity: 0, 
      stagger: 1,
      scrollTrigger: {
        trigger: "#model-wrapper",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      }
    })
    gsap.from(".form", { x: 100, 
      duration: 1, 
      opacity: 0, 
      stagger: 1,
      scrollTrigger: {
        trigger: ".form",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      }
    })
  })
  

  return (
    <div id="contact" className="min-h-screen w-full pt-1">
      <div className="mt-20 w-full h-full">
        <h1 className="md:text-6xl text-2xl mt-3 text-center font-serif font-bold bg-linear-to-l from-white to-pink-600 text-transparent bg-clip-text">Get in Touch!</h1>
      </div>
      <div className="flex flex-col md:flex-row w-full mt-10 gap-4 px-5 md:px-10">
        <div id="3d-model" className="order-2 md:order-1 md:w-[65%] w-full min-h-96 mt-6 md:mt-0">
        <div id="model-wrapper" className="w-full h-[520px] bg-pink-500/10 hover:cursor-grab rounded-3xl overflow-hidden mt-10">
         <ContactModel modelPath="/models/gaming_desktop_pc.glb" />
        </div>
        </div>
        <div className="form order-1 md:order-2 md:w-[45%] w-full h-full p-10 mt-10 bg-pink-500/5 rounded-2xl">
        <p className="w-fit mx-auto px-2 py-0.5 text-2xl text-center text-white font-serif mt-1">Have questions or Ideas? Let's Talk</p>
          <form action="https://formspree.io/f/mvgbpywb" method="POST" className="w-full max-w-xl mt-10">
            <div className="mb-8 flex flex-col">
              <label htmlFor="name" className="text-white text-2xl font-bold font-serif mb-1">
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="bg-transparent border-b border-white/40 focus:border-pink-500 outline-none text-white py-1 placeholder:text-white/30 transition-all w-full mt-2" />
            </div>

            <div className="mb-8 flex flex-col">
              <label htmlFor="email" className="text-white text-2xl font-bold font-serif mb-1">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="What's your email address?"                required
                className="bg-transparent border-b border-white/40 focus:border-pink-500 outline-none text-white py-1 placeholder:text-white/30 transition-all w-full mt-2"/>
            </div>

            <div className="mb-8 flex flex-col">
              <label htmlFor="message" className="text-white text-2xl font-bold font-serif mb-1">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className="bg-transparent border-b border-white/40 focus:border-pink-500 outline-none text-white placeholder:text-white/30 transition-all w-full mt-2" />
            </div>

           <button type="submit" className="relative w-full z-20 cursor-pointer group">
  <div
    className="
      px-4 py-4 rounded-lg bg-pink-500
      flex justify-center items-center 
      relative cursor-pointer overflow-hidden
    "
  >
    <div
      className="
        absolute -right-10 top-1/2 -translate-y-1/2 
        w-[120%] h-[120%] 
        origin-center rounded-full bg-white/10
        transition-all duration-500 
        group-hover:size-10 group-hover:right-10
      "
    />

    <p
      className="
        uppercase md:text-lg text-white
        transition-all duration-500
        -translate-x-5 xl:translate-x-0 
        group-hover:text-black group-hover:-translate-x-5
      "
    >
      Send Message
    </p>
    <div
      className="
        size-10 rounded-full absolute right-10 top-1/2 
        -translate-y-1/2 flex justify-center items-center 
        overflow-hidden transition-all duration-500
        group-hover:bg-white/50
      "
    >
      <img
        src={arrDown}
        alt="arrow"
        className="
          size-5
          translate-y-0 xl:-translate-y-32 
          animate-bounce 
          transition-all duration-500
          group-hover:translate-y-0
        "
      />
    </div>
  </div>
</button>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact
