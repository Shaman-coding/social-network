const ADD_POST_ACTION = "ADD-POST";
const UPDATE_NEW_POST_TEXT_ACTION = "UPDATE-NEW-POST-TEXT";


 const DialogsReduser = (state, action) => {
     
    if (action.type === ADD_POST_ACTION) {
        let newPost = {
            id: 3,
            message: state.newPostText,
            count: 0
        }
        state.posts.push(newPost);
        state.newPostText='';

    }else if (action.type === UPDATE_NEW_POST_TEXT_ACTION) {
        state.newPostText = action.newText;
    }
    

    return state;

}


export default DialogsReduser;

