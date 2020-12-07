import {combineReducers, createStore} from "redux";
import MessageReduser from "./MessageReduser";
import DialogsReduser from "./DialogsReduser";
import siteBarReduser from "./siteBarReduser";


let redusers = combineReducers({
    DialogsPage: MessageReduser,
    MessagePage: DialogsReduser,
    siteBar: siteBarReduser
});

let store = createStore(redusers);
export default store;