import React, {useState} from "react";
import {useSelector} from 'react-redux'
import {LoginLayout} from './Components/Layout/LoginLayout'
import {DashboardLayout} from './Components/Layout/DashboardLayout'


const MainApp = (props) => {

    const isLoginRedux = useSelector(state => state.loginApi.isLogin)
    const isLogin = useState(JSON.parse(localStorage.getItem('isLogin')) === true )

    const layoutRender = () =>{
        if (isLogin | isLoginRedux)
        {
            return (
                <DashboardLayout/>
            )
        }
        else {
            return (
                <LoginLayout/>
            )
        }
    }
    return (
        <>
            {layoutRender()}
        </>
    )
}

export {MainApp}