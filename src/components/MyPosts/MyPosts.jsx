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
                    <div className={i.item}>
                      <img  src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'/>
                      post 1
                    </div>
                    <div className={i.item}>
                      <img  src='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'/>
                      post 2
                    </div>
                    <div className={i.item}>
                      <img  src='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'/>
                      post 3
                    </div>
                  </div>

                <Post/>

        </div>
    )
}

export default MyPosts;