import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import firebase from '../../firebase.js'

import Image from '../../assets/img/PETPAR.png';


const Login = () => {
    const logo = <img src={Image} alt="로고" height={50}></img>;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const LoginFunc = async (e) => {
        e.preventDefault();

        if (!(email && password)) {
            return alert("이메일 또는 비밀번호를 입력해주세요.")
        }
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            alert("로그인을 했습니다.");
            navigate("/");
        } catch (err) {
            console.log(err);
            alert("이메일과 비밀번호를 다시 한 번 확인해주세요!");
        }
    }

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
                        <input
                            type='text'
                            id='id'
                            name='youId'
                            placeholder='ID'
                            autoComplete='off'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        ></input>
                    </div>

                    <div className="input_style">
                        <p>비밀번호</p>
                        <label htmlFor="password" className='blind'>비밀번호</label>
                        <input
                            type='password'
                            id='password'
                            name='youPass'
                            placeholder='PASSWORD'
                            autoComplete='off'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                        ></input>
                    </div>

                    <button type='submit' onClick={(e) => { LoginFunc(e) }}>로그인</button>

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

export default Login