import { ChangeEvent } from 'react';
import styles from './input.module.css'

interface InputProps{
    type: string,
    text: string,
    name: string,
    placeholder: string,
    value?: string,
    handleOnChange?: ChangeEvent<HTMLInputElement>;
}
console.log("renderizou input")

const Input = (props:InputProps) => {

    const { type, text, name, placeholder, handleOnChange, value} = props
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleOnChange}/>
        </div>
    )
}

export default Input