import React from 'react'
import { useLocation } from 'react-router-dom'
import Chat from '../contents/Chat';
import RepleArea from '../reple/RepleArea';

const Footer = () => {
    const location = useLocation();

    let contentToRender;

    if (location.pathname.startsWith("/detail")) {
        contentToRender = <RepleArea />;
    } else if (location.pathname == "/find") {
        contentToRender = <></>
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