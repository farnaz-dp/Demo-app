import React from "react";
import {Route, Switch} from "react-router-dom";
import Login from "../Components/Login";
import {PrivateRoute} from './PrivateRoute'
import {Home} from "../Components/Home";
import {About} from "../Components/About";
import {Contact} from "../Components/Contact";
import {Reports} from "../Components/Reports"
import {SvgMap} from '../Components/SvgMap/SvgMap'


const AppRoute = (props)=>{
    return(
        <div>
            <Switch>

                <Route path="/login">
                  <Login/>
                </Route>

                <PrivateRoute exact path="/">
                    <Home/>
                </PrivateRoute>

                <PrivateRoute exact path="/home">
                  <Home/>
                </PrivateRoute>

                <PrivateRoute path="/about">
                    <About/>
                </PrivateRoute>

                <PrivateRoute path="/contact">
                    <Contact/>
                </PrivateRoute>

                <PrivateRoute path="/reports">
                    <Reports/>
                </PrivateRoute>

                <PrivateRoute path="/map">
                    <SvgMap/>
                </PrivateRoute>

            </Switch>
        </div>
    )
}

export {AppRoute}