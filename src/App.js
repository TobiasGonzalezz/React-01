import './App.css'
import Form from './components/Form/Form'
import { useState } from 'react'

function App() {
  const [error, setError] = useState(false)

  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const account = {
    name: 'Tobias',
    email: 'tobygon988@gmail.com',
    password: '1234'
  }

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
    console.log('Logout...')
    setError(false);
  }

  return (
    <div className='App'>
      {(error) ? (
        <div className='welcome'>
          <h2>Bienvenido! <span>{data.name}</span> </h2>
          <button type="submit" onClick={logout}>Logout</button>
        </div>
      ) : (<Form setInfo={setData} user={data} account={account} setError={setError} error={error}></Form>)}
    </div>
  )
}

export default App
