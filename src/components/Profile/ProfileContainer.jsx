import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {setPerson} from '../../Redux/DialogsReduser';

class ProfileContainer extends React.Component {

    componentDidMount () {   
        let userId = this.props.match.params.userId; 
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId )
        .then(Response => {
            this.props.setPerson(Response.data);
        });
        
           
       
        
    }

    render () {
        return <Profile {...this.props}/>    
    }
}

let mapStateToProps = (state) => ({
    Person: state.MessagePage.Person
})
  



let WithRouterURLComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setPerson})(WithRouterURLComponent)