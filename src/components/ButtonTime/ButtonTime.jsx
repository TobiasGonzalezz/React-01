import { Fragment, useState } from "react"

const ButtonTime = () => {
    const [date, setDate] = useState('')

    const showDate = () => {
        console.log(new Date())
        const myDate = new Date()
        setDate(myDate.toString())
    }

    return (
        <Fragment>
            <button onClick={showDate}>Time now</button>
            <p>
                {date}
            </p>
        </Fragment>
    )
}

export default ButtonTime