import React from 'react';
import Post from './Post/Post';
import P from './MyPost.module.css'


const MyPosts =  (props) => {
    return(
        <div className={P.post}>
              <h3>My posts</h3>  
                <div>
                    <div>
                      <textarea></textarea>
                    </div>

                    <div>
                      <button type='submit'>Send</button>
                    </div>
                   
                </div>

                  <div>
                    <Post message='I know props' count='15' />
                    <Post message='Good,bro' count='20' />
                    
                  </div>
                          
        </div>
    )
}

export default MyPosts;