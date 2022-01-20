import '../App.css'

import { Container, Col, Row } from 'react-bootstrap'
import NavBar from "./NavBar"
import bg from "../images/bg.jpg"
import book from "../images/book.jpg"
import show from "../images/show.jpg"
import arrow from "../images/arrow.png"

import Spotify from "react-spotify-embed"

function About() {
  return (
    <Container style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="App">
      <NavBar />
      <h2 class="white ogg large spacebelow">About Me</h2>
      <Container style={{ maxWidth: '850px' }}>
        <h4 class="white universcondensed small">Hello! My name is Alejandra Sandoval and I'm an associate full stack engineer at Cognizant. My interest in coding began in middle school when I developed a passion for customizing my MySpace and Tumblr profiles.</h4>
      </Container>
      <br />

      <Container style={{ maxWidth: '850px' }}>
        <h6 className="white ogg medium spacebelow">A Brief History</h6>
        <div className="backcont">
          <h6 class="contmargin universcondensed small white">University of Wisconsin-Madison</h6>
          <h6 className="contmargin universcondensed xsmall white">Graduated with a B.S. in Computer Sciences in Decemeber of 2020</h6>
        </div>
        <br />
        <img src={arrow} style={{ width: '5%' }} alt="arrow" />
        <br /><br />
        <div className="backcont">
          <h6 class="contmargin universcondensed small white">Flatiron School Software Engineering Bootcamp</h6>
          <h6 className="contmargin universcondensed xsmall white">Completed the Flatiron School Coding Bootcamp in May of 2021</h6>
        </div>
        <br />
        <img src={arrow} style={{ width: '5%' }} alt="arrow" />
        <br /><br />
        <div className="backcont">
          <h6 class="contmargin universcondensed small white">Cognizant</h6>
          <h6 className="contmargin universcondensed xsmall white">Currently working as an Associate Full Stack Engineer with the Enterprise Engineering Business Unit</h6>
        </div>
      </Container>
      <br />
      <Container className="aboutcont">
        <Row>
          <Col>
            <h6 className="white ogg medium spacebelow">My Go-To Playlist</h6>
            <Spotify style={{ width: '40vh', height: '55vh' }} className="spotify" link="https://open.spotify.com/playlist/4Lk6F0VLcBjBAqOUSlHWBF?si=8b917564289d4b9f" />
            <br />
          </Col>
          <Col>
            <h6 className="white ogg medium spacebelow">Currently Reading</h6>
            <img style={{ width: '40vh', height: '55vh' }} className="curveimg" src={book} alt="The Last Mrs. Parrish" />
            <br />
          </Col>
          <Col>
            <h6 className="white ogg medium spacebelow curve">Favorite Show</h6>
            <img style={{ width: '40vh', height: '55vh' }} className="curveimg" src={show} alt="Euphoria" />
            <br />
          </Col>
        </Row>
      </Container>
      <div class="spacer" />

    </Container>
  )
}

export default About