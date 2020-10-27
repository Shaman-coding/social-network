import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './Redux/state';
import {BrowserRouter} from 'react-router-dom';
import {addNewMessage} from './Redux/state';



export let RenderEntireTree = (State) => {

    ReactDOM.render(
        <BrowserRouter>
          
            <App State={State} addPost={addPost} addNewMessage={addNewMessage}/>
          
        </BrowserRouter>,document.getElementById('root')
       
      );

}





  