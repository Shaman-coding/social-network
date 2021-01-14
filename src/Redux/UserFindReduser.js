const FOLLOWER = 'FOLLOWER';
const UNFOLLOWER = 'UNFOLLOWER';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const SET_TOGGLE = 'SET_TOGGLE';

let defaultState = {
    users: [],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching: false
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