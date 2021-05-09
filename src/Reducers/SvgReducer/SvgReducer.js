import {SVG_LOADED,SVG_UNLOADED,SVG_CLICK} from '../../Constants'

const initState = {
    svgLoading : false ,
    svgObjectIdClick : null
}

export const svgReducer = (state = initState , action) => {
    switch (action.type) {
        case SVG_LOADED:
            return{
                ...state,
                svgLoading: true
            }

        case SVG_UNLOADED :
            return {
                ...state ,
                svgLoading: false
            }

        case SVG_CLICK :
            return {
                ...state ,
                svgObjectIdClick: action.data
            }

        default :
            return state
    }
}