import  {RenderEntireTree} from '../render';

let State = {

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
            ] 
     },

     siteBar:{
         friend:[
             {id:1, name: 'Kirill'},
             {id:2, name: 'Dasha'},
             {id:3, name: 'Maxim'}
             
         ]
     }
}



export let addNewMessage = (messages) => {
    let newMess = {
        id:8,
        message: messages
    };
    State.DialogsPage.MessageDate.push(newMess);
    RenderEntireTree(State);
}

export let addPost =  (postMessage) => {
    let newPost = {
        id: 3,
        message:postMessage,
        count: 0
    };
    State.MessagePage.posts.push(newPost);
    RenderEntireTree(State);
}

export default State;
