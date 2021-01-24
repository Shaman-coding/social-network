import {applyMiddleware, combineReducers, createStore} from "redux";
import MessageReduser from "./MessageReduser";
import DialogsReduser from "./DialogsReduser";
import siteBarReduser from "./siteBarReduser";
import UserFiendReduser from "./UserFindReduser";
import LoginAuthMe from "./LoginAuthMe";
import thunkMiddleware from 'redux-thunk';


let redusers = combineReducers ({
    DialogsPage: MessageReduser,
    MessagePage: DialogsReduser,
    siteBar: siteBarReduser,
    UserFind: UserFiendReduser,
    LoginMe: LoginAuthMe
    
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;

