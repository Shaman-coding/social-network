import React from 'react';
import Post from './Post/Post';
import P from './MyPost.module.css'



let postsMessage = [
  {id:1, message: 'I know props', count: 17},
  {id:2, message: 'Good,bro', count: 28}
]


let postElement = postsMessage.map(p => <Post message={p.message} count={p.count} id={p.id}/>)


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
                    {postElement}
                    
                  </div>
                          
        </div>
    )
}

export default MyPosts;