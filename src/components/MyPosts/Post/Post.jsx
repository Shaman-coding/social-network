import React from 'react';
import P from './Post.module.css';

function Post () {
    return (
        
            <div className={P.Post}>
                <img className={P.img} src='https://www.flaticon.com/svg/static/icons/svg/3468/3468106.svg'/>
                 post 1
                <span>Like</span>
            </div>
            
        
    )
}


export default Post;