import './module.css'
import savings from '../../assets/savings.svg'

const Home = () => {
    return(
        <section className='home-container'>
        <h1>Bem vindo ao <span>Costs</span></h1>
        <p>Comece a gerenciar seus projetos agora mesmo!</p>
        <a href='/newprojects'>Criar Projeto</a>
        <img src={savings} alt="Costs" />
        </section>
    )
}
export default Home