import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import P from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile (props) {  
    return (
        <div className={P.wrapperProfile} >
            <ProfileInfo/>
            <MyPosts posts={props.MessagePage.posts} 
                     dispatch={props.dispatch}
                     />
        </div>
    )
}


export default Profile;