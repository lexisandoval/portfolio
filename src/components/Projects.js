import '../App.css'

import { Container } from 'react-bootstrap'
import NavBar from "./NavBar"
import bg from "../images/bg.jpg"

function Projects() {
  return (
    <Container style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="App">
      <NavBar />
      <h2 class="white ogg large spacebelow">Projects</h2>
    </Container>
  )
}

export default Projects