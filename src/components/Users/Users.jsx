import React from 'react';
import U from './Users.module.css';
import * as axios from 'axios';
import human  from '../../assets/imeges/human.jpg';



   export class Users extends React.Component {
            constructor(props) {
                super(props)
                axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            });
        }

        render() {
            return (
                <div>
        
                
                   {this.props.users.map(u => <div key = {u.id}  > 
        
                    <span>
                        <div>
                            <img className={U.icons}  src={u.photos.small != null ? u.photos.small : human}/> 
                        </div>
                        <div>
                           { u.following
                           ?  <button onClick={ () => {this.props.unfollow(u.id)}}>Unfollow</button> 
                           :  <button onClick={ () => {this.props.follow(u.id)}}>Follow</button>}
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
    } 
   


