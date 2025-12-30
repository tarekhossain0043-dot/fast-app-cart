import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './components/Login';

export default function App() {
  const [isLoggin] = useState(true);
  return (
    <>
   <Routes>
    <Route path='/' element={isLoggin ? <Layout /> : <Login />}>
      <Route index element={<Dashboard />} />
      <Route path='/home' element ={<Home />} />
    </Route>
   </Routes>
    </>
  )
}
