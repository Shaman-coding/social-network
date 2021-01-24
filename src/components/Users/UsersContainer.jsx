import React from 'react'
import { connect } from "react-redux"
import { follow,  SetCurrentPage, unfollow, getUsers, FollowingDisable } from "../../Redux/UserFindReduser";
import { Users } from "./Users";
import Spinner from '../../assets/preloaded/Spinner.gif';
 


class UsersContainer extends React.Component {
    componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

        onPageChanged = (currentPage) => {
            this.props.getUsers(currentPage, this.props.pageSize);
    }

    render() {

       
        return <>
            <img src={ this.props.isFetching ? Spinner : null}/>

            <Users totalUsers={this.props.totalUsers}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      FollowingDisable={this.props.FollowingDisable}
                      isDisable={this.props.isDisable}
        />
        </> 
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.UserFind.users,
        pageSize: state.UserFind.pageSize,
        totalUsers: state.UserFind.totalUsers,
        currentPage: state.UserFind.currentPage,
        isFetching: state.UserFind.isFetching,
        isDisable: state.UserFind.isDisable

    }
}

export default connect(mapStateToProps, 
    { follow, unfollow, SetCurrentPage,FollowingDisable, getUsers})(UsersContainer)
 
       
        
       
      
        
       

