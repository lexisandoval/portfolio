import '../App.css'

import { Container } from 'react-bootstrap'
import NavBar from "./NavBar"
import bg from "../images/bg.jpg"

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
        <h6 className="white ogg medium spacebelow">My go-to playlists at the moment</h6>
        <Spotify className="spotify" link="https://open.spotify.com/playlist/4Lk6F0VLcBjBAqOUSlHWBF?si=8b917564289d4b9f" />

        <Spotify className="spotify" link="https://open.spotify.com/playlist/2vKdhSVr8c3TvEqZ1hPDJE?si=5c3b319e54da4bc1" />
      </Container>
      <div class="spacer" />

    </Container>
  )
}

export default About