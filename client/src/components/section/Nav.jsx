import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div id='navSection' className='sec'>
            <nav>
                <ul>
                    <li><Link to='/' className={isActive('/') ? 'active' : ''}>메인</Link></li>
                    <li><Link to='/community' className={isActive('/community') ? 'active' : ''}>커뮤니티</Link></li>
                    <li><Link to='/find' className={isActive('/find') ? 'active' : ''}>보호소</Link></li>
                    <li><Link to='/info' className={isActive('/info') ? 'active' : ''}>지식정보</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav