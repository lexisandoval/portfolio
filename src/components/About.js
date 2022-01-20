import '../App.css'

import { Container, Col, Row } from 'react-bootstrap'
import NavBar from "./NavBar"
import bg from "../images/bg.jpg"
import book from "../images/book.jpg"
import show from "../images/show.jpg"

import Spotify from "react-spotify-embed"


function About() {
  return (
    <Container style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="App">
      <NavBar />
      <h2 class="white ogg large spacebelow">About Me</h2>
      <Container style={{ maxWidth: '850px' }}>
        <h4 class="white universcondensed small">Hello! My name is Alejandra Sandoval and I'm an associate full stack engineer at Cognizant.</h4>
      </Container>
      <br />
      <Container className="backcont">
        <Row>
          <Col>
            <h6 className="white ogg medium spacebelow">My Go-To Playlist</h6>
            <Spotify style={{width: '35vh', height: '50vh'}} className="spotify spaceabove spacebelow curve" link="https://open.spotify.com/playlist/4Lk6F0VLcBjBAqOUSlHWBF?si=8b917564289d4b9f" />
            <br/>
          </Col>
          <Col>
            <h6 className="white ogg medium spacebelow">Currently Reading</h6>
            <img style={{width: '35vh', height: '50vh'}} className="spaceabove spacebelow curve" src={book} alt="The Last Mrs. Parrish" />
            <br/>
          </Col>
          <Col>
            <h6 className="white ogg medium spacebelow curve">Favorite Show</h6>
            <img style={{width: '35vh', height: '50vh'}} className="spaceabove spacebelow curve" src={show} alt="Euphoria" />
            <br/>
          </Col>
        </Row>
      </Container>
      <div class="spacer" />

    </Container>
  )
}

export default About