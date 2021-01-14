import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/Dialogs-Container';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

function App (props) {


  return (

        <div className="App-wrapper">
            <Header/>
            <Navbar/>
                
            <div className= 'app-wrapper-content'>
              <Route  path= '/dialogs'  render = { () => <DialogsContainer  /> }/>
              <Route  path= '/profile/:userId'  render = { () => <ProfileContainer  />}/>
              <Route  path= '/News'     render = { () => <News />}/>
              <Route  path= '/Music'    render = { () => <Music />}/>
              <Route  path= '/Settings' render = { () => <Settings />}/>
              <Route  path= '/Users' render = { () => <UsersContainer/>}/>
            </div>

        </div>
   
    
  );
}

export default App;
