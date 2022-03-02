import '../App.css'

import { Container, Button } from 'react-bootstrap'

import linkedin from "../images/linkedin.png"
import github from "../images/github.png"

function Footer() {
  return (
    <>
      <Container className="spaceabove largespacebelow max800">
        <h6 className="white ogg medium spacebelow">Get In Touch</h6>
        <h6 className="mx-auto universcondensed small white footer">If you're interested in working with me or just want to say hello, please feel free to email me or connect via my social links below!</h6>
      </Container>
      <div className="topmobilespacer"/>
      <a href="mailto:lexi.sandoval9@gmail.com" className="nounderline">
        <Button id="emailBtn">SEND ME AN EMAIL</Button>
      </a>
      <br />
      <a href="https://www.linkedin.com/in/alejandramsandoval/" target="_blank" rel="noreferrer">
        <img src={linkedin} className="socials" alt="linkedin" />
      </a>
      <a href="https://github.com/lexisandoval" target="_blank" rel="noreferrer">
        <img src={github} className="socials" alt="github" />
      </a>

      <div className="mx-auto">
        <a style={{paddingRight: '1%'}} className="whitelink universcondensed" href="https://github.com/lexisandoval/portfolio" target="_blank" rel="noreferrer">Designed & Built by Alejandra Sandoval</a>
      </div>
      <div className="spacer" />
    </>
  )
}

export default Footer