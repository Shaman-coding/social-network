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


let FriendsData = [
    
        {id:1, name: 'Kirill'},
        {id:2, name: 'Dasha'},
        {id:3, name: 'Maxim'},
        {id:4, name: 'Oleg'},
        {id:5, name: 'Pasha'}

    
];

let MessageDate = [
    {id:1, message:'Hey,bro'},
    {id:2, message:"i'm good,you ?"},
    {id:3, message:'Nice,bro'},
    {id:4, message:'oo,men'},
    {id:5, message:'i too'},
    {id:6, message:'Eeeeeee'},
    {id:7, message:'i do it'}
];



let frendlyMap = FriendsData.map(f => <Friendly name={f.name} id={f.id}/>)

let messgeDate = MessageDate.map(m => <Message message={m.message} id={m.id}/>)





const Dialogs = (props) => {
    return (
        <div className={P.Dialogs}>
           <div className={P.Friend}>

               { frendlyMap }             
           </div>
           <div className='message'>
               { messgeDate }
            
           </div>
           
        </div>
    )
}

export default Dialogs;