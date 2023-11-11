import { useEffect, useState } from 'react';
import ButtonForm from '../../Form-components/button/ButtonForm'
import Input from '../../Form-components/input/Input'
import Select from '../../Form-components/select/Select'
import styles from './projectForm.module.css'

interface BtnProps{
    btnType: 'button' | 'submit' | 'reset';
}

const ProjectForm: React.FC<BtnProps> = ({btnType}) => {

const [categories, setCategories] = useState([])

useEffect(() => {
    fetch("http:192.168.1.44:5000/categories", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((data) => {
            setCategories(data)
            console.log(data)
        })
        .catch((error) => console.log(error))
},[])



    return(
       <div className={styles.container}>
        <Input name='name' type='text' text='Projeto'  placeholder='Insira o nome do projeto' />
        <Input name='budget' type='number' text='Orçamento'  placeholder='Insira seu orçamento disponivel' />
        <Select name={"category_id"} text='Selecione uma categoria' options={categories}  />
        <ButtonForm text='Criar Projeto' type={btnType} />
       </div>
    )
}

export default ProjectForm