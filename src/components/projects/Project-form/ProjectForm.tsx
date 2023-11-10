import styles from './module.css'

const ProjectForm = () => {
    return(
       <form>
        <div className="inputs">
        <input type='text' placeholder='Qual nome do projeto' />
        </div>
        <div className="inputs">
        <input type='number' placeholder='Qual seu orçamento para o projeto?' />
        </div>
        <div className="inputs">
        <select name='category_id'>
            <otpion disabled>Selecione a categoria</otpion>
            </select>
        </div>
        <button type='submit'>Criar Projeto</button>
       </form>
    )
}

export default ProjectForm