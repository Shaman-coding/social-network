import React from 'react';

function Navbar () {
    return (
        <nav className='nav'>
            <div className='nav-item'>
              <a href='#'>Profile</a> 
            </div>

            <div className='nav-item'>
              <a href='#'>Message</a> 
            </div>

            <div className='nav-item'>
              <a href='#'>News</a> 
            </div>
            <div className='nav-item'>
              <a href='#'>Music</a> 
            </div>

            <div className='nav-item'>
              <a href='#'>Settings</a>
            </div>
       </nav>
    )
}

export default Navbar;