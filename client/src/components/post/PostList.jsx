import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Image from '../../assets/img/default_img.png';
import { IoBookmarkOutline, IoHeartOutline, IoShareSocialSharp } from "react-icons/io5";

const PostList = () => {
    const [postList, setPostList] = useState([]);
    const [likes, setLikes] = useState({});
    const [likesCount, setLikesCount] = useState({});

    const handleLikeClick = (postNum) => {
        const updatedLikes = {
            ...likes,
            [postNum]: !likes[postNum]
        };
        setLikes(updatedLikes);

        axios.post('/api/post/like', { postNum, likeState: updatedLikes[postNum] })
            .then((response) => {
                if (response.data.success) {
                    setLikesCount(prevCount => ({
                        ...prevCount,
                        [postNum]: response.data.likes
                    }));
                }
            })
            .catch((err) => {
                console.error('Error:', err);
            });
    };

    useEffect(() => {
        axios.post("/api/post/list")
            .then((response) => {
                if (response.data.success) {
                    setPostList([...response.data.postList]);

                    // 게시물별 좋아요 수를 likesCount 상태에 저장
                    const initialLikesCount = {};
                    response.data.postList.forEach(post => {
                        initialLikesCount[post.postNum] = post.likes || 0;
                    });
                    setLikesCount(initialLikesCount);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className='contents_wrap_wrap'>
            <div className='contents_wrap'>
                {postList.map((post, key) => {
                    return (
                        <div className='board_wrap' key={key}>
                            <Link to={`/detail/${post.postNum}`}>
                                <div className="img"><img src={post.image ? post.image : Image} alt="게시글이미지" /></div>
                            </Link>
                            <div className="board_bar">
                                <div className='right'>
                                    <div className="profile">
                                        <img src={post.author.photoURL} alt="프로필사진" />
                                    </div>
                                    <div className="author">{post.author.displayName}</div>
                                    <span>3일</span>
                                </div>
                                <div className='icon'>
                                    <IoHeartOutline
                                        size={20}
                                        onClick={() => handleLikeClick(post.postNum)}
                                        style={{ color: likes[post.postNum] ? 'red' : 'black', cursor: 'pointer' }}
                                    />
                                    <span>{likesCount[post.postNum] || 0}</span>
                                    <IoShareSocialSharp size={20} />
                                    <IoBookmarkOutline size={20} />
                                </div>
                            </div>
                            <div className="cont_wrap">
                                <div className="contents">
                                    <h3>{post.title}</h3>
                                    <p>{post.content}</p>
                                </div>
                                <div className='category'>{post.category}</div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PostList;
