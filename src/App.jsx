import { useState } from 'react'
import './App.css'
import Home from './components/Home'

function App() {

  return (
    <>
      <div className='bg-gradient-to-r from-blue-950 to-black w-screen h-screen flex justify-center items-center'>
        <Home/>
      </div>
    </>
  )
}

export default App
