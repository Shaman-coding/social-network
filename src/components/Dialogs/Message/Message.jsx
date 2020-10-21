import React from 'react';
import P from './Message.module.css';




const Message = (props) => {
    return (
        <div className={P.messageItem}>{props.message}</div>
    )
}


export default Message;