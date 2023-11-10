import './home-module.css'
import savings from '../../assets/savings.svg'
import LinkButton from '../layouts/LinkButton/LinkButton'

const Home = () => {
    return(
        <section className='home-container'>
        <h1>Bem vindo ao <span>Costs</span></h1>
        <p>Comece a gerenciar seus projetos agora mesmo!</p>
        <LinkButton linkTitle='Criar Projeto' path='/newproject' />
        <img src={savings} alt="Costs" />
        </section>
    )
}
export default Home