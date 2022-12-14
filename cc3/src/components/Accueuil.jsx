import React from 'react'
import { Outlet } from 'react-router-dom'


export const Accueuil = () => {
  return (
    <div className='home'>
        <h1>Gestion des Posts</h1>
        <Outlet />
    </div>
  )
}