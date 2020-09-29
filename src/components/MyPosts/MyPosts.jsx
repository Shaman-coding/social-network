import React from 'react';
import i from './MyPost.module.css';
import Post from './Post/Post';


const MyPosts =  () => {
    return(
        <div>
                My posts
                  <div>
                    <textarea></textarea>
                    <button type='submit'>Send</button>
                  </div>

                  <div>
                    <Post message='I know props' count='15'/>
                    <Post message='Good,bro' count='20'/>
                    
                  </div>
                          
        </div>
    )
}

export default MyPosts;