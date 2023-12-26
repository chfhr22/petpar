import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../../firebase.js'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Image from '../../assets/img/PETPAR.png';


const Join = () => {
    const logo = <img src={Image} alt="로고" height={50}></img>;

    const [youEmail, setYouEmail] = useState("");
    const [youPass, setYouPass] = useState("");
    const [youPassC, setYouPassC] = useState("");
    const [youName, setYouName] = useState("");
    const [flag, setFlag] = useState(false);

    let navigate = useNavigate();

    const JoinFunc = async (e) => {
        setFlag(true);
        e.preventDefault();

        if (!(youEmail && youPass && youPassC && youName)) {
            return alert("모든 항목을 입력해주세요.");
        }

        if (youPass !== youPassC) {
            return alert("비밀번호가 일치하지 않습니다.")
        }

        // firebase 회원가입
        let createdUser = await firebase.auth().createUserWithEmailAndPassword(youEmail, youPass);

        await createdUser.user.updateProfile({
            displayName: youName,
            photoURL: "https://kr.object.ncloudstorage.com/petpar-rlan/user/profile.png"
        });

        console.log(createdUser.user);

        // mongoDB 회원가입
        let body = {
            email: createdUser.user.multiFactor.user.email,
            displayName: createdUser.user.multiFactor.user.displayName,
            uid: createdUser.user.multiFactor.user.uid, // firebase에서 만든 아이디
            photoURL: "https://kr.object.ncloudstorage.com/petpar-rlan/user/profile.png",
        }

        axios.post("/api/user/join", body)
            .then((response) => {
                if (response.data.success) {
                    alert("회원가입이 완료되었습니다.");
                    navigate("/login");
                } else {
                    alert("회원가입이 실패하였습니다.");
                }
            })
    }

    return (
        <div id='loginPage'>
            <div className="login_box">
                <h1 className="logo joinpage">
                    {logo}
                </h1>
                <form name='login' method='post'>
                    <legend className="blind">로그인 영역</legend>

                    <div className="input_style">
                        <p>이메일</p>
                        <label htmlFor="email" className='blind'>이메일</label>
                        <input
                            type='email'
                            id='email'
                            name='youEmail'
                            placeholder='E-mail'
                            autoComplete='off'
                            required
                            value={youEmail}
                            onChange={(e) => setYouEmail(e.currentTarget.value)}
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
                            value={youPass}
                            onChange={(e) => setYouPass(e.currentTarget.value)}
                        ></input>
                    </div>

                    <div className="input_style">
                        <p>비밀번호 확인</p>
                        <label htmlFor="passwordC" className='blind'>비밀번호 확인</label>
                        <input
                            type='password'
                            id='passwordC'
                            name='youPassC'
                            placeholder='PASSWORD'
                            autoComplete='off'
                            required
                            value={youPassC}
                            onChange={(e) => setYouPassC(e.currentTarget.value)}
                        ></input>
                    </div>

                    <div className="input_style">
                        <p>이름</p>
                        <label htmlFor="name" className='blind'>이름</label>
                        <input
                            type='text'
                            id='name'
                            name='youName'
                            placeholder='NAME'
                            autoComplete='off'
                            required
                            value={youName}
                            onChange={(e) => setYouName(e.currentTarget.value)}
                        ></input>
                    </div>



                    <button disabled={flag} type='submit' onClick={(e) => { JoinFunc(e) }}>회원가입</button>

                    <ul>
                        <li><Link to='/findid'>아이디 찾기</Link></li>
                        <li><Link to='/findpass'>비밀번호 찾기</Link></li>
                    </ul>
                </form>
            </div>
            <div className="login_bg"></div>
        </div>
    )
}

export default Join