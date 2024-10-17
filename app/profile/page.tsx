"use client"
import React from 'react'
import { useUserContext } from '../context/userContext'
import Link from 'next/link'

const ProfilePage = () => {
    const {logout, user} = useUserContext()

    console.log("user in profile", user)

  return (
    <div className='flex flex-col items-center gap-6 '> 
        <h2 className='font-bold uppercase'>Perfil</h2>
        <div className='flex flex-col items-center justify-center gap-2'>
        <p><strong>Nombre:</strong>  {user?.name}</p>
        <p><strong>Email:</strong>  {user?.email}</p>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center'>
        <Link href={"/simulation/summary"} className='p-1 bg-yellow-600 rounded-md text-white'>Simulacros completados</Link>
        <Link href={"/practice"}
        className='p-1 bg-blue-900 rounded-md text-white'
        >Preguntas practicadas</Link>
        </div>
       
    <button onClick={logout} className='p-1 bg-red-500 rounded-md text-white bottom-2 fixed' >
    Cerrar sesión
    </button>
    </div>
  )
}

export default ProfilePage