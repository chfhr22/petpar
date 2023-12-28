import React from 'react'
import { useLocation } from 'react-router-dom'
import Chat from '../contents/Chat';
import RepleArea from '../reple/RepleArea';
import PostMap from '../post/PostMap';

const Footer = () => {
    const location = useLocation();

    let contentToRender;

    if (location.pathname.startsWith("/detail")) {
        contentToRender = <RepleArea />;
<<<<<<< HEAD
    } else if (location.pathname == "/find") {
        contentToRender = <PostMap />
=======
    } else if (location.pathname === "/find") {
        contentToRender = <></>
>>>>>>> fdaaebed48cd97620388c05d4ff5cf5d8d02cf57
    } else {
        contentToRender = <Chat />
    }

    return (
        <div id='footerSection' className='sec'>
            {contentToRender}
        </div>
    )
}

export default Footer