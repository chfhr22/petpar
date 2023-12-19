import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/section/Header'
import Main from './components/section/Main'
import Login from './components/pages/Login'
import Sub from './components/section/Sub'

const App = () => {
  return (
    <BrowserRouter>
      <Main>
        <Header />
        <Routes>
          <Route path='*' element={<Sub />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Main>
    </BrowserRouter>

  )
}

export default App