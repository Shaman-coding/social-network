import React from 'react';
import Post from './Post/Post';
import P from './MyPost.module.css'



let postMessage = [
  {id:1, message: 'I know props', count: 17},
  {id:2, message: 'Good,bro', count: 28}
] 

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
                    <Post message={postMessage[0].message} count={postMessage[0].count} />
                    <Post message={postMessage[1].message} count={postMessage[1].count} />
                    
                  </div>
                          
        </div>
    )
}

export default MyPosts;