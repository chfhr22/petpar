import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../assets/img/PETPAR.png';

const Findpass = () => {
    const logo = <img src={Image} alt="로고" height={50}></img>;

    return (
        <div id='loginPage'>
            <div className="login_box">
                <h1 className="logo">
                    {logo}
                </h1>
                <form name='login' method='post'>
                    <legend className="blind">로그인 영역</legend>

                    <div className="input_style">
                        <p>아이디</p>
                        <label htmlFor="id" className='blind'>아이디</label>
                        <input type='text' id='id' name='youId' placeholder='ID' autoComplete='off' required></input>
                    </div>

                    <div className="input_style">
                        <p>이메일</p>
                        <label htmlFor="emaill" className='blind'>이메일</label>
                        <input type='emaill' id='emaill' name='youEmail' placeholder='E-mail' autoComplete='off' required></input>
                    </div>

                    <button type='submit'>로그인</button>

                    <ul>
                        <li><Link to='/findid'>아이디 찾기</Link></li>
                        <li><Link to='/join'>회원가입</Link></li>
                    </ul>
                </form>
            </div>
            <div className="login_bg"></div>
        </div>
    )
}

export default Findpass