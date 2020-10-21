import React from 'react';
import { NavLink } from 'react-router-dom';
import P from './Friendly.module.css';





const Friendly = (props) => {
    return (
        <div  className={P.FriendsItem + " " + P.active}>
            <NavLink to={'/Friends/ ' + props.id}> {props.name}</NavLink>  
        </div>
    )


    
   
}


export default Friendly;