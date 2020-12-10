import { connect } from 'react-redux';
import { addPostActionCreator, UpdateNewPostActionCreator } from '../../../Redux/DialogsReduser';
import MyPosts from "./MyPosts";

        let mapStateToProps = (state) => {
            return {
                posts: state.MessagePage.posts,
                newPostText: state.MessagePage.newPostText
            }
        }

        let mapDispatchToProps = (dispatch) => {
            return {
                addPost: () =>  {
                    dispatch(addPostActionCreator());
                },
                onPostChange: (text) => {
                    let action = (UpdateNewPostActionCreator(text) );
                    dispatch(action)
                }
            }
        }

      
     const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);


export default MyPostsContainer;





