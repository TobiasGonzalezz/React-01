import React, { Fragment, useState } from 'react'
import './Form.css'

const Form = (props) => {
    const [errorMessage, setErrorMessage] = useState(false)


    const handleInputChange = (event) => {
        props.setInfo({
            ...props.user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if ((props.user.name === props.account.name && props.user.email === props.account.email && props.user.password === props.account.password)) {
            console.log( "Bienvenido!", {...props.user})
            props.setError(true);
            setErrorMessage(false);

        }else{
            console.log('datos inconrrectos')
            props.setError(false);
            setErrorMessage(true);
        }
    }

    return (<Fragment>
        <main className='container'>
            <h1 className='container__title'>Formulario</h1>
            <p className='container__error' id={ errorMessage ? 'error_message' : 'none'}>Datos inconrrectos</p>
            <form name='login' className='login' onSubmit={handleSubmit}>
                <input name='name' type="text" className='inputLogin' placeholder='Ingrese su nombre' onChange={handleInputChange} required />
                <input name='email' type="email" className='inputLogin' placeholder='Ingrese su email' onChange={handleInputChange} required/>
                <br />
                <input name='password' type="password" className='inputLogin' placeholder='Ingrese su contraseña' onChange={handleInputChange} required/>
                <br />
                <button type="submit">Login</button>
            </form>
        </main>
    </Fragment>)
}

export default Form