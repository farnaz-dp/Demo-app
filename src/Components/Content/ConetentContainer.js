
import React from 'react'
import {useState , useEffect} from 'react'
import {ContentComponent} from "./ContentComponent";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {DrawerTable} from "../Drawer/DrawerTable";


const ContentContainer = (props)=>{

    // const {svgObjectIdClick , tabs} = props
    const { tabs} = props

    // console.log('ContentContainer , object box id :' , svgObjectIdClick)
    // console.log('ContentContainer , tabs :' , tabs)

    const tabNameRender = ()=>{
        const contentList = tabs.map((tab , index)=>{

            return (

                <Tab key={index}>
                    {tab.tab_name}
                </Tab>

            )

        })
        return (

            <TabList>
                {contentList}
            </TabList>


        )
    }

    const tabPannelRender = ()=>{
        const contentList = tabs.map((tab , index)=>{

            return (

                <TabPanel key={index}>

                    <ContentComponent
                        sensors={tab.sensors}
                        table_name={tab.table_name}
                        key={index}
                    />

                </TabPanel>

            )

        })
        return contentList


    }


    return(
        <div>
            <Tabs>
                {tabNameRender()}
                {tabPannelRender()}
            </Tabs>

        </div>
    )
}


export {ContentContainer}