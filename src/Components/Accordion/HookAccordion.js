import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// import {MapDataTable} from "../Table/MapDataTable";
import CssBaseline from "@material-ui/core/CssBaseline";
import {useDispatch, useSelector} from "react-redux";

import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import {MoonLoader, CircleLoader, GridLoader, BarLoader} from "react-spinners";
import {css} from "@emotion/core";



const useStyles = makeStyles((theme) => ({
    root: {
        // width: '100%',
        width: 'auto',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },

    rootList: {
        // width: '100%',
        width: 'auto',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },


    '@keyframes blinker': {
        from: {opacity: 0.7},
        to: {opacity: 0.3},
    },
    SingleAccordionWarnBlink: {

        animationName: '$blinker',
        animationDuration: '1.5s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount:'infinite',
        backgroundColor:'rgb(229,194,85)',
        fontWeight: 'bold',
        color:'black',
    },
    SingleAccordionAlarmBlink: {

        animationName: '$blinker',
        animationDuration: '1.5s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount:'infinite',
        backgroundColor:'rgb(239,124,124)',
        fontWeight: 'bold',
        color:'black',
    },

}));




// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const loader =<BarLoader
    css={override}

    size={150}

    height={4}
    width={350}

    color={"rgba(84,128,239,0.77)"}
    loading={true}
/>





function SingleAccordion(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const accordionRender = () => {
        let isAlarm = false
        let isWarn = false

        props.tableData.sensors.map( (sensor) => {
            if (sensor.isBlink & sensor.value == -8555){
                isWarn |= true
            }
            else if (sensor.isBlink ){
                isAlarm |= true
            }
        } )



        return (
            <div>
                <CssBaseline />
                <Accordion
                    expanded={expanded === props.tableData.sensors.sensor_name}
                    onChange={handleChange(props.tableData.sensors.sensor_name)}
                    className={
                        ( (isAlarm & (expanded==false) ) ? classes.SingleAccordionAlarmBlink : ( (isWarn & (expanded==false) ) ? classes.SingleAccordionWarnBlink : null) )
                    }
                    id={props.index}

                >

                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                    >

                        <Typography className={classes.heading}> {props.tableData.table_name} </Typography>


                        <Typography className={classes.secondaryHeading}> {props.tableData.tab_name} </Typography>
                    </AccordionSummary>



                    <AccordionDetails>

                        {/*<MapDataTable*/}

                        {/*    sensorMapDataTableState={props.tableData.sensors}*/}
                        {/*/>*/}
                        <h2>test</h2>

                    </AccordionDetails>


                </Accordion>
            </div>
        )

    }


    return (

        <>
            { accordionRender() }
        </>


    )
}

