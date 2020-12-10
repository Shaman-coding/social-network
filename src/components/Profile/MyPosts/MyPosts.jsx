import React from 'react';
import Post from './Post/Post';
import P from './MyPost.module.css'



 
const MyPosts =  (props) => {

  
  let postElement = props.posts.map(p => <Post message={p.message} count={p.count} id={p.id}/>)


  let OnAddPost = () => {
      props.addPost();
  }
  
  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text)

  }
    return(
        <div className={P.post}>
              <h3>My posts</h3>  
                <div>
                    <div>
                      <textarea onChange={onPostChange}
                                value={props.newPostText}/>
                    </div>

                    <div>
                      <button onClick={OnAddPost}>Send</button>
                    </div>
                   
                </div>

                  <div>
                    {postElement}
                    
                  </div>
                          
        </div>
    )
}

export default MyPosts;





