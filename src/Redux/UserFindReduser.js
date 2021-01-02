const FOLLOWER = 'FOLLOWER';
const UNFOLLOWER = 'UNFOLLOWER';
const SET_USERS = 'SET_USERS';

let defaultState = {
    users: [
       /*  {id: 1, following: true,  icons: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/768px-Circle-icons-camera.svg.png', name:'Kirill', status: 'it new time', locations: {countries: 'Russia', city: 'Moscow'}},
        {id: 2, following: false,  icons: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/768px-Circle-icons-camera.svg.png', name:'Maxim', status: "i'm very rich", locations: {countries: 'Belarus', city: 'Minsk'}},
        {id: 3, following: false,  icons: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/768px-Circle-icons-camera.svg.png', name:'Igor', status: 'kiss me', locations: {countries: 'USA', city: 'New York'}},
        {id: 4, following: true,  icons: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/768px-Circle-icons-camera.svg.png', name:'Slava', status: 'he say...', locations: {countries: 'Ukraine', city: 'Kiev'}} */
    ]
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

                default:
                    return state
    }
}

export default UserFindReduser;



export const FollowerAC = (userId) => ({type: FOLLOWER, userId})
export const UnfollowerAC = (userId) => ({type: UNFOLLOWER, userId})
export const Set_UsersAC = (users) => ({type: SET_USERS, users})