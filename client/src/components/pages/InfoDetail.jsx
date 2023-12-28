import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Info } from '../data/Info'

const InfoDetail = () => {
  const { num } = useParams();
  const item = Info.find(infoItem => infoItem.num === parseInt(num, 10));

  if (!item) {
    return <div>해당 정보를 찾을 수 없습니다.</div>;
  }

  console.log(num)

  return (
    <div id='InfoDetailPage' className='pages'>
        <div className='info__detail__page'>
          <h2 className='info__detail__title'>
            {item.title}
          </h2>
          <div className="info__detail__author">
            <div className="author">{item.author}</div>
            <div className="date">{item.date}</div>
          </div>
          <div className="info__detail__cont">
            <div className="info__detail__img"><img src={item.img} alt="" /></div>
            <div className="info__detail__text">
              {item.desc}
            </div>
          </div>
        </div>

        <div className="info__detail__button">
          <Link to="/" className='prev'>이전으로</Link>
          <Link to="/info" className='lsit'>목록으로</Link>
          <Link to="/" className='next'>다음으로</Link>
        </div>
    </div>
  )
}

export default InfoDetail