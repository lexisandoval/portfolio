import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'

import NavBar from "./NavBar"
import Footer from "./Footer"
import bg from "../images/bg.jpg"
import wcr from "../images/wcr.png"
import rmc from "../images/rmc.png"
import lexislocker from "../images/lexislocker.png"

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  return (
    <Container style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="App">
      <NavBar />
      <div className="smspacer" />
      <h2 class="white ogg large spacebelow">Projects</h2>
      <Container className="max500">
        <h6 className="white universcondensed small spacebelow">DEVELOPED DURING THE FLATIRON SCHOOL BOOTCAMP AND TRAINING WITH COGNIZANT.</h6>
      </Container>
      <div className="smmobilespacer" />

      <Container className="spaceabove max800">
        <h6 className="white ogg medium smallspacebelow">Lexi's Locker</h6>
        <h6 className="white universcondensed small">Discover unique secondhand items that are sure to make you stand out from the crowd. Shop sustainably, shop the Locker!</h6><br />
        <div className="img__wrap mx-auto">
          <img src={lexislocker} className="projects" alt='Lexis Locker' />
          <div className="img__description_layer">
            <h6 className="horizontalspacer universcondensed small white">Built using React, Spring Boot, Bootstrap, MySQL, Git, and AWS</h6>
          </div>
        </div><br />
        <a href="https://lexislocker.netlify.app" target="_blank" rel="noreferrer" className="nounderline">
          <Button id="websiteBtn" className="spaceabove spacebelow">VISIT WEBSITE</Button>
        </a>
      </Container>
      <div className="spacer mobilespacer" />

      <Container className="spaceabove max800">
        <h6 className="white ogg medium smallspacebelow">Windy City Rooftops</h6>
        <h6 className="white universcondensed small">We've compiled a list of Chicago's best rooftop bars and restaurants so you can start planning your next visit. Cheers to the Windy City!</h6><br />
        <div className="img__wrap mx-auto">
          <img src={wcr} className="projects" alt='Windy City Rooftops' />
          <div className="img__description_layer">
            <h6 className="horizontalspacer universcondensed small white">Built using JavaScript, HTML, CSS, Ruby on Rails, and Git</h6>
          </div>
        </div><br />
        <a href="https://windycityrooftops.netlify.app/" target="_blank" rel="noreferrer" className="nounderline">
          <Button id="websiteBtn" className="spaceabove spacebelow">VISIT WEBSITE</Button>
        </a>
      </Container>
      <div className="spacer mobilespacer" />

      <Container className="max800">
        <h6 className="white ogg medium smallspacebelow">RateMyCourses</h6>
        <h6 className="white universcondensed small">Rate, review, and rave about courses at UW-Madison. We're your trusted source for honest opinions from hundreds of students just like you!</h6><br />
        <div className="img__wrap mx-auto">
          <img src={rmc} className="projects" alt='RateMyCourses' />
          <div className="img__description_layer">
            <h6 className="horizontalspacer universcondensed small white">Built using Ruby on Rails, SQLite, Git, and MVC architecture</h6>
          </div>
        </div><br />
        <a href="https://ratemy-courses.herokuapp.com/" target="_blank" rel="noreferrer" className="nounderline">
          <Button id="websiteBtn" className="spaceabove spacebelow">VISIT WEBSITE</Button>
        </a>
      </Container>
      <br />

      <div className="smmobilespacer" />
      <Footer />
    </Container>
  )
}

export default Projects