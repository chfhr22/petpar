import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const Community = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };
    return (
        <div id='comPage' className='pages'>
            <div className='comHeader'>
                <ul className='comNav'>
                    <li><Link href="/" className={isActive('/') ? 'active' : ''}>입양</Link></li>
                    <li><Link href="/">자유</Link></li>
                    <li><Link href="/">질문</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Community