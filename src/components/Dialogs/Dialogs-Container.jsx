import {AddNewMessageAction, UpdateNewMessage} from '../../Redux/MessageReduser';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

  let mapStateToProps = (state) => {
   
    return {
      FriendsData: state.DialogsPage.FriendsData,
      MessageDate: state.DialogsPage.MessageDate,
      NewMessage: state.DialogsPage.newMessage
    }    
  }

  let mapDispatchToProps = (dispatch) => {
    return {
      addMessage: () => {
        dispatch(AddNewMessageAction()) 
      },

      onMessageChange: (NewTextMessage) => {
        let newMessage = (UpdateNewMessage(NewTextMessage))
        dispatch(newMessage)
      } 

    }
  
  }
  const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;