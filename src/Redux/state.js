import DialogsReduser from "./DialogsReduser";
import MessageReduser from "./MessageReduser";

const ADD_POST_ACTION = "ADD-POST";
const UPDATE_NEW_POST_TEXT_ACTION = "UPDATE-NEW-POST-TEXT";
const ADD_NEW_MESSAGE_ACTION = "ADD-NEW-MESSAGE";



let Store = {
   
    _State: {

        DialogsPage: {
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
        },
        MessagePage:{
            posts:[
                {id:1, message: 'I know props', count: 17},
                {id:2, message: 'Good,bro', count: 28}
            ],
            newPostText:'it-kamasutra'
        },
        siteBar:{
            friend:[
                {id:1, name: 'Kirill'},
                {id:2, name: 'Dasha'},
                {id:3, name: 'Maxim'}

            ]
        }
    },
    _callSubscriber() {
        console.log('State changet')
    },
    getState() {
        return this._State;
    },
    subscribe (observer)  {
         
      this._callSubscriber = observer;

    },

    dispatch(action) {
        
        this._State.MessagePage = MessageReduser(this._State.MessagePage, action);
        this._State.DialogsPage = DialogsReduser(this._State.DialogsPage, action);
        

        this._callSubscriber(this._State);
    }

}


export let addPostActionCreator = () => ({type: ADD_POST_ACTION})
export let UpdateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT_ACTION, newText: text})
export let AddNewMessageAction = (text) => ({type: ADD_NEW_MESSAGE_ACTION, messages: text})


export default Store;
window.Store = Store;













