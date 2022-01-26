import '../App.css'

import { Container } from 'react-bootstrap'
import NavBar from "./NavBar"
import bg from "../images/bg.jpg"
import wcr from "../images/wcr.png"
import rmc from "../images/rmc.png"
import arrowright from "../images/arrowright.png"

function Projects() {
  return (
    <Container style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="App">
      <NavBar />
      <br />
      <h2 class="white ogg large spacebelow">Projects</h2>

      <div className="img__wrap mx-auto">
        <a href="https://windycityrooftops.netlify.app/" target="_blank" rel="noreferrer">
          <img src={wcr} className="projects" alt='Windy City Rooftops' />
          <div className="img__description_layer">
            <h5 className="ogg medium spacebelow curve">Visit Website<span><img src={arrowright} className="arrowright" alt="right arrow" /></span></h5><br />
          </div>
        </a>
      </div><br /><br/>

      <div className="img__wrap mx-auto">
        <a href="https://ratemy-courses.herokuapp.com/" target="_blank" rel="noreferrer">
          <img src={rmc} className="projects" alt='RateMyCourses' />
          <div className="img__description_layer">
            <h5 className="ogg medium spacebelow curve">Visit Website<span><img src={arrowright} className="arrowright" alt="right arrow" /></span></h5><br />
          </div>
        </a>
      </div>

      <div className="spacer" />

    </Container>
  )
}

export default Projects