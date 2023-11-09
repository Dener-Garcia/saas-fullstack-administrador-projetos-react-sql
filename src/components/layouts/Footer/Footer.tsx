import "./module.css"
import { FaYoutube, FaInstagram, FaLinkedin} from 'react-icons/fa'
import logo from '../../../assets/costs_logo.png'

const Footer = () => {
    return(
        
        <footer>
            <div className="social">
                <img src={logo} />
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/denergarcia/" target="blank"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/dener.criarbr" target="_blank"><FaInstagram /></a>
                    <a href="https://www.youtube.com/@dener.criarbr" target="_blank"><FaYoutube /></a>
                </div>
            </div>
            <h6>Feito por <a href="https://dener.criarbr.com">Dener Garcia</a> &copy;</h6>
        </footer>
    )
}

export default Footer