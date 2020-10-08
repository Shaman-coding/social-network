import React from 'react';
import { NavLink } from 'react-router-dom';
import P from './Dialogs.module.css';

const Friendly = (props) => {
    return (
        <div  className={P.FriendsItem + " " + P.active}>
            <NavLink to={'/Friends/ ' + props.id}> {props.name}</NavLink>  
        </div>
    )
    
}

const Message = (props) => {
    return (
        <div className={P.messageItem}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={P.Dialogs}>
           <div className={P.Friend}>

               <Friendly name='Kirill' id='1' />
               <Friendly name='Dasha' id='2' />
               <Friendly name='Maxim' id='3' />
               <Friendly name='Oleg' id='4' />
               <Friendly name='Pasha' id='5' />               
           </div>
           <div className='message'>
               <Message message='Hey,bro'/>
               <Message message="i'm good,you ?"/>
               <Message message='Nice,bro'/>
               <Message message='oo,men'/>
               <Message message='i too'/>
               <Message message='Eeeeeee'/>
                <Message message='i do it'/>

              
           </div>
           
        </div>
    )
}

export default Dialogs;