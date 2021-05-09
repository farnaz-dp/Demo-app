import {DRAWER_SHOW , DRAWER_NOT_SHOW} from '../../Constants'

const initState = {
    drawerShow : false
}

export const drawerReducer = (state = initState , action) => {
    switch (action.type) {

        case DRAWER_SHOW :
            return {
                drawerShow: true
            }

        case DRAWER_NOT_SHOW :
            return {
                drawerShow: false
            }

        default :
            return state
    }
}