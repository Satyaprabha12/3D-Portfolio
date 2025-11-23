import Navbar from "./components/navbar.jsx"
import Home from "./components/home.jsx"
import About from "./components/about.jsx"
import Projects from "./components/projects.jsx"
import Contact from "./components/contact.jsx"
import TechStack from "./components/techStack.jsx"
import Footer from "./components/footer.jsx"

const App = () => {
  return (
    <main>
    <Navbar /> 
    <Home />
    <About />
    <Projects />
    <TechStack />
    <Contact />
    <Footer />
    </main>
  )
}

export default App
