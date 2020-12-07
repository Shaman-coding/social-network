const ADD_POST_ACTION = "ADD-POST";
const UPDATE_NEW_POST_TEXT_ACTION = "UPDATE-NEW-POST-TEXT";

let defaultState = {
    posts:[
        {id:1, message: 'I know props', count: 17},
        {id:2, message: 'Good,bro', count: 28}
    ],
    newPostText:'it-kamasutra'
};

 const DialogsReduser = (state = defaultState, action) => {
  
    switch (action.type) {
        case ADD_POST_ACTION:
            let newPost = {
                id: 3,
                message: state.newPostText,
                count: 0
            }
            state.posts.push(newPost);
            state.newPostText='';
            return state;

        case UPDATE_NEW_POST_TEXT_ACTION:
            state.newPostText = action.newText;
            return state;
        default:
            return state;

    }
    

}
export let addPostActionCreator = () => ({type: ADD_POST_ACTION})
export let UpdateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT_ACTION, newText: text})

export default DialogsReduser;

