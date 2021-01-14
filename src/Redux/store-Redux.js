import {combineReducers, createStore} from "redux";
import MessageReduser from "./MessageReduser";
import DialogsReduser from "./DialogsReduser";
import siteBarReduser from "./siteBarReduser";
import UserFiendReduser from "./UserFindReduser";


let redusers = combineReducers ({
    DialogsPage: MessageReduser,
    MessagePage: DialogsReduser,
    siteBar: siteBarReduser,
    UserFind: UserFiendReduser
    
});

let store = createStore(redusers);
window.store = store;
export default store;

