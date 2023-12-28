import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const RepleWrite = (props) => {
    const [reple, setReple] = useState("");
    const user = useSelector((state) => state.user);

    const SubmitHandler = (e) => {
        e.preventDefault();

        if (!reple) {
            return alert("댓글 내용을 채워주세요!!!");
        }

        let body = {
            reple: reple,
            uid: user.uid,
            postId: props.postId
        }

        axios.post("/api/reple/submit", body).then((response) => {
            if (response.data.success) {
                alert("댓글 작성이 성공하였습니다.");
                window.location.reload();
            } else {
                alert("댓글 작성이 실패했습니다.");
            }
        })
    }

    return (
        <div className='chating__submit'>
            <label htmlFor="live__chat" className='blind' />
            <input type="text" id='live__chat' name='live__chat' placeholder={props.postId} />
        </div>
    )
}

export default RepleWrite