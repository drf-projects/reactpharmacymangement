import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import MainComponent from './Components/MainComponent';

const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Login />} />
    <Route  path='/home' element={<MainComponent/>}/>
   </Routes>
  )
}

export default App
