import React from 'react'
import { IoChatbubbles } from "react-icons/io5";
const Main = (props) => {
    return (
        <main>
            {props.children}
            <IoChatbubbles id='chat' />
        </main>
    )
}

export default Main