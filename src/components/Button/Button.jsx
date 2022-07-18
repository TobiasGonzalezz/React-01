const Button = (props) => {
    const handleClick = () => {
        props.updateValue((prev) => prev + props.increment)
    }
    return <button onClick={handleClick}>+{props.increment}</button>
}

export default Button