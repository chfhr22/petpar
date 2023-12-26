import React, { useEffect, useState } from 'react'
import Image from '../../assets/img/default_img.png';

import { IoBookmarkOutline, IoHeartOutline, IoShareSocialSharp } from "react-icons/io5";
import axios from 'axios';

const PostList = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        axios
            .post("/api/post/list")
            .then((response) => {
                if (response.data.success) {
                    setPostList([...response.data.postList]);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const img = <img src={Image} alt="로고"></img>;

    return (
        <div className='contents_wrap_wrap'>
            <div className='contents_wrap'>
                {postList.map((post, key) => {
                    return (
                        <div className='board_wrap' key={key}>
                            <div className="img"><img src={post.image ? post.image : Image} alt="" /></div>
                            <div className="board_bar">
                                <div className='right'>
                                    <div className="profile">{img}</div>
                                    <p className='author'>김아무개</p>
                                    <span>3일</span>
                                </div>
                                <div className='icon'>
                                    <IoHeartOutline size={20} />
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

                {/* <div className='board_wrap'>
                    <div className="img">{img3}</div>
                    <div className="board_bar">
                        <div className='right'>
                            <div className="profile">{img3}</div>
                            <p className='author'>김아무개</p>
                            <span>3일</span>
                        </div>
                        <div className='icon'>
                            <IoHeartOutline size={20} />
                            <IoShareSocialSharp size={20} />
                            <IoBookmarkOutline size={20} />
                        </div>
                    </div>
                    <div className="cont_wrap">
                        <div className="contents">
                            <h3>강아지 잘 지내고 있어요.</h3>
                            <p>제가 입양한 강아지 잘 키우고 있습니다</p>
                        </div>
                        <div className='category'>입양</div>
                    </div>
                </div>

                <div className='board_wrap'>
                    <div className="img">{img3}</div>
                    <div className="board_bar">
                        <div className='right'>
                            <div className="profile">{img3}</div>
                            <p className='author'>김아무개</p>
                            <span>3일</span>
                        </div>
                        <div className='icon'>
                            <IoHeartOutline size={20} />
                            <IoShareSocialSharp size={20} />
                            <IoBookmarkOutline size={20} />
                        </div>
                    </div>
                    <div className="cont_wrap">
                        <div className="contents">
                            <h3>강아지 잘 지내고 있어요.</h3>
                            <p>제가 입양한 강아지 잘 키우고 있습니다</p>
                        </div>
                        <div className='category'>입양</div>
                    </div>
                </div>


                <div className='board_wrap'>
                    <div className="img">{img2}</div>
                    <div className="board_bar">
                        <div className='right'>
                            <div className="profile">{img}</div>
                            <p className='author'>김아무개</p>
                            <span>3일</span>
                        </div>
                        <div className='icon'>
                            <IoHeartOutline size={20} />
                            <IoShareSocialSharp size={20} />
                            <IoBookmarkOutline size={20} />
                        </div>
                    </div>
                    <div className="cont_wrap">
                        <div className="contents">
                            <h3>강아지 잘 지내고 있어요.</h3>
                            <p>제가 입양한 강아지 잘 키우고 있습니다</p>
                        </div>
                        <div className='category'>입양</div>
                    </div>
                </div> */}



            </div>
        </div>
    )
}

export default PostList
