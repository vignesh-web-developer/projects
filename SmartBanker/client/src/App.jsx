import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Accounts from './pages/Accounts'
import Application from './pages/Application'
import Loans from './pages/Loans'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Accounts' element={<Accounts />} />
        <Route path='/Loans' element={<Loans />} />
        <Route path='/Application' element={<Application />} />
      </Routes>
    </div>
  )
}


export default App
