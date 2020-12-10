import React from 'react';
import P from './Dialogs.module.css';
import Friendly from './Friendly/Friendly';
import Message from './Message/Message';



const Dialogs = (props) => {
    
    debugger;
    let frendlyMap = props.FriendsData.map(f => <Friendly name={f.name} id={f.id}/>)
        
    let messageDate = props.MessageDate.map(m => <Message message={m.message} id={m.id}/>)

   let OnAddMessage = () => { 
        props.addMessage() 
   }

   let UpdateNewMessage = (e) => {
       let text = e.target.value;
       props.onMessageChange(text)
   }
  
    return (
        <div className={P.Dialogs}>
           <div className={P.Friend}>

               { frendlyMap }             
           </div>
           <div className='message'>

               { messageDate }
            
           </div>

            <div className={P.addMessage}>
                <textarea onChange={UpdateNewMessage} 
                          value={props.NewMessage}/>       
                <button onClick = { OnAddMessage }>Send</button> 
            </div>
           
        </div>
    )
}

export default Dialogs;