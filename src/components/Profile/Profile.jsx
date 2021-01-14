import React from 'react';
import MyPostsContainer from './MyPosts/MyPost-Container';
import P from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile (props) {  
    /* debugger; */
    return (
        <div className={P.wrapperProfile} >
            <ProfileInfo Person={props.Person}/>
            <MyPostsContainer /> 
        </div>
    )
}


export default Profile;