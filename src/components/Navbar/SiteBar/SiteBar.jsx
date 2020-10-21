import React from 'react';
import S from './SiteBar.module.css';







let SiteBar = (props) => {
 
    return (
       <div className={S.blockFriend}>
       
         <div className={S.wrapper}>
            <div className={S.icon}></div>
            
         </div>


         <div> {props.name} </div>
        
       </div> 
    )
}



export default SiteBar;