import React from 'react';
import './ProfileInfo.module.css';
import P from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div >
              <img src='https://i.ytimg.com/vi/qBNi4PlyPcQ/maxresdefault.jpg' alt='other'/>
            
           
            <div className={P.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}


export default ProfileInfo;