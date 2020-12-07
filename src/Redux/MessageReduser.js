const ADD_NEW_MESSAGE_ACTION = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";


let defaultState = {
    FriendsData: [

        {id:1, name: 'Kirill'},
        {id:2, name: 'Dasha'},
        {id:3, name: 'Maxim'},
        {id:4, name: 'Oleg'},
        {id:5, name: 'Pasha'}

    ],
    MessageDate: [
        {id:1, message:'Hey,bro'},
        {id:2, message:"i'm good,you ?"},
        {id:3, message:'Nice,bro'},
        {id:4, message:'oo,men'},
        {id:5, message:'i too'},
        {id:6, message:'Eeeeeee'},
        {id:7, message:'i do it'}
    ],

    newMessage: "eeeeeeeeeeeee"
};

const MessageReduser = (state = defaultState, action) => {

    switch (action.type) {

        case ADD_NEW_MESSAGE_ACTION:

            let newMess = {  id: 8, message: state.newMessage  };
            state.MessageDate.push(newMess);
            state.newMessage='';
            return state

        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newMessageText;
            return state;
        default:
            return state;
    }
}
export let AddNewMessageAction = () => ({type: ADD_NEW_MESSAGE_ACTION})
export let UpdateNewMessage = (newMessage) => ({type: UPDATE_NEW_MESSAGE, newMessageText: newMessage});

export default MessageReduser;