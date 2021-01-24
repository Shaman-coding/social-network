import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {setPerson} from '../../Redux/DialogsReduser';
import {ProfileApi} from '../../API/api';

class ProfileContainer extends React.Component {

    componentDidMount () {   
        let userId = this.props.match.params.userId; 
        ProfileApi(userId)
        .then(data => {
            this.props.setPerson(data);
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