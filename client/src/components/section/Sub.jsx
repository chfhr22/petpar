import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Community from '../pages/Community'
import Information from '../pages/Information'
import Find from '../pages/Find'
import Nav from './Nav'
import Footer from './Footer'
import Pages from './Pages'
import InfoDetail from '../pages/InfoDetail'
import Mypage from '../pages/Mypage'
import PostWrite from '../post/PostWrite'

const Sub = () => {
    return (
        <div className="content_wrap">
            <Nav />
            <Pages>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/community' element={<Community />} />
                    <Route path='/community/write' element={<PostWrite />} />
                    <Route path='/mypage' element={<Mypage />} />
                    <Route path='/info' element={<Information />} />
                    <Route path='/info/:postNum' element={<InfoDetail />} />
                    <Route path='/find' element={<Find />} />
                </Routes>
            </Pages>
            <Footer />
        </div>
    )
}

export default Sub