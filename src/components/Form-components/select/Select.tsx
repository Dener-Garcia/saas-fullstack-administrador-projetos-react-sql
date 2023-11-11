import styles from './select.module.css'

interface SelectProps{
    text: string
    name: string
    options?: string
    value?: string
    handleOnChange?: Event
}

const Select = (props: SelectProps) => {
const {text, name} = props
    return(
        <div className={styles.select_my}>
    <label htmlFor={name}>{text}</label>
      <select name={name} >
        <option>Selecione uma opção</option>
        </select>
        </div>
    )
}

export default Select