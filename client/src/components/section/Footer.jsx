import React from 'react'

const Footer = () => {
    return (
        <div id='footerSection' className='sec'>
            <div className='create__name'>
                <h2>이름 짓기</h2>
                <p></p>
                <div className='point'>
                    <input type="text" placeholder='특징을 입력해주세요' />
                    <button>입력</button>
                </div>
            </div>
            <div className='chating__wrap'>
                <h2>실시간 채팅</h2>
                <div className='chating'>

                    <div className="chating__box">
                        <div className='chating__author'><span className='name'>초록</span> <span className='time'>14:58</span></div>
                        <div className='chating__cont'>
                            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
                        </div>
                    </div>

                    <div className="chating__box">
                        <div className='chating__author'><span className='name'>초록</span> <span className='time'>14:58</span></div>
                        <div className='chating__cont'>
                            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
                        </div>
                    </div>

                    <div className="chating__box">
                        <div className='chating__author'><span className='name'>초록</span> <span className='time'>14:58</span></div>
                        <div className='chating__cont'>
                            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
                        </div>
                    </div>

                    <div className="chating__box">
                        <div className='chating__author'><span className='name'>초록</span> <span className='time'>14:58</span></div>
                        <div className='chating__cont'>
                            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
                        </div>
                    </div>

                    <div className="chating__box">
                        <div className='chating__author'><span className='name'>초록</span> <span className='time'>14:58</span></div>
                        <div className='chating__cont'>
                            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
                        </div>
                    </div>

                    <div className="chating__box">
                        <div className='chating__author'><span className='name'>초록</span> <span className='time'>14:58</span></div>
                        <div className='chating__cont'>
                            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div className='chating__submit'>
                    <label htmlFor="live__chat" className='blind' />
                    <input type="text" id='live__chat' name='live__chat' />
                </div>
        </div>
    )
}

export default Footer