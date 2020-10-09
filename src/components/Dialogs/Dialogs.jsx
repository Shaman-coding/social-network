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




const Message = (props) => {
    return (
        <div className={P.messageItem}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={P.Dialogs}>
           <div className={P.Friend}>

               <Friendly name={FriendsData[0].name} id={FriendsData[0].id} />
               <Friendly name={FriendsData[1].name} id={FriendsData[1].id} />
               <Friendly name={FriendsData[2].name} id={FriendsData[2].id} />
               <Friendly name={FriendsData[3].name} id={FriendsData[3].id} />
               <Friendly name={FriendsData[4].name} id={FriendsData[4].id} />               
           </div>
           <div className='message'>
               <Message message={MessageDate[0].message}/>
               <Message message={MessageDate[1].message}/>
               <Message message={MessageDate[2].message}/>
               <Message message={MessageDate[3].message}/>
               <Message message={MessageDate[4].message}/>
               <Message message={MessageDate[5].message}/>
               <Message message={MessageDate[6].message}/>

              
           </div>
           
        </div>
    )
}

export default Dialogs;