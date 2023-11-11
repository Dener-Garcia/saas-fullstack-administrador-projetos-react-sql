import styles from './btnForm.module.css'

interface BtnProps{
    text: string;
    type: 'button' | 'submit' | 'reset';
}

const ButtonForm: React.FC<BtnProps> = ({text, type}) => {
    return(
        <button className={styles.my_btn} type={type}>{text}</button>
    )
}
export default ButtonForm