import React from 'react'
import { Link } from 'react-router-dom'

const filter = () => {
    return (
        <div className='filter__wrap'>
            <ul>
                <li><Link to="/" className='active'>전체</Link></li>
                <li><Link to="/">팔로우</Link></li>
                <li><Link to="/">강아지</Link></li>
                <li><Link to="/">고양이</Link></li>
            </ul>
        </div>
    )
}

export default filter
