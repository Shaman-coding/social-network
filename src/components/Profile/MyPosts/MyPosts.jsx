import React from 'react';
import Post from './Post/Post';
import P from './MyPost.module.css'
import { addPostActionCreator, UpdateNewPostActionCreator } from '../../../Redux/DialogsReduser';



 
const MyPosts =  (props) => {

  let postElement = props.posts.map(p => <Post message={p.message} count={p.count} id={p.id}/>)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator()); 
  }
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = (UpdateNewPostActionCreator(text) );
    props.dispatch(action)
  }
    return(
        <div className={P.post}>
              <h3>My posts</h3>  
                <div>
                    <div>
                      <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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





