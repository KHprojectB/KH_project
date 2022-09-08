import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import Auth_Test from './components/Auth_Test';
import Nav from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='auth' element={<Auth_Test></Auth_Test>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App