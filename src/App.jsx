import React from 'react'
import './assets/style.scss'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Admin from '../Pages/Admin'
import Add from '../Pages/Add'
import Home from '../Pages/Home'

function App() {
  return (
    <div>
    <BrowserRouter>
   <Routes>
    <Route element={<Home/>} path="/"></Route>
    <Route element={<Admin/>} path="/admin"></Route>
    <Route element={<Add/>} path="/add"></Route>
   </Routes>
   </BrowserRouter>

    </div>
  )
}

export default App