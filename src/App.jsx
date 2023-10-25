import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SaladAyam from './pages/SaladAyam'
import SaladTimun from './pages/SaladTimun'
import DadaAyam from './pages/DadaAyam'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<SaladAyam />} />
        <Route path='/salad-timun-dan-udang-segar' element={<SaladTimun />} />
        <Route path='/dada-ayam-daun-selada' element={<DadaAyam />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
