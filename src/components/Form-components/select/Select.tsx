import styles from './select.module.css'

interface SelectProps{
    text: string
    name: string
    options?: any
    value?: string
    handleOnChange?: Event
    onChange: Event
}

const Select = (props: SelectProps) => {
const {text, name, options, handleOnChange, value} = props
    return(
        <div className={styles.select_my}>
    <label htmlFor={name}>{text}</label>
      <select name={name} onChange={handleOnChange} value={value || ""} >
        <option>Selecione uma categoria</option>
        {options.map((item) => (
            <option value={item.id} key={item.id}>{item.name} 
        </option>
        ))}
        </select>
        </div>
    )
}

export default Select