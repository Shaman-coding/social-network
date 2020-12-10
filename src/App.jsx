import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/Dialogs-Container';


function App (props) {


  return (

        <div className="App-wrapper">
            <Header/>
           {/*  <Navbar state={props.state.siteBar}/> */}
                
            <div className='app-wrapper-content'>
              <Route  path= '/dialogs'  render = { () => <DialogsContainer  /> }/>
              <Route  path= '/profile'  render = { () => <Profile  />}/>
              <Route  path= '/News'     render = { () => <News />}/>
              <Route  path= '/Music'    render = { () => <Music />}/>
              <Route  path= '/Settings' render = { () => <Settings />}/>
            
            </div>

        </div>
   
    
  );
}

export default App;
