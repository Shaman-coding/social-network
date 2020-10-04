import React from 'react';
import MyPosts from '../MyPosts/MyPosts';
import P from './Profile.module.css'

function Profile () {
    return (
        <div >
            <div>
              <img src='https://i.ytimg.com/vi/qBNi4PlyPcQ/maxresdefault.jpg'/>
            </div>
           
              <div>
                ava + description
              </div>

          <MyPosts/>
          
             
       </div>
    )
}


export default Profile;