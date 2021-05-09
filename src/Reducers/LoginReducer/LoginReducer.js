import {
    LOGIN_API_REQUEST,
    LOGIN_API_SUCCESS,
    LOGIN_API_ERROR ,
    LOGIN_SET_USER ,
    LOGOUT_USER
} from '../../Constants'

const initState = {
    loading : false,
    token : null ,
    error : null,
    user : null ,
    isLogin : false
}

export const loginApiReducer = (state = initState , action) => {
    switch (action.type) {

        case LOGIN_API_REQUEST :
            return {
                ...state,
                loading: true
            }

        case LOGIN_API_SUCCESS :
            return {
                ...state ,
                loading: false,
                token: action.loginData,
                error: false ,
                isLogin: true
            }

        case LOGIN_API_ERROR :
            return {
                ...state,
                error : action.error
            }

        case LOGIN_SET_USER :
            return {
                ...state,
                user : action.user,
                isLogin: true
            }

        case LOGOUT_USER :
            return {
                ...state,
                user : null
            }
        default :
            return state
    }

}
