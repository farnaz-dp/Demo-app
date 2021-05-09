
import React , {useContext} from 'react'
import {useState , useEffect } from 'react'
import {ContentContainer} from "./ConetentContainer";
import {useSelector} from "react-redux";



const ContentApp = (props) =>{

    const mapDataTable = useSelector(state => state.mapDataApi.data.table.tabs)

    const svgClick = useSelector(state => state.svg.svgObjectIdClick)

    // const {svgObjectIdClick, tabs} = props

    const tabFilter = () =>{

        // const tabList = tabs.filter((tab)=>{
        const tabList = mapDataTable.filter((tab)=>{
            // if (tab.object_id === svgObjectIdClick)
            if (tab.object_id === svgClick)
            {
                return tab
            }

        })
        return tabList
    }

    return(
        <div>
            {/*<ContentContainer*/}
            {/*    svgObjectIdClick={svgObjectIdClick}*/}
            {/*    tabs={tabFilter()}*/}
            {/*/>*/}

            <ContentContainer
                tabs={tabFilter()}
            />
        </div>
    )
}




export {ContentApp}