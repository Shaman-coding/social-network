const ADD_NEW_MESSAGE_ACTION = "ADD-NEW-MESSAGE";

const MessageReduser = (state, action) => {
   
    switch (action.type) {
        case ADD_NEW_MESSAGE_ACTION:
            let newMess = {
                id: 8,
                message: action.messages
            };
            state.MessageDate.push(newMess);
            return state
        default:
            return state;
    }
}
export let AddNewMessageAction = (text) => ({type: ADD_NEW_MESSAGE_ACTION, messages: text})
export default MessageReduser;