import { Link } from "react-scroll";
import { useRef,useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {

const menu = useRef(null);
const mobile = useRef(null);

useGSAP(() => {
let tl = gsap.timeline();
tl.from("nav h1", {
y: -100,
duration: 1,
opacity: 0,
ease: "power2.out",
});
tl.from(".desktop-menu li", {
y: -100,
duration: 1,
opacity: 0,
stagger: 0.2,
ease: "power2.out",
}, "<");
}, []);

const toggleMenu = () => {
mobile.current.classList.toggle("activemobile");
menu.current.classList.toggle("activeham");
}

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      mobile.current?.classList.remove("activemobile");
      menu.current?.classList.remove("activeham");
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


return (
<header className="fixed w-full top-0 left-0 z-50 bg-black/70 backdrop-blur-md">
<nav className="flex items-center justify-between px-6 py-4">
<h1 className="uppercase text-2xl font-bold bg-linear-to-l from-white to-pink-500 text-transparent bg-clip-text">
Portfolio
</h1>

<ul className="desktop-menu hidden md:flex gap-8 items-center">
{["home","about","projects", "skills","contact"].map((item) => (
<li key={item}>
<Link to={item} activeClass="font-semibold !text-pink-400" spy={true} smooth={true} duration={500}
className="text-[17px] uppercase text-white cursor-pointer hover:text-pink-400 hover:text-xl transition-all duration-300">
{item.charAt(0).toUpperCase() + item.slice(1)}
</Link>
</li>
))}
</ul>

<div className="md:hidden z-20 flex flex-col justify-between w-6 h-5 cursor-pointer"
ref={menu}
onClick={toggleMenu}
>
<span className="ham block w-full h-0.5 bg-white transition-all duration-300"></span>
<span className="ham block w-full h-0.5 bg-white transition-all duration-300"></span>
<span className="ham block w-full h-0.5 bg-white transition-all duration-300"></span>
</div>
<ul ref={mobile} className="mobilemenu md:hidden">
{["home", "about", "projects", "skills", "contact"].map((item) => (
<li key={item} className="text-white uppercase text-2xl z-10 flex justify-center">
<Link to={item} activeClass="font-semibold !text-pink-400" onClick={toggleMenu}>
{item.charAt(0).toUpperCase() + item.slice(1)}
</Link>
</li>
))}
</ul>
</nav>
</header>
)
}

export default Navbar;
