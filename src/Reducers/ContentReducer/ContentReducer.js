import {CONTENT_SHOW ,CONTENT_NOT_SHOW} from '../../Constants'

const initState = {
    contentShow : false
}

export const contentReducer = (state = initState , action) => {
    switch (action.type) {

        case CONTENT_SHOW :
            return {
                contentShow: true
            }

        case CONTENT_NOT_SHOW :
            return {
                contentShow: false
            }

        default :
            return state

    }
}