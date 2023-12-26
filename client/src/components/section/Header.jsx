import React from 'react'
import logoimg from '../../assets/img/logoimg.png'
import profile from '../../assets/img/profile.png'

import { IoNotifications } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id='headerSection' className='sec'>
            <h1 className="header__logo">
                <div className="logo__img">
                    <img src={logoimg} alt="로고이미지" />
                </div>
                {/* <div className="logo__text">
                    <em>pet</em>par
                </div> */}
            </h1>
            <Link to='/login'>로그인</Link>
            <Link to='../'>뒤로가기</Link>
            <Link to='/mypage'><img src="" alt="마이페이지" /></Link>
            <div className="header__profile">
                <div className="noti">
                    <IoNotifications />
                    <div className="new"></div>
                </div>
                <div className="profile">
                    <img src={profile} alt="프로필사진" />
                </div>
            </div>

            {/* <Link to='/login'>로그인</Link> */}
        </div>
    )
}

export default Header