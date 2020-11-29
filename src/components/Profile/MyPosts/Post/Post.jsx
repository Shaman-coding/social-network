import React from 'react';
import P from './Post.module.css';

function Post (props) {
    return (
        
            <div className={P.postItem} >
                <img className={P.img} src='https://www.flaticon.com/svg/static/icons/svg/3468/3468106.svg' alt='car'/>
                 {props.message}

                <span> Like {props.count}</span>
              
            </div>
            
        
    )
}


export default Post;