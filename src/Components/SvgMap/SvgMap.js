import React from 'react'
import {useState, useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from "axios";
import {SvgApp} from "./SvgApp";
import {MoonLoader} from "react-spinners";
import { css } from "@emotion/react";
import {ContentApp} from "../Content/ContentApp";
import {DrawerTable} from "../Drawer/DrawerTable";
import {TabPanel} from "react-tabs";
import {fetchMapData ,ContentShow} from '../../Actions'


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const SvgMap = (props)=> {


    const [drawerVisible, setDrawerVisible] = useState(false);

    const token = useSelector(state => state.loginApi.token)

    const loading = useSelector(state => state.mapDataApi.loading)

    const dataFetched = useSelector(state => state.mapDataApi.dataFetched)

    const error = useSelector(state => state.mapDataApi.error)

    const svgLoaded = useSelector(state => state.svg.svgLoading)

    const svgClick = useSelector(state => state.svg.svgObjectIdClick)

    const contentShow = useSelector(state => state.content.contentShow)

    const dispatch = useDispatch()


    useEffect( ()=>{

        dispatch(fetchMapData(token))



    }, [])

    useEffect( ()=>{
        // if (svgObjectIdClick){
        if (svgClick){
            console.log('object box ID : ' , svgClick)

            dispatch(ContentShow())

        }


    },[svgClick])

    const svgShowRender = () =>{
        // if (!svgIsLoaded) {
        if (!svgLoaded) {
            return (
                <MoonLoader color={'#01b3fd'} loading={true} css={override} size={150} />
            )
        }
        else {
            return null
        }
    }

    const svgAppShowRender = ()=>{

        if (!loading & dataFetched) {

            return(

                <SvgApp />
            )
        }

        else
        {
            return null
        }
    }

    const contentAppShowRender = ()=>{
        // if (contentIsShow){
        if (contentShow){
            return(


                // <DrawerTable
                //     svgObjectIdClick={svgObjectIdClick}
                //     map3dDataState={map3dDataState}
                //     setDrawerVisible={setDrawerVisible}
                //     drawerVisible={drawerVisible}
                // />

                <DrawerTable />

            )
        }
        else {
            return null
        }

    }

    return(
        <div>
            <h2>Welcome To Main Page</h2>
            {svgShowRender()}
            <svg id='svg_id'></svg>
            {svgAppShowRender()}
            {/*{contentAppShowRender()}*/}
        </div>

    )
}

export {SvgMap}