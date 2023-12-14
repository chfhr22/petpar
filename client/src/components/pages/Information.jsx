import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Information = () => {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };
    return (
        <div id='infoSection' className='pages'>
            <div className="info__wrap">
                <div className="cate">
                    <Link to="/" className={isActive('/info') ? 'active' : ''}>전체보기</Link>
                    <Link to="/" className={isActive('/') ? 'active' : ''}>입양 가이드</Link>
                    <Link to="/" className={isActive('/') ? 'active' : ''}>질병</Link>
                    <Link to="/" className={isActive('/') ? 'active' : ''}>강아지</Link>
                    <Link to="/" className={isActive('/') ? 'active' : ''}>고양이</Link>
                </div>
                <div className="info">

                    <Link to="/info"className='info__box'>
                        <div className="info__img"></div>
                        <div className='info__box__cont'>
                            <div className="info__cate">
                                강아지
                            </div>
                            <div className="info__title">
                                강아지가 먹으면 안되는 음식
                            </div>
                            <div className="info__cont">
                                반려인이라면 꼭 알아야 하는 정보입니다.
                                1.포도 : 포도는 강아지에게 해로운 독성 있...
                            </div>
                            <div className='info__author'>
                                <div className="date">
                                    2023-12-13
                                </div>
                                <div className="author">
                                    초록
                                </div>
                            </div>
                        </div>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Information