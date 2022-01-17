import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"

function App() {
  return (

    <Router>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/aboutme' element={<About/>} />
            <Route exact path='/projects' element={<Projects/>} />
          </Routes>
        </div>
      </Router>
  )
}

export default App;
