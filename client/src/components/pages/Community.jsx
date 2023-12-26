import React from 'react'
import { Link } from 'react-router-dom'


import PostList from '../post/PostList';


const Community = () => {

    return (
        <section id='comPage' className='pages'>
            <div className="com_wrap">
                <div className="searchBar">
                    <input type="text" className="search-input" placeholder="Search..." />
                    <button className="search-button">검색</button>
                </div>
                <div className='comHeader'>
                    <ul className='comNav'>
                        <li><Link href="/">입양</Link></li>
                        <li><Link href="/">자유</Link></li>
                        <li><Link href="/">질문</Link></li>
                    </ul>
                </div>
                <PostList />
            </div>
        </section>
    )
}

export default Community
