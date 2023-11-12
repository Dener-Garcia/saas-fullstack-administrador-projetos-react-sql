import React, { useEffect, useState } from 'react'
import ButtonForm from '../../Form-components/button/ButtonForm'
import Input from '../../Form-components/input/Input'
import Select from '../../Form-components/select/Select'
import styles from './projectForm.module.css'
import getCategories from '../../../api/getCategories.ts'


interface BtnProps{
  text: string
  btnType: 'button' | 'submit' | 'reset';
}

const ProjectForm: React.FC<BtnProps> = ({btnType, text, handleSubmit, projectData}) => {

  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

  const [inputName, setInputName] = useState('')
  const [inputbudget, setInputbudget] = useState(0)

  useEffect(() => {
    getCategories('GET')
      .then((res) => {
        setCategories(res)

      })
      .catch((err) =>{
        console.error('erro ao receber dados', err)
      })
  },[])

  const submit = (e) => {
    e.preventDefault()
  //handleSubmit(project)
  }

  const handleChange = (e) => {

  }

  const handleCategory = (e) => {
    setProject({...project, category: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text
    },

    })
  }

  console.log(project, inputName, inputbudget, 'este eh project antes de nada')


  return(
    <form className={styles.container} onSubmit={submit}>
      <Input 
        name="name" 
        type="text" 
        text="Projeto"  
        placeholder="Insira o nome do projeto"
        handleOnChange={e => {setInputName(e.target.value)}}
      />

      <Input 
        name="budget" 
        type="number" 
        text="Orçamento" 
        placeholder="Insira seu orçamento disponivel" 
        handleOnChange={e => {setInputbudget(e.target.value)}}
      />

      <Select
        name={'category_id'} 
        text="Selecione uma categoria" 
        options={categories} 
        handleOnChange={handleCategory} 
        value={project.category ? project.category.id : ' '}  />
       
      <ButtonForm text={text} type={btnType} />
    </form>
  )
}

export default ProjectForm
