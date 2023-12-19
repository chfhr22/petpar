import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Find = () => {
    const [isSubMenuVisible, setSubMenuVisible] = useState(false);
    const toggleSubMenu = () => {
        setSubMenuVisible(!isSubMenuVisible);
    };

    const [petItems, setPetItems] = useState([]);



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
                        numOfRows: "10",
                        _type: "json",
                    }
                });

                let items = res.data.response.body.items.item;
                setPetItems(items);
            } catch (err) {
                console.log(err);
            }
        };

        fetchShelter();
    }, []);


    return (
        <div id='findSection' className='pages'>
            <div className="find__container">
                <div className="find__cate">
                    <ul>
                        <li className='location__text'>
                            <input type="text" />
                            <p>🔍</p>
                        </li>
                        <li className="location-item" onClick={toggleSubMenu}>
                            <span>도시</span>
                            {isSubMenuVisible && (
                                <ul className="sub-menu">
                                    <li>
                                        <Link to="/seoul">서울특별시</Link>
                                    </li>
                                    <li>
                                        <Link to="/gyeonggi">경기도</Link>
                                    </li>
                                    <li>
                                        <Link to="/jeonbuk">전라북도</Link>
                                    </li>
                                    <li>
                                        <Link to="/gyeongbuk">경상북도</Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className="location-item" onClick={toggleSubMenu}>
                            <span>지역구</span>
                            {isSubMenuVisible && (
                                <ul className="sub-menu">
                                    <li>
                                        <Link to="/seoul">강남구</Link>
                                    </li>
                                    <li>
                                        <Link to="/gyeonggi">영등포구</Link>
                                    </li>
                                    <li>
                                        <Link to="/jeonbuk">마포구</Link>
                                    </li>
                                    <li>
                                        <Link to="/gyeongbuk">구로구</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="location-item">
                            <Link to="/">동</Link>
                        </li>
                    </ul>
                </div>

                <div className="find__title">
                    <h2>📍 이지역의 보호소</h2>
                    <p>가까운순</p>
                </div>
                <div className="find__boxWrap">
                    {petItems.map((item, index) => (
                        <div className="find__box" key={index}>
                            <div className="box01">
                                <h2>{item.careNm}</h2>
                                <div className='boximg'>
                                    <img src="/" alt="/" />
                                </div>
                            </div>
                            <div className="box02">
                                <div className='boxInfo'>
                                    <div className='name'>지역</div>
                                    <div className='anwser'>{item.orgNm}</div>
                                </div>
                                <div className='boxInfo'>
                                    <div className='name'>담당자</div>
                                    <div className='anwser'>{item.chargeNm}</div>
                                </div>
                                <div className='boxInfo'>
                                    <div className='name'>전화번호</div>
                                    <div className='anwser'>{item.careTel}</div>
                                </div>
                            </div>
                            <div className="box03">
                                <div className='boxInfo'>
                                    <div className='name'>상세주소</div>
                                    <div className='anwser'>{item.careAddr}</div>
                                </div>
                                <div className='boxInfo'>
                                    <div className='name'>특이사항</div>
                                    <div className='anwser'>
                                        700마리의 동물을 보호하고 있습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Find