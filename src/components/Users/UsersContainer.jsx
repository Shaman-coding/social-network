import { connect } from "react-redux"
import { FollowerAC, Set_UsersAC, UnfollowerAC } from "../../Redux/UserFindReduser"
import { Users } from "./Users"

let mapStateToProps = (state) => {
    return {
        users: state.UserFind.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(FollowerAC(userId))
        },
        unfollow: (userId) => {
            dispatch(UnfollowerAC(userId))
        },
        setUsers: (users) => {
            dispatch(Set_UsersAC(users))
        }
    }

    
}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;