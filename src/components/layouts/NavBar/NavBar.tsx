import { Link } from 'react-router-dom'
import './module.css'

import logo from '../../../assets/costs_logo.png'
import Container from '../Container/Container'

const NavBar = () => {
    return(
        <nav>
        <Container >
            <Link to="/">
                <img src={logo} alt='logotipo' />
            </Link>
            <Link to="/">Home</Link>
            <Link to="/company">Company</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/newproject">New Project</Link>
        </Container>
      </nav>
    )
}

export default NavBar