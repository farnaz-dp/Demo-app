
import {DRAWER_SHOW ,DRAWER_NOT_SHOW} from '../../Constants'

export const DrawerShow = () => {
    return {
        type: DRAWER_SHOW
    }
}

export const DrawerNotShow = () => {
    return {
        type : DRAWER_NOT_SHOW
    }
}