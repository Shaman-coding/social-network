import { GetUsers, Unfollowings } from "../API/api";

const FOLLOWER = 'FOLLOWER';
const UNFOLLOWER = 'UNFOLLOWER';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const SET_TOGGLE = 'SET_TOGGLE';
const FOLLOWING_DISABLE = 'FOLLOWING_DISABLE';

let defaultState = {
    users: [],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching: false,
    isDisable: []
}


let UserFindReduser = (state = defaultState, action) => {

    switch (action.type) {
        case FOLLOWER:
           return {
               ...state, //Делаем копию старого state
               users: state.users.map(u => { // Создаём новый массив с помощью map
                   if (u.id === action.userId) {// Делаем проверку если id равен с action то...
                       return {...u, following: true} // делаем копию каждоко элемента массива и переключаем флажок на true
                   }
                   return u;
               })
           }
        case UNFOLLOWER:
            return {
                   ...state,
                   users: state.users.map(u => {
                       if (u.id === action.userId){
                           return {...u, following: false}
                       }
                       return u;
                   })
               }

        case SET_USERS:
             return {...state, users: action.users}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS:
            return {...state, totalUsers: action.totalUsers}
        case SET_TOGGLE:
            return{...state, isFetching: action.toggle }

        case FOLLOWING_DISABLE:
            return { 
                ...state,
                isDisable: action.isFetching
                 ? [...state.isDisable, action.userId]
                 : state.isDisable.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export default UserFindReduser;



export const follow = (userId) => ({type: FOLLOWER, userId})
export const unfollow = (userId) => ({type: UNFOLLOWER, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const SetCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const TotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers})
export const SetToggle = (toggle) => ({type: SET_TOGGLE, toggle})
export const FollowingDisable = (isFetching, userId) => ({ type: FOLLOWING_DISABLE, isFetching, userId})

// thunk

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        
        dispatch(SetToggle(true))
    
        GetUsers(currentPage, pageSize)
        .then(data => {
            dispatch(SetToggle(false))
            dispatch(setUsers(data.items))
            dispatch(TotalUsers(data.totalCount))
         }) 
    }
   
} 



export const Unfollow = (userId) => {
   return (dispatch) => {
        dispatch(FollowingDisable(true, userId))
        dispatch(Unfollowings(userId))
        .then(data => {
            if (data.resultCode == 0) {
             dispatch(unfollow(userId));
            }
            dispatch(FollowingDisable(false, userId))
             
        })
    }
}



export const Follow = (userId) => {
   return (dispatch) => {
        dispatch(FollowingDisable(true, userId))
        dispatch(Unfollowings(userId))
        .then(data => {
            if (data.resultCode == 0) {
             dispatch(unfollow(userId));
            }
            dispatch(FollowingDisable(false, userId))
             
        })
    }
}