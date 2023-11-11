import ButtonForm from '../../Form-components/button/ButtonForm'
import Input from '../../Form-components/input/Input'
import Select from '../../Form-components/select/Select'
import styles from './projectForm.module.css'

interface BtnProps{
    btnType: 'button' | 'submit' | 'reset';
}

const ProjectForm: React.FC<BtnProps> = ({btnType}) => {
    return(
       <div className={styles.container}>
        <Input name='name' type='text' text='Projeto'  placeholder='Insira o nome do projeto' />
        <Input name='budget' type='number' text='Orçamento'  placeholder='Insira seu orçamento disponivel' />
        <Select name={"category_id"} text='Selecione uma categoria' />
        <ButtonForm text='Criar Projeto' type={btnType} />
       </div>
    )
}

export default ProjectForm