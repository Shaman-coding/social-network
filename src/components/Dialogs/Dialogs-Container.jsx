import React from 'react';
import {AddNewMessageAction, UpdateNewMessage} from '../../Redux/MessageReduser';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    
    debugger;
 
    let State = props.Store.getState().DialogsPage;
    
   let addMessage = (text) => { 
       props.Store.dispatch(AddNewMessageAction(text)) 
   }

   let onMessageChange = (NewTextMessage) => {
       let messages = (UpdateNewMessage(NewTextMessage))
       props.Store.dispatch(messages)
   }
 
   return <Dialogs FriendsData={State.FriendsData}
                   MessageDate={State.MessageDate}
                   NewMessage={State.newMessage}
                   addMessage={addMessage}
                   onMessageChange={onMessageChange}
                    />
                   
    
}

export default DialogsContainer;