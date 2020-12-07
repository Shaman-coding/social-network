import * as serviceWorker from './serviceWorker';
import Store from "./Redux/store-Redux";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom';



 let RenderEntireTree = (State) => {
    ReactDOM.render(
        <BrowserRouter>
            <App State = {State}
                 dispatch = {Store.dispatch.bind(Store)}
                 Store={Store} />
                
        </BrowserRouter>,document.getElementById('root')
      );

}
RenderEntireTree(Store.getState());

Store.subscribe(() => {
    let State = Store.getState();
    RenderEntireTree(State)
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
