import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Form from './pages/Form/Form'
import Home from './pages/Home/Home'
import Pokemon from './pages/Pokemon/Pokemon'
import PokemonCard from './pages/Pokemon/PokemonCard'
import NewPokemonForm from './pages/Pokemon/NewPokemonForm'
import PokemonList from './pages/Pokemon/PokemonList'
import Header from './components/Header/Header'
import Button from './components/Button/Button'
import './styles/main.css'


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

  useEffect(() => {
    document.title = data.name
  }, [data.name])

  const logout = () => {
    localStorage.clear();
    window.location.href = '/form';
    console.log('Logout...')
    setError(false);
  }

  return (
    <div className='App'>
      <Header/>

      <Routes>
        <Route 
          path='/form'
          element={
            <div> {(error) ? (
              <div className='welcome'>
                <h2>Bienvenido! <span>{data.name}</span></h2>
                <button className="form__button" type="submit" onClick={logout}>Logout</button>
              </div>
            ) : (<Form setInfo={setData} user={data} account={account} setError={setError} error={error}></Form>)}
            </div>
          }
        />
        <Route path='/' element={<Home />} />
        <Route path='pokemon' element={<Pokemon />}>
          <Route path=':pokemonId' element={<PokemonCard />} />
          <Route path='new' element={<NewPokemonForm />} />
          <Route index element={<PokemonList />} />
        </Route>
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  )
}

export default App
