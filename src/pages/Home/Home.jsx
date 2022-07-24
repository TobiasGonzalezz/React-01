import React, { useState, useEffect } from 'react'
import Button from '../../components/Button/Button'
import Display from '../../components/Display/Display'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const [count, setCount] = useState(0)
  const [imageUrl, setImageUrl] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    if (count % 2 == 0 && count > 50) {
      navigate('/pokemon')
    }
  }, [count])

  useEffect(() => {
    axios.get('https://tobias-people-test.herokuapp.com/api/cars').then((res) => setImageUrl(res.data.sprites.other.dream_world.front_default)).catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Button updateValue={setCount} increment={1} />
      <Button updateValue={setCount} increment={10} />
      <Display message={count} />
      {count > 50 ? <h1>You Win</h1> : <h1>You Lose</h1>}
      <img src={imageUrl} />
    </>
  )
}

export default Home