export  function HookAccordion(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    //---------------------------- React Redux Hooks ----------------------------//

    // const allRacksNetBoxLoaded = useSelector( state => state.netBoxRack.allRacksLoaded )
    // const RacksNetBoxUpdating = useSelector( state => state.netBoxRack.updating )
    //
    // // const MapDataAPITabsData = useSelector( state => state.map.mapData.data )
    // const MapDataAPIUpdating = useSelector( state => state.map.updating )
    // const MapDataAPILoading = useSelector( state => state.map.mapData.loading )
    // const MapDataAPITabsData = useSelector( state => {
    //     if (typeof state.map.mapData.data != 'undefined'){
    //         return state.map.mapData.data
    //     }
    //     return null
    // } )
    // const MapDataAPITabsError = useSelector( state => {
    //     if (typeof state.map.mapData.error != 'undefined'){
    //         return state.map.mapData.error
    //     }
    //     return null
    // } )

    const mapDataTable = useSelector(state => state.mapDataApi.data.table.tabs)
    // const MapDataAPIUpdating = useSelector( state => state.mapDataApi.updating )
    const MapDataAPILoading = useSelector( state => state.mapDataApi.loading )

    const MapDataAPITabsError = useSelector( state => {
        if (typeof state.mapDataApi.error != 'undefined'){
            return state.mapDataApi.error
        }
        return null
    } )

    const svgClick = useSelector(state => state.svg.svgObjectIdClick)

    // const openRightDrawerStatus = useSelector(state => state.UI.rightDrawer.open)
    const drawerShow = useSelector(state => state.drawer.drawerShow)



    // const objectSelectedType = useSelector(state => state.object3D.objectSelected.objectType)
    // const objectSelectedName = useSelector( state => {
    //
    //     if (state.object3D.objectSelected.objectType == 'Rack'){
    //         return state.object3D.objectSelected.rackSelected.name
    //     }
    //     else if (state.object3D.objectSelected.objectType == 'Inrow'){
    //         return state.object3D.objectSelected.inrowSelected.name
    //     }
    //     return null
    // } )

    const dispatch = useDispatch()




    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };





    // const checkRackName = ( name , rack_name) => {
    //
    //     // const re = new RegExp(rack_name+"\$")
    //
    //     const re = new RegExp('\^'+rack_name+"\$")
    //     const ivms_Rack_name = name.split(/[-]+/).pop()
    //
    //     // console.log('-----------------------------------------')
    //     // console.log('HookRightAccordion, Netbox rack name', rack_name)
    //     // // console.log('HookRightAccordion, IVMS rack_name', name)
    //     // console.log('HookRightAccordion, IVMS rack_name', netbox_Rack_name)
    //     // console.log('HookRightAccordion, regex', re)
    //
    //
    //     // const result_regx = name.match(rack_name);
    //     // const result_regx = name.match(re)
    //     const result_regx = ivms_Rack_name.match(re)
    //
    //     // console.log('HookRightAccordion, result_regx is ', result_regx)
    //     // console.log('-----------------------------------------')
    //
    //     if (result_regx){
    //
    //         return true
    //     }
    //     else return null
    // }

    // const checkInrowName = ( name , inrow_name) => {
    //
    //     const result_regx = name.match(inrow_name);
    //     if (result_regx){
    //
    //         return true
    //     }
    //     else return null
    // }





    const ivms_madData_error_function = () => {
        return (

            <div className={classes.root}>

                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Could not fetch Data from IVMS server.<br/>
                    Error alert is — <strong>{MapDataAPITabsError.message}!</strong>
                </Alert>
            </div>

        )
    }

    const ivms_madData_loading_function = () => {
        return (
            <div>
                <h2 align={'center'}> Loading</h2>
                {loader}
            </div>

        )
    }


    const tabList = () => {

        // if (drawerShow & mapDataTable != null & MapDataAPITabsError==null){
        if (drawerShow & mapDataTable != null ){


            console.log('accordion has been executed')

            // const table = mapDataTable.filter( table =>{
            //     if(objectSelectedType == 'Rack')
            //     {
            //
            //         if ( checkRackName(objectSelectedName, table.table_name) ){
            //             return table
            //         }
            //         else {
            //             return null
            //         }
            //     }
            //     else if(objectSelectedType == 'Inrow')
            //     {
            //         if ( checkInrowName(objectSelectedName, table.table_name) ){
            //
            //             return table
            //         }
            //         else{
            //             return null
            //         }
            //     }
            //     else {
            //         return null
            //     }
            //
            //
            //
            // } )

            // if (table != null){
            //
            //
            //
            //     const tabList = table.map( (tab, index) => {
            //         return (
            //             <SingleAccordion
            //                 tableData={tab}
            //                 index={index}
            //                 key={index}
            //             />
            //         )
            //
            //     })
            //
            //     return tabList
            // }

            // const tabList = table.map( (tab, index) => {
            //     return (
            //         <SingleAccordion
            //             tableData={tab}
            //             index={index}
            //             key={index}
            //         />
            //     )
            //
            // })

            const tabList = mapDataTable.filter((tab, index)=>{

                if (tab.object_id === svgClick)
                {
                    return tab
                }

            })

            if (tabList != null){



                const accordionList = tabList.map( (tab, index) => {
                    return (
                        <SingleAccordion
                            tableData={tab}
                            index={index}
                            key={index}
                        />
                    )

                })

                return accordionList
            }
            // return tabList

        }
        else if (MapDataAPITabsError != null){

            return ivms_madData_error_function()
        }
        else {
            return ivms_madData_loading_function()
        }

    }






    return (

        <div className={classes.root}>

            { tabList() }

        </div>
    );

}

export {}