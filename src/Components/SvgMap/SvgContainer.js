
import React, {useState, useEffect} from 'react'
import {SvgComponent} from "./SvgComponent";
import {useSelector} from "react-redux";


const SvgContainer = (props) => {

    const mapDataTable = useSelector(state => state.mapDataApi.data.table.tabs)

//Extracts required fields from tabs array
    const svgComponentsRender = ()=> {

        const componentList = mapDataTable.map((tab, index)=>{
            return(

                <SvgComponent
                    tab_name={tab.tab_name}
                    object_id={tab.object_id}
                    table_name={tab.table_name}
                    sensors={tab.sensors}
                    key={index}
                    svgSnap={props.svgSnap}
                />
            )

        })

        return componentList
    }

    return(
        <div>

            {svgComponentsRender()}
        </div>
    )
}


export {SvgContainer}