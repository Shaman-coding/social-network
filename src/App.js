import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';




function App (props) {
  
 
  
  return (

        <div className="App-wrapper">
            <Header/>
            <Navbar State={props.State.siteBar}/>
                
            <div className='app-wrapper-content'>
              <Route  path= '/dialogs'  render = { () => <Dialogs State={props.State.DialogsPage}  addNewMessage={props.addNewMessage}/> }/>
              <Route  path= '/profile'  render = { () => <Profile State={props.State.MessagePage} addPost={props.addPost}/>}/>
              <Route  path= '/News'     render = { () => <News />}/>
              <Route  path= '/Music'    render = { () => <Music />}/>
              <Route  path= '/Settings' render = { () => <Settings />}/>
            
            </div>
          
        </div>
   
    
  );
}

export default App;
