const SET_DATA_AUTH_ME = "SET_DATA_AUTH_ME";


let defaultState = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}

let LoginAuthMe = (state = defaultState, action) => {
    switch(action.type) {
        case SET_DATA_AUTH_ME:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const AuthMe = (email, id, login) => ({type: SET_DATA_AUTH_ME, data: {email, id, login} })

export default LoginAuthMe;