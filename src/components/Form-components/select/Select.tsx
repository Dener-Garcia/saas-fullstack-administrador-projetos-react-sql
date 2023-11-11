import styles from './select.module.css'

interface SelectProps{
    text: string
    name: string
    options?: any
    value?: string
    handleOnChange?: Event
}

const Select = (props: SelectProps) => {
const {text, name, options} = props
    return(
        <div className={styles.select_my}>
    <label htmlFor={name}>{text}</label>
      <select name={name} >
        <option>Selecione uma opção</option>
        <option>Selecione uma opção 2</option>
        {options.map((item) => (
            <option value={item.id} key={item.id}>{item.name} 
        </option>
        ))}
        </select>
        </div>
    )
}

export default Select