
import { useEffect } from 'react'
import ProjectForm from '../projects/Project-form/ProjectForm'
import styles from './new-project.module.css'
import createPostProject from '../../api/createPostProject'

const NewProject = () => {

    const project = {}

useEffect(() => {

    createPostProject("POST", project)
    .then((res) => {
    })
    .catch((err) => console.log(err, "falha ao criar um projeto"))
},[])

    return(
        <div className={styles.new_projects}>
            <h1>Criar um novo projeto</h1>
            <p>Crie seu projeto e comece a gerenciar seus custos.</p>
            <ProjectForm handleSubmit={createPostProject} text="Criar Projeto" btnType="submit"  /> 
        </div>
    )
}
export default NewProject