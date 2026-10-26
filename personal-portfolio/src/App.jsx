
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
function App() {
  const aboutData={
    bio:'iam self-tought fronted developer passionate about building interactive web apps...',
    resumeUrl:'my resume.pdf'
  }
  const projectsData=[
    {
      id:1,title:'githubfinder',description:'search github profile using api',
      link:'https://github.com/khalidaden-chat/github-finder'
    },
    {
      id:1, title:'ecommerce-site',description:'fake store built with react',
      link:'https://github.com/khalidaden-chat/ecommerce-store'
    }
  ]

  return (
    <>
     <NavBar/>
     <Hero/>
     <About  aboutINFO={aboutData} />
     <Projects projectsData={projectsData}/>
     <Contacts/>
    </>
  )
}

export default App
