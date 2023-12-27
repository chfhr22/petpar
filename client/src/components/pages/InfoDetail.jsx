import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Info } from '../data/Info'

const InfoDetail = () => {
  const { infoId } = useParams();
  const infoNum = Info[infoId]

  console.log("infoId : " ,infoId)
  return (
    <div id='InfoDetailPage' className='pages'>
        <div className='info__detail__page'>
          <h2 className='info__detail__title'>
            {infoNum.title}
          </h2>
          <div className="info__detail__author">
            <div className="author">{infoNum.author}</div>
            <div className="date">{infoNum.date}</div>
          </div>
          <div className="info__detail__cont">
            <div className="info__detail__img"><img src={`${infoNum.img}`} alt="" /></div>
            <div className="info__detail__text">
              {infoNum.desc}
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