import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import P from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile (props) {
    
   
    
    return (
        <div >
            
            <ProfileInfo/>
            <MyPosts posts={props.State.posts} addPost={props.addPost}/>
          
        </div>
    )
}


export default Profile;