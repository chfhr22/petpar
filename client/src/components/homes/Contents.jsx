import React, { useEffect, useState } from 'react'
import axios from 'axios';

import heart from '../../assets/img/heart.png';
import profile from '../../assets/img/profile.png';
import { IoBookmarkOutline, IoHeartOutline, IoShareSocialSharp, IoCallOutline } from "react-icons/io5";

const Contents = () => {
    const [petItems, setPetItems] = useState([]);
    const [expandedItems, setExpandedItems] = useState({});

    const toggleExpand = (index) => {
        setExpandedItems((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    }

    useEffect(() => {
        const apiKey = process.env.REACT_APP_PET_API_KEY;
        const fetchShelter = async () => {
            try {
                const res = await axios.get("https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic", {
                    params: {
                        serviceKey: apiKey,
                        bgnde: "20230101",
                        endde: "20231218",
                        pageNo: "10",
                        numOfRows: "50",
                        _type: "json",
                    }
                })
                console.log(res)

                let items = res.data.response.body.items.item;

                setPetItems(items);
            } catch (err) {
                console.log(err);
            }
        }

        fetchShelter();
    }, [])

    return (
        <div className='contents__wrap'>
            {petItems.map((item, key) => (
                <div className="contents" key={key}>
                    <div className="contents__top">
                        <div className="shelter">{item.careNm}</div>
                        <div className="total__like">
                            <img src={heart} alt="하트이미지" />
                            <p>945</p>
                        </div>
                        <div className="image">
                            <img src={item.popfile} alt="게시글이미지" />
                        </div>
                    </div>
                    <div className="contents__bottom">
                        <div className="info">
                            <div className="left">
                                <div className="profile">
                                    <img src={profile} alt="프로필이미지" />
                                </div>
                                <div className="name">{item.chargeNm}</div>
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
                            <div className="title">{item.specialMark}</div>
                            <div className={expandedItems[key] ? `all` : `content`}>
                                품종 : {item.kindCd}<br />
                                나이 : {item.age}<br />
                                색깔 : {item.colorCd}<br />
                                몸무게 : {item.weight}<br />
                                상태 : {item.processState}<br />
                                특징 : {item.specialMark}
                            </div>
                            <div className='more' onClick={() => toggleExpand(key)}>
                                {expandedItems[key] ? '접기' : '더보기'}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Contents
