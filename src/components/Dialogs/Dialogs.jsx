import React from 'react';
import P from './Dialogs.module.css';
import Friendly from './Friendly/Friendly';
import Message from './Message/Message';



const Dialogs = (props) => {

   debugger;
    
   let OnAddMessage = () => { 
        props.addMessage(TextMessage) 
   }

  let TextMessage = React.createRef()

   let UpdateNewMessage = () => {
       let text = TextMessage.current.value;
       props.onMessageChange(text)
   }
  
    let frendlyMap = props.FriendsData.map(f => <Friendly name={f.name} id={f.id}/>)
    
    let messageDate = props.MessageDate.map(m => <Message message={m.message} id={m.id}/>)
    


    return (
        <div className={P.Dialogs}>
           <div className={P.Friend}>

               { frendlyMap }             
           </div>
           <div className='message'>

               { messageDate }
            
           </div>

            <div className={P.addMessage}>

                <textarea  value={props.NewMessage}
                           ref={TextMessage}
                           onChange={UpdateNewMessage}         
                />
                
                <button onClick = { OnAddMessage }>Send</button> 
            </div>
           
        </div>
    )
}

export default Dialogs;