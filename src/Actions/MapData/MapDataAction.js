import axios from "axios";
import {MAPDATA_API_REQUEST ,MAPDATA_API_SUCCESS ,MAPDATA_API_ERROR} from '../../Constants'

export const MapDataApiRequest = () => {
    return {
        type: MAPDATA_API_REQUEST
    }
}

export const  MapDataApiSuccess = (mapData) => {
    return {
        type : MAPDATA_API_SUCCESS,
        IvmsData : mapData
    }
}

export const MapDataApiError = (error) => {
    return {
        type : MAPDATA_API_ERROR,
        error : error
    }
}

//Async action creator
export const fetchMapData = (token) => {
    return dispatch => {

        dispatch(MapDataApiRequest())
        axios(
            {
                method : 'get',
                // url :'http://192.168.100.56/api/v1/map3d/overall',
                url :'/api/v1/map3d/overall',
                headers : {
                    Authorization : `token ${token}`,
                }
            }

        )
            .then((response) =>{
                dispatch(MapDataApiSuccess(response.data))
            })

            .catch((error) =>{
                dispatch(MapDataApiError(error))
            })
    }
}