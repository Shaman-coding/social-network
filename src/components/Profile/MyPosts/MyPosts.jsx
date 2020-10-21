import React from 'react';
import Post from './Post/Post';
import P from './MyPost.module.css'






const MyPosts =  (props) => {


  let postElement = props.posts.map(p => <Post message={p.message} count={p.count} id={p.id}/>)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }
    return(
        <div className={P.post}>
              <h3>My posts</h3>  
                <div>
                    <div>
                      <textarea ref={newPostElement}></textarea>
                    </div>

                    <div>
                      <button onClick={addPost}>Send</button>
                    </div>
                   
                </div>

                  <div>
                    {postElement}
                    
                  </div>
                          
        </div>
    )
}

export default MyPosts;