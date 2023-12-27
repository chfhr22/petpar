import { Link, useLocation } from 'react-router-dom';
import data from '../data/Info'

const Information = () => {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };
    return (
        <div id='infoSection' className='pages'>
            <div className="info__wrap">
                <div className="filter__wrap">
                    <ul>
                        <li><Link to="/" className={isActive('/info') ? 'active' : ''}>전체보기</Link></li>
                        <li><Link to="/" className={isActive('/') ? 'active' : ''}>입양 가이드</Link></li>
                        <li><Link to="/" className={isActive('/') ? 'active' : ''}>질병</Link></li>
                        <li><Link to="/" className={isActive('/') ? 'active' : ''}>강아지</Link></li>
                        <li><Link to="/" className={isActive('/') ? 'active' : ''}>고양이</Link></li>
                    </ul>
                </div>
                <div className="info">
                    {
                        data.map((item, index) => (
                            <Link to={`/info/${index}`} key={index} className='info__box'>
                                <div className="info__img"><img src={item.img} alt={item.title} /></div>
                                <div className='info__box__cont'>
                                    <div className="info__cate">
                                        {item.category}
                                    </div>
                                    <div className="info__title">
                                        {item.title}
                                    </div>
                                    <div className="info__cont">
                                        {item.desc}
                                    </div>
                                    <div className='info__author'>
                                        <div className="date">
                                            {item.date}
                                        </div>
                                        <div className="author">
                                            {item.author}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Information