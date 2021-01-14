import React from 'react'
import * as axios from 'axios';
import { connect } from "react-redux"
import { follow, setUsers, SetCurrentPage, TotalUsers, unfollow, SetToggle} from "../../Redux/UserFindReduser";
import { Users } from "./Users";
import Spinner from '../../assets/preloaded/Spinner.gif';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.SetToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(Response => {
           this.props.SetToggle(false)
           this.props.setUsers(Response.data.items)
           this.props.TotalUsers(Response.data.totalCount)
        }) 
    }

        onPageChanged = (currentPage) => {
            this.props.SetCurrentPage(currentPage)
            this.props.SetToggle(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(Response => {
            this.props.SetToggle(false)
            this.props.setUsers(Response.data.items)

        })
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
        isFetching: state.UserFind.isFetching
    }
}

export default connect(mapStateToProps, 
    { follow, unfollow, setUsers, SetCurrentPage, TotalUsers, SetToggle })(UsersContainer)
 
       
        
       
      
        
       

