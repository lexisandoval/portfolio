import './App.css';
import './fonts/Magilio.ttf';
import { Container } from 'react-bootstrap';
import background from "./images/background.jpg"

function App() {
  return (
    <div style={{backgroundImage: `url(${background})`}} className="App">
        <Container class="largespaceabove">
          <h1 id="logo">AS</h1>
        </Container>
        <h5 id="test">
          Welcome to my portfolio
        </h5>
        <h1 id="heading">Alejandra Sandoval</h1>
    </div>
  );
}

export default App;
