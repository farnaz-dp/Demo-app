import {MAPDATA_API_REQUEST,MAPDATA_API_SUCCESS,MAPDATA_API_ERROR} from '../../Constants'

const initState = {
    loading: false,
    dataFetched : false,
    data : null ,
    error : null
}

export const mapDataApiReducer = (state = initState , action) => {
    switch (action.type) {

        case MAPDATA_API_REQUEST :
            return{
                ...state ,
                loading: true,
                dataFetched: false
            }

        case MAPDATA_API_SUCCESS:
            return {
                loading: false ,
                dataFetched: true,
                data : action.IvmsData ,
                error: false
            }

        case MAPDATA_API_ERROR :
            return {
                ...state ,
                error: action.error,
                dataFetched: true
            }

        default :
            return state

    }

}
