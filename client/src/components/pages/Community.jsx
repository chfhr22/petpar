import React from 'react'
import { Link } from 'react-router-dom'


import Image from '../../assets/img/comunnity.jpg';
import Image2 from '../../assets/img/default_img.png';
import Image3 from '../../assets/img/com22.png';

import { IoBookmarkOutline, IoHeartOutline, IoShareSocialSharp } from "react-icons/io5";


const Community = () => {

    const img = <img src={Image} alt="로고"></img>;
    const img2 = <img src={Image2} alt="로고"></img>;
    const img3 = <img src={Image3} alt="로고"></img>;

    return (
        <section id='comPage' className='pages'>


            <div className="com_wrap">
                <div className="searchBar">
                    <input type="text" className="search-input" placeholder="Search..." />
                    <button className="search-button">검색</button>
                </div>
                <div className='comHeader'>
                    <ul className='comNav'>
                        <li><Link href="/">입양</Link></li>
                        <li><Link href="/">자유</Link></li>
                        <li><Link href="/">질문</Link></li>
                    </ul>
                </div>

                <div className='contents_wrap_wrap'>
                    <div className='contents_wrap'>
                        <div className='board_wrap'>
                            <div className="img">{img}</div>
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
                        </div>



                    </div>
                </div>
            </div>
        </section>
    )
}

export default Community
