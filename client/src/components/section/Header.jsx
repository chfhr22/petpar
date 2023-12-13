import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div id='headerSection' className='sec'>
            <h1 className="logo">
                <a href="/">
                    PetPar
                </a>
            </h1>
            <Link to='/login'>로그인</Link>
            <Link to='/'>일단뒤로가기버튼</Link>
        </div>
    )
}

export default Header