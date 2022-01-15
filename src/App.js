import './App.css'
import { Button, Row, Col, Container } from 'react-bootstrap'
import bg from "./images/bg.jpg"
import lexi from "./images/lexi.png"
import linkedin from "./images/linkedin.png"
import github from "./images/github.png"

function App() {
  return (
    <Container style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="App">
      <div class="spacer" />
      <div class="spacer" />
      <h2 class="white ogg medlarge spacebelow">Hey, I'm Alejandra</h2>
      <h6 class="white universextended small spacebelow">A FULL STACK ENGINEER WITH A PASSION FOR DESIGN.</h6>
      <Container>
        <img src={lexi} class="lexi" alt="Lexi" />
      </Container>
      <div class="spacer" />
      <Container style={{ maxWidth: '665px' }}>
        <Row>
          <Col>
            <Button id="aboutBtn">LEARN ABOUT ME</Button>
          </Col>
          <Col>
            <Button id="workBtn">CHECK OUT MY WORK</Button>
          </Col>
        </Row>
      </Container>
      <div class="spacer" />
      <h5 class="white ogg medium spaceabove spacebelow">Get In Touch</h5>
      <h6 class="contmargin universextended small white">If you're interested in working with me or just want to say hello, please feel free to email me or connect via my social links below!</h6>
      <a href="mailto:lexi.sandoval9@gmail.com">
        <Button id="emailBtn" class="spaceabove">SEND ME AN EMAIL</Button>
      </a>
      <br />

      <a href="https://www.linkedin.com/in/alejandramsandoval/" target="_blank" rel="noreferrer">
        <img src={linkedin} class="socials" alt="linkedin" />
      </a>
      <a href="https://github.com/lexisandoval" target="_blank" rel="noreferrer">

        <img src={github} class="socials" alt="github" />
      </a>

      <div class="spacer" />
      <div class="spacer" />

    </Container>
  )
}

export default App;
