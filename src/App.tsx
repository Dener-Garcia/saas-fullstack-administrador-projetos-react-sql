import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import Container from './components/layouts/Container/Container'
import NavBar from './components/layouts/NavBar/NavBar'
import Footer from './components/layouts/Footer/Footer'



function App() {
  return (
<BrowserRouter>
    <NavBar />
    <Container customClass="min-height">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/company" element={<Company/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/newproject" element={<NewProject/>} /> 
      </Routes>
      </Container>
      <Footer />
</BrowserRouter>
  )
}

export default App
