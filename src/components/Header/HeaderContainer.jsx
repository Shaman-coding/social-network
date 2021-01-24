import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import axios from 'axios';
import { AuthMe } from '../../Redux/LoginAuthMe';
import { Headers } from '../../API/api';

class HeaderContainer extends React.Component {

    componentDidMount () {
        
        Headers()
        .then(data => {
            let {email, id, login} = data.data
            this.props.AuthMe(email, id, login); 
           
        })
    }

    render () {
        return <Header { ...this.props }/>
    }
}


let mapStateToProps = (state) => {
    return {
        login: state.LoginMe.login,
        isAuth: state.LoginMe.isAuth
    }
}


export default connect(mapStateToProps,{AuthMe})(HeaderContainer)






