import React from 'react';
import './ProfileInfo.module.css';
import P from './ProfileInfo.module.css';
import Spinner from '../../../assets/preloaded/Spinner.gif';

const ProfileInfo = (props) => {
   
    if (!props.Person) {
        return <img src={Spinner}/> 
    }
    return (
        <div>
              <img src='https://i.ytimg.com/vi/qBNi4PlyPcQ/maxresdefault.jpg' alt='other'/>
            
           
            <div className={P.descriptionBlock}>
            <img src={props.Person.photos.small}/> <br/>
            {props.Person.fullName} <br/>
            {props.Person.aboutMe}
               <div>
                   <a className={P.SocialLink} href={'facebook.com'}>facebook: { props.Person.contacts.facebook}</a> <br/>
                   <a className={P.SocialLink} href={'vk.com/dimych'}>Vk: { props.Person.contacts.vk}</a> <br/>
                   <a className={P.SocialLink} href={'https://twitter.com/@sdf'}>Twitter: { props.Person.contacts.twitter}</a> <br/>
                   <a className={P.SocialLink} href={'instagra.com/sds'}>Instagram: { props.Person.contacts.instagram}</a> <br/>
                   <a className={P.SocialLink} href={'github.com"'}>GitHub: { props.Person.contacts.github}</a> <br/>
               </div>

             <div> Вы ищете работу ?  - { props.Person.lookingForAJobDescription} </div>
            </div>
        </div>
    )
}


export default ProfileInfo;