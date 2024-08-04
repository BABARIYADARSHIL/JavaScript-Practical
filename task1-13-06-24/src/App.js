import React from 'react'
import Home from './Pages/Home'
import Footer from './Pages/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContacUs from './Pages/ContacUs'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/ContacUs" element={<ContacUs />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
