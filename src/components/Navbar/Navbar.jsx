import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import SiteBar from './SiteBar/SiteBar';




function Navbar (props) {

  let site = props.State.friend.map(s => <SiteBar name={s.name} />)  

    return (
        <nav className={s.nav}>
            <div className={s.item}>
              <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink> 
            </div>

            <div className={s.item}>
              <NavLink to='/Dialogs' activeClassName={s.active}>Message</NavLink> 
            </div>

            <div className={s.item}>
              <NavLink to='/News' activeClassName={s.active}>News</NavLink> 
            </div>
            <div className={s.item}>
              <NavLink to='/Music' activeClassName={s.active}>Music</NavLink> 
            </div>

            <div className={s.item}>
              <NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink>
            </div>



           <div className={s.siteNav}>

              <div className={s.blockTitle}>
                <h3 className={s.title}>Friends</h3>
              </div>

              <div className={s.site}>
                {site}
              </div>

              
           </div>
       </nav>

       


      
    )
}

export default Navbar;