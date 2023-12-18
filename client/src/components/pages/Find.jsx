import React, { useState } from 'react';
import { Link } from 'react-router-dom'





const Find = () => {

    const [isSubMenuVisible, setSubMenuVisible] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuVisible(!isSubMenuVisible);
    };


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
                    <div className="find__box">
                        <div className="box01">
                            <h2>영자네 유기견 보호소</h2>
                            <div className='boximg'>
                                <img src="/" alt="/" />
                            </div>
                        </div>
                        <div className="box02">
                            <div className='boxInfo'>
                                <div className='name'>지역</div>
                                <div className='anwser'>대구시</div>
                            </div>
                            <div className='boxInfo'>
                                <div className='name'>담당자</div>
                                <div className='anwser'>이영자</div>
                            </div>
                            <div className='boxInfo'>
                                <div className='name'>전화번호</div>
                                <div className='anwser'>010-5555-5555</div>
                            </div>
                        </div>
                        <div className="box03">
                            <div className='boxInfo'>
                                <div className='name'>상세주소</div>
                                <div className='anwser'>대구시 수정구 매호동 6~3번지</div>
                            </div>
                            <div className='boxInfo'>
                                <div className='name'>특이사항</div>
                                <div className='anwser'>
                                    700마리의 동물을 보호 하고있습니다.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="find__box">
                        <div className="box01">
                            <h2>영자네 유기견 보호소</h2>
                            <div className='boximg'>
                                <img src="/" alt="/" />
                            </div>
                        </div>
                        <div className="box02">
                            <div className='boxInfo'>
                                <div className='name'>지역</div>
                                <div className='anwser'>대구시</div>
                            </div>
                            <div className='boxInfo'>
                                <div className='name'>담당자</div>
                                <div className='anwser'>이영자</div>
                            </div>
                            <div className='boxInfo'>
                                <div className='name'>전화번호</div>
                                <div className='anwser'>010-5555-5555</div>
                            </div>
                        </div>
                        <div className="box03">
                            <div className='boxInfo'>
                                <div className='name'>상세주소</div>
                                <div className='anwser'>대구시 수정구 매호동 6~3번지</div>
                            </div>
                            <div className='boxInfo'>
                                <div className='name'>특이사항</div>
                                <div className='anwser'>
                                    700마리의 동물을 보호 하고있습니다.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="find__box">
                        <div className="box01">
                            <h2>영자네 유기견 보호소</h2>
                            <div className='boximg'>
                                <img src="/" alt="/" />
                            </div>
                        </div>
                        <div className="box02">
                            <div className='boxInfo'>
                                <div className='name'>지역</div>
                                <div className='anwser'>대구시</div>
                            </div>
                            <div className='boxInfo'>
                                <div className='name'>담당자</div>
                                <div className='anwser'>이영자</div>
                            </div>
                            <div className='boxInfo'>
                                <div className='name'>전화번호</div>
                                <div className='anwser'>010-5555-5555</div>
                            </div>
                        </div>
                        <div className="box03">
                            <div className='boxInfo'>
                                <div className='name'>상세주소</div>
                                <div className='anwser'>대구시 수정구 매호동 6~3번지</div>
                            </div>
                            <div className='boxInfo'>
                                <div className='name'>특이사항</div>
                                <div className='anwser'>
                                    700마리의 동물을 보호 하고있습니다.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="find__box">
                        <div className="box01">
                            <h2>영자네 유기견 보호소</h2>
                            <div className='boximg'>
                                <img src="/" alt="/" />
                            </div>
                        </div>
                        <div className="box02">
                            <div className='boxInfo'>
                                <div className='name'>지역</div>
                                <div className='anwser'>대구시</div>
                            </div>
                            <div className='boxInfo'>
                                <div className='name'>담당자</div>
                                <div className='anwser'>이영자</div>
                            </div>
                            <div className='boxInfo'>
                                <div className='name'>전화번호</div>
                                <div className='anwser'>010-5555-5555</div>
                            </div>
                        </div>
                        <div className="box03">
                            <div className='boxInfo'>
                                <div className='name'>상세주소</div>
                                <div className='anwser'>대구시 수정구 매호동 6~3번지</div>
                            </div>
                            <div className='boxInfo'>
                                <div className='name'>특이사항</div>
                                <div className='anwser'>
                                    700마리의 동물을 보호 하고있습니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Find