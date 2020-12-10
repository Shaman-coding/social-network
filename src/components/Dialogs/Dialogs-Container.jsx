import {AddNewMessageAction, UpdateNewMessage} from '../../Redux/MessageReduser';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

  let mapStateToProps = (state) => {
   
    return {
      FriendsData: state.FriendsData,
      MessageDate: state.MessageDate,
      NewMessage: state.newMessage
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