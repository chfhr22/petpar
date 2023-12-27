import React from 'react'
import logoimg from '../../assets/img/logoimg.png'
import profile from '../../assets/img/profile.png'

import { IoNotifications } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id='headerSection' className='sec'>
            <h1 className="header__logo">
                <Link to='/'>
                    <div className="logo__img">
                        <img src={logoimg} alt="로고이미지" />
                    </div>
                </Link>
            </h1>
            <Link to='/login'>로그인</Link>
            <div className="header__profile">
                <div className="noti">
                    <IoNotifications />
                    <div className="new"></div>
                </div>
                <div className="profile">
                    <Link to='/mypage'>
                        <img src={profile} alt="프로필사진" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header