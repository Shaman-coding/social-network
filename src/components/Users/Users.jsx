import React from 'react';
import U from './Users.module.css';
import human  from '../../assets/imeges/human.jpg';
import {NavLink} from 'react-router-dom';



export let Users = (props) => {
   
        let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
          pages.push(i)
        }
        return (
            <div>

                <div>

                    {pages.map(p => {
                        return <span className={props.currentPage === p && U.selecte }
                                     onClick={() => {props.onPageChanged(p) } }>{ p } </span>
                    })}

                    </div>

                   {props.users.map(u => <div key = {u.id}>
                    <span>
                        <div>
                          <NavLink to={'/profile/' + u.id}> <img className={U.icons} src={u.photos.small != null ? u.photos.small : human}/> </NavLink>
                        </div>
                        <div>
                           { u.following
                           ?  <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button> 
                           :  <button onClick={ () => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
        
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.locations.countries"}</div>
                            <div>{"u.locations.city"}</div>
                           
                        </span>
                    </span>
                     
                   </div>)}
                </div>
            )
        
        }
    
   


