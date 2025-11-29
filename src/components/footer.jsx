import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const footer = () => {

 useGSAP(()=>{
    gsap.from(".footer-anim2",{
        y:30,
        opacity: 0,
        duration: 1,
        ease: "power3.out", 
    })
 })

    return (
        <footer className="footer-anim2 w-full p-4 bg-pink-500/10 rounded-t-2xl shadow-lg bottom-0 left-0">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <div className="order-1 flex flex-nowrap items-center gap-4 text-white text-2xl justify-end sm:justify-end w-auto mb-4 sm:mb-0">
                    <a href="https://github.com/Satyaprabha12" target="_blank" rel="noopener noreferrer"
                        className="text-pink-500 hover:text-purple-400 hover:scale-125 transition-all duration-300">
                        <FaGithub /></a>
                    <a href="https://www.linkedin.com/in/satyaprabha-yadav-8a7054306/" target="_blank" rel="noopener noreferrer"
                        className="text-pink-500 hover:text-[#0077B5] hover:scale-125 transition-all duration-300">
                        <FaLinkedin /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                        className="relative group w-8 h-8">
                        <FaInstagram className="relative w-full h-full z-20 text-pink-500 group-hover:text-white hover:scale-110 transition-all duration-300" />
                        <span className="absolute inset-0 bg-linear-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] opacity-0 group-hover:opacity-100 rounded-md hover:scale-110 transition-all duration-300"></span>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                        className=" text-pink-500 text-3xl hover:text-[#1DA1F2] hover:scale-125 transition-all duration-300">
                        <FaTwitter /></a>
                </div>

                <div className="order-3 sm:order-2 flex justify-center">
                    <p className="text-center text-white">
                        © {new Date().getFullYear()} Satyaprabha Yadav | All rights reserved.
                    </p>
                </div>


                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="order-2 sm:order-3 relative w-[40%] sm:w-[15%]  z-20 cursor-pointer group"
                >

                    <div
                        className="
      px-4 py-4 rounded-full bg-pink-500
      flex justify-center items-center 
      relative cursor-pointer overflow-hidden
    "
                    >
                        <div
                            className="
        absolute top-1/2 -translate-y-1/2 
        w-[120%] h-[120%] 
        origin-center rounded-full bg-white/10
        transition-all duration-500 
        group-hover:size-10 group-hover:right-5
      "
                        />

                        <p
                            className="
        uppercase md:text-lg text-sm text-white
        transition-all duration-500
        -translate-x-5 xl:translate-x-0 
        group-hover:text-black group-hover:-translate-x-5
      "
                        >
                            BACK TO Top
                        </p>
                        <div
                            className="
        size-10 rounded-full absolute right-5 top-1/2 
        -translate-y-1/2 flex justify-center items-center 
        overflow-hidden transition-all duration-500
        group-hover:bg-white/50
      "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="currentColor" viewBox="0 0 24 24"
                                className="
          size-5 md:right-0 right-2
          translate-y-0 xl:-translate-y-32 
          animate-bounce 
          transition-all duration-500
          group-hover:translate-y-0
        "
                            >
                                <path d="M12 4l-8 8h6v8h4v-8h6z" />
                            </svg>
                        </div>
                    </div>

                </button>
            </div>
        </footer>
    )
}

export default footer




