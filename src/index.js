import * as serviceWorker from './serviceWorker';
import { RenderEntireTree } from './render';
import State from './Redux/state';



RenderEntireTree(State);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
