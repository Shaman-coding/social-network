import React from 'react';
import MyPostsContainer from './MyPosts/MyPost-Container';
import P from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile (props) {  
    return (
        <div className={P.wrapperProfile} >
            <ProfileInfo/>
            <MyPostsContainer /> 
        </div>
    )
}


export default Profile;