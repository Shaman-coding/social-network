import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import P from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile (props) {
    
   
    
    return (
        <div >
            
            <ProfileInfo/>
            <MyPosts posts={props.State.posts}/>
          
        </div>
    )
}


export default Profile;