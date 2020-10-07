import React from 'react';
import { NavLink } from 'react-router-dom';
import P from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={P.Dialogs}>
           <div className={P.Friend}>
                <NavLink to='/Kirill' className={P.FriendsItem + " " + P.active}>
                    Kirill
                </NavLink>
                <div className={P.FriendsItem}>
                    Dasha
                </div>
                <div className={P.FriendsItem}>
                    Maxim
                </div>
                <div className={P.FriendsItem}>
                    Oleg
                </div>
                <NavLink to='/Pasha' >
                    Pasha
                </NavLink>
           </div>
           <div className='message'>
               <div className={P.messageItem}>Hey,bro</div>
               <div className={P.messageItem}>i'm good,you ?</div>
               <div className={P.messageItem}>Nice,bro</div>
               <div className={P.messageItem}>oo,men </div>
               <div className={P.messageItem}>i too  </div>
           </div>
           
        </div>
    )
}

export default Dialogs;