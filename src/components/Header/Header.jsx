import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header (props) {
   
    return (
        <div className={"loginWrapper"}>
             <header className='header'>
                <img src='https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png' alt='header'/>
            </header>

            <div className={'wrapperLoginAuth'}>

                
                    { props.isAuth ? props.login
                    : <NavLink className={'loginAuth'} to={'/Login'}>Login</NavLink>
                    }
                  <div>
                 
                  </div>
                
            </div>
               
          
            
        </div>
   
    )
}


export default Header