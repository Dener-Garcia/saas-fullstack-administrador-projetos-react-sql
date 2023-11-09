import { Link } from 'react-router-dom'
import './module.css'

import logo from '../../../assets/costs_logo.png'
import Container from '../Container/Container'

const NavBar = () => {
    return(
        <nav className='nav-bar'>
        <Container >
            <Link to="/">
                <img src={logo} alt='logotipo' />
            </Link>
            <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/projects">Projetos</Link></li>
            <li><Link to="/company">Empresa</Link></li>
            <li><Link to="/contact">Contato</Link></li>
            </ul>
            
        </Container>
      </nav>
    )
}

export default NavBar