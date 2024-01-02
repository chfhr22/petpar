import React from 'react'

const Chat = () => {
    return (
        <>
            <h2>실시간 채팅</h2>
            <div className='chating__wrap'>
                <div className='chating'>
                    <div className="chating__box">
                        <div className='chating__author'><span className='name'>초록</span> <span className='time'>14:58</span></div>
                        <div className='chating__cont'>
                            ㅋㅋㅋㅋㅋㅋㅋdddddd
                        </div>
                    </div>

                </div>

            </div>
            <div className='chating__submit'>
                <label htmlFor="live__chat" className='blind' />
                <input type="text" id='live__chat' name='live__chat' />
            </div>
        </>
    )
}

export default Chat
