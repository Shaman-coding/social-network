const ADD_POST_ACTION = "ADD-POST";
const UPDATE_NEW_POST_TEXT_ACTION = "UPDATE-NEW-POST-TEXT";
const SET_PERSON = "SET_PERSON";

let defaultState = {
    posts:[
        {id:1, message: 'I know props', count: 17},
        {id:2, message: 'Good,bro', count: 28}
    ],
    newPostText:'it-kamasutra',
    Person: null

};

    const DialogsReduser = (state = defaultState, action) => {
    
            switch (action.type) {
                case ADD_POST_ACTION: 
                
                    return {
                        ...state,
                        posts: [...state.posts, { id: 3, message: state.newPostText,  count: 0 }],
                        newPostText:''
                    }
                

                case UPDATE_NEW_POST_TEXT_ACTION: 
                    return {
                        ...state,
                        newPostText: action.newText
                    }

            
            case SET_PERSON: 
                return {...state, Person: action.setPerson }
            
            default:
                return state
        }
        
    }
    export let addPostActionCreator = () => ({type: ADD_POST_ACTION})
    export let UpdateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT_ACTION, newText: text})
    export let setPerson = (setPerson) => ({type:SET_PERSON, setPerson })
    export default DialogsReduser;

