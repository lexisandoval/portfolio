import '../App.css'

import { Button, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Footer from "./Footer"
import bg from "../images/bg.jpg"
import lexi from "../images/lexi.png"

function Home() {
  return (
    <Container style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="App">
      <div className="spacer" />
      <div className="spacer" />
      <h2 className="white ogg large spacebelow">Hey, I'm Alejandra</h2>
      <h6 className="white universcondensed small spacebelow">A FULL STACK ENGINEER<span><br /></span> WITH A PASSION FOR DESIGN.</h6>

      <Container>
        <img src={lexi} className="lexi" alt="Lexi" />
      </Container>

      <br /><br/>
      <Container style={{ maxWidth: '625px' }}>
        <Row>
          <Col>
            <Button as={Link} to={'/aboutme'} id="aboutBtn" className="spaceabove">LEARN ABOUT ME</Button>
          </Col>
          <Col>
            <Button as={Link} to={'/projects'} id="workBtn">CHECK OUT MY WORK</Button>
          </Col>
        </Row>
      </Container>
      <br/>

      <Footer/>
    </Container>
  )
}

export default Home;