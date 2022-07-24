import React from 'react'
import { Outlet } from 'react-router-dom'

const Pokemon = () => {
  return (
    <>
      <div>Pokemon</div>
      <Outlet />
    </>
  )
}

export default Pokemon
