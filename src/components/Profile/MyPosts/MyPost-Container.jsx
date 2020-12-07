import React from 'react';
import { addPostActionCreator, UpdateNewPostActionCreator } from '../../../Redux/DialogsReduser';
import MyPosts from "./MyPosts";


const MyPostsContainer =  (props) => {

    let State = props.Store.getState();

    let addPost = () => {
        props.Store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = (UpdateNewPostActionCreator(text) );
        props.Store.dispatch(action)
    }


    return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts = {State.MessagePage.posts}
                    newPostText = {State.MessagePage.newPostText}
                    />;

}

export default MyPostsContainer;





