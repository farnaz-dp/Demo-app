
import React from "react";
import {applyMiddleware ,combineReducers , createStore} from "redux"
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import {svgReducer,mapDataApiReducer,loginApiReducer,drawerReducer,contentReducer} from './Reducers/'


const rootReducer = combineReducers(
    {
        loginApi : loginApiReducer,
        mapDataApi : mapDataApiReducer,
        svg : svgReducer,
        content : contentReducer,
        drawer : drawerReducer
    }
)

const store = createStore(
    rootReducer ,
    composeWithDevTools(
        applyMiddleware(
            thunk
        )
    )


)

export {store}