import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



function App (props) {
  return (
    <BrowserRouter>

        <div className="App-wrapper">
          <Header/>
          <Navbar/>
               
          <div className='app-wrapper-content'>
            <Route exact path='/dialogs' component={Dialogs}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/News' component={News}/>
            <Route exact path='/Music' component={Music}/>
            <Route exact path='/Settings' component={Settings}/>
           
          </div>
          
        
        </div>
    </BrowserRouter>
    
  );
}

export default App;
