import React from 'react'

const Mypage = () => {
    return (
        <div className='mypage pages'>
            < form name='login' method='post' >
                <legend className="blind">회원 정보 수정 영역</legend>

                <div className="input_style imgupload">
                    <div className='img'><img src="" alt="이미지" /></div>
                    <label htmlFor="imageUpload" className='blind'>이미지 업로드:</label>
                    <input type="file" id="imageUpload" className='imguploadclass' name="image" accept="image/*" />
                    <div className="btn_wrap">
                        <button type="submit">업로드</button>
                        <button type="submit">사진삭제</button>
                    </div>
                </div>

                <div className="input_style">
                    <p>이름</p>
                    <label htmlFor="name" className='blind'>이름</label>
                    <input type='text' id='name' name='youName' placeholder='NAME' autoComplete='off' required></input>
                </div>

                <div className="input_style">
                    <p>아이디</p>
                    <label htmlFor="id" className='blind'>아이디</label>
                    <input type='text' id='id' name='youId' placeholder='ID' autoComplete='off' required></input>
                </div>

                <div className="input_style">
                    <p>이메일</p>
                    <label htmlFor="email" className='blind'>이메일</label>
                    <input type='email' id='email' name='youEmail' placeholder='E-mail' autoComplete='off' required></input>
                </div>

                <div className="input_style">
                    <p>비밀번호</p>
                    <label htmlFor="password" className='blind'>비밀번호</label>
                    <input type='password' id='password' name='youPass' placeholder='PASSWORD' autoComplete='off' required></input>
                </div>
                <div className="input_style">
                    <p>새 비밀번호</p>
                    <label htmlFor="passwordC" className='blind'>새 비밀번호</label>
                    <input type='password' id='passwordC' name='youPassC' placeholder='PASSWORD' autoComplete='off' required></input>
                </div>

                <div className="input_style">
                    <p>새 비밀번호 확인</p>
                    <label htmlFor="passwordCConfirm" className='blind'>새 비밀번호 확인</label>
                    <input type='password' id='passwordCConfirm' name='youPassCConfirm' placeholder='PASSWORD' autoComplete='off' required></input>
                </div>
                <button type='submit' className='input_style'>정보 수정</button>
            </form >

        </div >
    )
}

export default Mypage