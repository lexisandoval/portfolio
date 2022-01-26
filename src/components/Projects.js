import '../App.css'

import { Container, Button } from 'react-bootstrap'
import NavBar from "./NavBar"
import bg from "../images/bg.jpg"
import wcr from "../images/wcr.png"
import rmc from "../images/rmc.png"

function Projects() {
  return (
    <Container style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="App">
      <NavBar />
      <br />
      <h2 class="white ogg large spacebelow">Projects</h2>

      <h6 className="white ogg medium smallspacebelow">Windy City Rooftops</h6>
      <div className="img__wrap mx-auto">
        <img src={wcr} className="projects" alt='Windy City Rooftops' />
        <div className="img__description_layer">
          <h6 className="contmargin universcondensed small white">Built with Javascript for frontend and Ruby on Rails for backend</h6>
        </div>
      </div><br />
      <a href="https://windycityrooftops.netlify.app/" target="_blank" rel="noreferrer" className="nounderline">
        <Button id="emailBtn" className="spaceabove spacebelow">VISIT WEBSITE</Button>
      </a>
      <div className="spacer" />

      <h6 className="white ogg medium smallspacebelow">RateMyCourses</h6>
      <div className="img__wrap mx-auto">
      <img src={rmc} className="projects" alt='RateMyCourses' />
        <div className="img__description_layer">
          <h6 className="contmargin universcondensed small white">Built with Ruby on Rails for both frontend and backend</h6>
        </div>
      </div><br />
      <a href="https://ratemy-courses.herokuapp.com/" target="_blank" rel="noreferrer" className="nounderline">
        <Button id="emailBtn" className="spaceabove spacebelow">VISIT WEBSITE</Button>
      </a>
      <div className="spacer" />

      <div className="footer">
        <a className="whitelink" href="https://github.com/lexisandoval/portfolio" target="_blank" rel="noreferrer">Designed & Built by Alejandra Sandoval</a>
      </div>
      <div className="spacer" />

    </Container>
  )
}

export default Projects