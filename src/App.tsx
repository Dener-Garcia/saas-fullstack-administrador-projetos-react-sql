import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'

import Container from './components/layouts/Container'

function App() {
  return (
<BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/company">Company</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/newproject">New Project</Link>
    </nav>
    <Container>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/company" element={<Company/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/newproject" element={<NewProject/>} /> 
      </Routes>
      </Container>
</BrowserRouter>
  )
}

export default App
