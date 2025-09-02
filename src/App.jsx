import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContainer  from './components/MainContainer.jsx'
import backgroundimage from './assets/background.jpg'

function App() {

  return (
    <div className="relative h-screen w-screen overflow-x-hidden">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ 
          backgroundImage: `url(${backgroundimage})`,
          filter: 'blur(5px) brightness(50%)',
          transform: 'scale(1.2)',
          zIndex: -1
        }}
      ></div>
      
      <MainContainer/>
    </div>
  )
}

export default App
