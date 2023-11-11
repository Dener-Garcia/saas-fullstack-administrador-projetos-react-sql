import ProjectForm from '../projects/Project-form/ProjectForm'
import styles from './new-project.module.css'

const NewProject = () => {
    return(
        <div className={styles.new_projects}>
            <h1>Criar um novo projeto</h1>
            <p>Crie seu projeto e comece a gerenciar seus custos.</p>
            <ProjectForm btnType="Criar Projeto" /> 
        </div>
    )
}
export default NewProject