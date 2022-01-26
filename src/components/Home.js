import '../App.css'

import { Button, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import bg from "../images/bg.jpg"
import lexi from "../images/lexi.png"
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"

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

      <h5 className="white ogg medium spaceabove spacebelow">Get In Touch</h5>
      <Container className="max1000">
        <h6 className="contmargin universcondensed small white spacebelow">If you're interested in working with me or just want to say hello, please feel free to email me or connect via my social links below!</h6>
      </Container>
      <br/>
      <a href="mailto:lexi.sandoval9@gmail.com" className="nounderline">
        <Button id="emailBtn" className="spaceabove">SEND ME AN EMAIL</Button>
      </a>
      <br />
      <a href="https://www.linkedin.com/in/alejandramsandoval/" target="_blank" rel="noreferrer">
        <img src={linkedin} className="socials" alt="linkedin" />
      </a>
      <a href="https://github.com/lexisandoval" target="_blank" rel="noreferrer">
        <img src={github} className="socials" alt="github" />
      </a>

      <div className="footer">
        <a className="whitelink" href="https://github.com/lexisandoval/portfolio" target="_blank" rel="noreferrer">Designed & Built by Alejandra Sandoval</a>
      </div>
      <div className="spacer" />
    </Container>
  )
}

export default Home;