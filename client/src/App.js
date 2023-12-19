import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/section/Header'
import Main from './components/section/Main'
import Login from './components/pages/Login'
import Sub from './components/section/Sub'
import Findid from './components/pages/Findid'
import Join from './components/pages/Join'
import Findpass from './components/pages/Findpass'

const App = () => {

  return (
    <BrowserRouter>
      <Main>
        <Header />
        <Routes>
          <Route path='*' element={<Sub />} />
          <Route path='/login' element={<Login />} />
          <Route path='/findid' element={<Findid />} />
          <Route path='/findpass' element={<Findpass />} />
          <Route path='/Join' element={<Join />} />
        </Routes>
      </Main>
    </BrowserRouter>

  )
}

export default App