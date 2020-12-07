import React from 'react';
import {AddNewMessageAction, UpdateNewMessage} from '../../Redux/MessageReduser';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    
   
 
    let State = props.Store.getState().DialogsPage;
    
   let addMessage = () => { 
       props.Store.dispatch(AddNewMessageAction()) 
   }

   let onMessageChange = (NewTextMessage) => {
       let newMessage = (UpdateNewMessage(NewTextMessage))
       props.Store.dispatch(newMessage)
   }
 
   return <Dialogs FriendsData={State.FriendsData}
                   MessageDate={State.MessageDate}
                   NewMessage={State.newMessage}
                   addMessage={addMessage}
                   onMessageChange={onMessageChange}
                    />
                   
    
}

export default DialogsContainer;