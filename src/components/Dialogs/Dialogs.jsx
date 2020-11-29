import React from 'react';
import { AddNewMessageAction } from '../../Redux/state';
import P from './Dialogs.module.css';
import Friendly from './Friendly/Friendly';
import Message from './Message/Message';




const Dialogs = (props) => {

    let newAddMessage = React.createRef();  /* Создаю ссылку для объекта  */
    
   let addMessage = () => { /* Создаю функцию  */
        let text = newAddMessage.current.value;  /* считывает значение  которое было введено пользователем  */
        props.dispatch(ADD_NEW_MESSAGE_ACTION(text) ) //text
   }
    
    let frendlyMap = props.State.FriendsData.map(f => <Friendly name={f.name} id={f.id}/>)
    
    let messageDate = props.State.MessageDate.map(m => <Message message={m.message} id={m.id}/>)
    


    return (
        <div className={P.Dialogs}>
           <div className={P.Friend}>

               { frendlyMap }             
           </div>
           <div className='message'>

               { messageDate }
            
           </div>

            <div className={P.addMessage}>
                <textarea ref= { newAddMessage }></textarea>  {/* Делаю ссылку textarea */}
                <button onClick={ addMessage }>Send</button> {/* При нажатии на кнопку вызываю функцию = addMessage */}
            </div>
           
        </div>
    )
}

export default Dialogs;