const ADD_NEW_MESSAGE_ACTION = "ADD-NEW-MESSAGE";

const MessageReduser = (state, action) => {
    if (action.type === ADD_NEW_MESSAGE_ACTION) {
        let newMess = {
            id: 8,
            message: state.messages
        };
        state.MessageDate.push(newMess);

    }

    return state;
}

export default MessageReduser;