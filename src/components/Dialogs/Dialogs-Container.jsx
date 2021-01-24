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

  
  const DialogsContainer = connect(mapStateToProps, {AddNewMessageAction, UpdateNewMessage}) (Dialogs);

export default DialogsContainer;