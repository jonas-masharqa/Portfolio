import React from 'react'
import LandingPage from './Components/LandingPage'
import Projects from './Components/Projects'
import CV from './Components/CV'
import AboutMe from './Components/AboutMe'
import Sidebar from './Components/Sidebar'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Sidebar />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/cv" component={CV} />
      <Route exact path="/about" component={AboutMe} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </>
  )
}

export default App
