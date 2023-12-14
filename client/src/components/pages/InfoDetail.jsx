import React from 'react'
import { Link } from 'react-router-dom'

const InfoDetail = () => {
  return (
    <div id='InfoDetailPage' className='pages'>
        <div className='info__detail__page'>
          <h2 className='info__detail__title'>
            강아지가 먹으면 안되는 음식들
          </h2>
          <div className="info__detail__author">
            <div className="author">초록</div>
            <div className="date">2023-12-14</div>
          </div>
          <div className="info__detail__cont">
            <div className="info__detail__img"></div>
            <div className="info__detail__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet qui ipsam vitae aperiam quod nisi veniam optio hic aliquam cumque, beatae voluptate modi delectus, laborum tempore reiciendis soluta quibusdam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam assumenda nisi qui voluptatum eveniet deserunt cupiditate sunt earum voluptatem nemo placeat quam temporibus laudantium, eius fugit perspiciatis autem vero nobis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vero odit dolores quasi deleniti consequatur eum facilis commodi nobis quidem. Hic nisi minus at reprehenderit. Consectetur et odit ratione ea.
            </div>
          </div>
        </div>

        <div className="info__detail__button">
          <Link to="/" className='prev'>이전으로</Link>
          <Link to="/" className='lsit'>목록으로</Link>
          <Link to="/" className='next'>다음으로</Link>
        </div>
    </div>
  )
}

export default InfoDetail