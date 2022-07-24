import styles from '../../styles/modules/Button.modules.css'

const Button = (props) => {
    const handleClick = () => {
        props.updateValue((prev) => prev + props.increment)
    }
    return <button className={styles.button} onClick={handleClick}>+{props.increment}</button>
}

export default Button