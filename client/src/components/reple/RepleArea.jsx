import React from 'react'
import { useSelector } from 'react-redux'
import RepleWrite from './RepleWrite';

const RepleArea = (props) => {
    const user = useSelector((state) => state.user);
    return (
        <>
            <h2>댓글</h2>
            <div className='chating__wrap'>
                <div className='chating'>
                    <div className="chating__box">
                        <div className='chating__author'>
                            <span className='name'>초록</span>
                            <span className='time'>14:58</span>
                        </div>
                        <div className='chating__cont'>
                            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
                        </div>
                    </div>
                </div>
            </div>
            <RepleWrite postId={props.postId} />
        </>
    )
}
export default RepleArea