import React, { useState } from 'react'

import boardimg from '../../assets/img/boardimg.png';
import heart from '../../assets/img/heart.png';
import profile from '../../assets/img/profile.png';
import { IoBookmarkOutline, IoHeartOutline, IoShareSocialSharp, IoCallOutline } from "react-icons/io5";

const Contents = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [isMore, setIsMore] = useState(false);

    const moreButton = () => {
        setIsHidden(true);
        setIsMore(true);
    }
    return (
        <div className='contents__wrap'>
            <div className="contents">
                <div className="contents__top">
                    <div className="shelter">안산 보호소</div>
                    <div className="total__like">
                        <img src={heart} alt="하트이미지" />
                        <p>945</p>
                    </div>
                    <div className="image">
                        <img src={boardimg} alt="게시글이미지" />
                    </div>
                </div>
                <div className="contents__bottom">
                    <div className="info">
                        <div className="left">
                            <div className="profile">
                                <img src={profile} alt="프로필이미지" />
                            </div>
                            <div className="name">김아무개</div>
                            <div className="date">3일</div>
                            <div className="call"><IoCallOutline /></div>
                        </div>
                        <div className="right">
                            <div className="like"><IoHeartOutline /></div>
                            <div className="share"><IoShareSocialSharp /></div>
                            <div className="bookmark"><IoBookmarkOutline /></div>
                        </div>
                    </div>
                    <div className="board">
                        <div className="title">강아지 보호중 입니다.</div>
                        <div className={isMore ? `all` : `content`}>
                            공고번호  :  경기-화성-2023-01483
                            품종[개]믹스견색상흰색, 아이보리성별암컷 ...
                            중성화 나이/체중2023(년생)공고번호  :  경기-화성-2023-01483
                            품종[개]믹스견색상흰색, 아이보리성별암컷 ...
                            중성화 나이/체중2023(년생)공고번호  :  경기-화성-2023-01483
                            품종[개]믹스견색상흰색, 아이보리성별암컷 ...
                            중성화 나이/체중2023(년생)공고번호  :  경기-화성-2023-01483
                            품종[개]믹스견색상흰색, 아이보리성별암컷 ...
                            중성화 나이/체중2023(년생)
                        </div>
                        <div className={isHidden ? 'more hide' : 'more'} onClick={moreButton}>더보기</div>
                    </div>
                </div>
            </div>
            <div className="contents">
                <div className="contents__top">
                    <div className="shelter">안산 보호소</div>
                    <div className="total__like">
                        <img src={heart} alt="하트이미지" />
                        <p>945</p>
                    </div>
                    <div className="image">
                        <img src={boardimg} alt="게시글이미지" />
                    </div>
                </div>
                <div className="contents__bottom">
                    <div className="info">
                        <div className="left">
                            <div className="profile">
                                <img src={profile} alt="프로필이미지" />
                            </div>
                            <div className="name">김아무개</div>
                            <div className="date">3일</div>
                            <div className="call"><IoCallOutline /></div>
                        </div>
                        <div className="right">
                            <div className="like"><IoHeartOutline /></div>
                            <div className="share"><IoShareSocialSharp /></div>
                            <div className="bookmark"><IoBookmarkOutline /></div>
                        </div>
                    </div>
                    <div className="board">
                        <div className="title">강아지 보호중 입니다.</div>
                        <div className={isMore ? `all` : `content`}>
                            공고번호  :  경기-화성-2023-01483
                            품종[개]믹스견색상흰색, 아이보리성별암컷 ...
                            중성화 나이/체중2023(년생)공고번호  :  경기-화성-2023-01483
                            품종[개]믹스견색상흰색, 아이보리성별암컷 ...
                            중성화 나이/체중2023(년생)공고번호  :  경기-화성-2023-01483
                            품종[개]믹스견색상흰색, 아이보리성별암컷 ...
                            중성화 나이/체중2023(년생)공고번호  :  경기-화성-2023-01483
                            품종[개]믹스견색상흰색, 아이보리성별암컷 ...
                            중성화 나이/체중2023(년생)
                        </div>
                        <div className={isHidden ? 'more hide' : 'more'} onClick={moreButton}>더보기</div>
                    </div>
                </div>
            </div>
            <div className="contents">
                <div className="contents__top">
                    <div className="shelter">안산 보호소</div>
                    <div className="total__like">
                        <img src={heart} alt="하트이미지" />
                        <p>945</p>
                    </div>
                    <div className="image">
                        <img src={boardimg} alt="게시글이미지" />
                    </div>
                </div>
                <div className="contents__bottom">
                    <div className="info">
                        <div className="left">
                            <div className="profile">
                                <img src={profile} alt="프로필이미지" />
                            </div>
                            <div className="name">김아무개</div>
                            <div className="date">3일</div>
                            <div className="call"><IoCallOutline /></div>
                        </div>
                        <div className="right">
                            <div className="like"><IoHeartOutline /></div>
                            <div className="share"><IoShareSocialSharp /></div>
                            <div className="bookmark"><IoBookmarkOutline /></div>
                        </div>
                    </div>
                    <div className="board">
                        <div className="title">강아지 보호중 입니다.</div>
                        <div className={isMore ? `all` : `content`}>
                            공고번호  :  경기-화성-2023-01483
                            품종[개]믹스견색상흰색, 아이보리성별암컷 ...
                            중성화 나이/체중2023(년생)공고번호  :  경기-화성-2023-01483
                            품종[개]믹스견색상흰색, 아이보리성별암컷 ...
                            중성화 나이/체중2023(년생)공고번호  :  경기-화성-2023-01483
                            품종[개]믹스견색상흰색, 아이보리성별암컷 ...
                            중성화 나이/체중2023(년생)공고번호  :  경기-화성-2023-01483
                            품종[개]믹스견색상흰색, 아이보리성별암컷 ...
                            중성화 나이/체중2023(년생)
                        </div>
                        <div className={isHidden ? 'more hide' : 'more'} onClick={moreButton}>더보기</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contents
