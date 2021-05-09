import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {Grid} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";



import {HookAccordion} from "../Accordion/HookAccordion"

import {useDispatch, useSelector} from "react-redux";
import {DrawerNotShow} from "../../Actions";

// import {
//     SetCloseRightDrawer,
//     SetIsRackSelected,
//     SetIsInrowSelected
// } from "../../../actions";



const rightDrawerWidth = 400;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${rightDrawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: rightDrawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: rightDrawerWidth,
        flexShrink: 0,
    },

    drawerPaper: {
        width: rightDrawerWidth,
    },



    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -rightDrawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },



    paper: {

        padding: theme.spacing(1),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: theme.spacing(8),
    },
    modalTop: {
        paddingTop:theme.spacing(10),
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,


        alignContent: "center"
    },
}));


const GridContainer = props => <Grid container {...props} />;
const GridItem = props => <Grid item {...props} />;




export function HookRightDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);




    //-------------- React Redux Hooks -------------//
    // const openRightDrawerStatus = useSelector(state => state.UI.rightDrawer.open)
    const drawerShow = useSelector(state => state.drawer.drawerShow)


    // const titleName = useSelector( state => {
    //
    //     if (state.object3D.objectSelected.objectType == 'Rack'){
    //         // return "Rack " + state.object3D.objectSelected.rackSelected.name
    //         return state.object3D.objectSelected.rackSelected.name.split(/[-]+/).pop()
    //     }
    //     else if (state.object3D.objectSelected.objectType == 'Inrow'){
    //         const output = state.object3D.objectSelected.inrowSelected.name.split(/[-]+/).pop();
    //
    //         return output
    //     }
    //     return null
    // } )


    const dispatch = useDispatch()




    return (

        <div className={classes.root}>
            <CssBaseline />

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={drawerShow}
                classes={{
                    paper: classes.drawerPaper,
                    modal: classes.modalTop
                }}

            >



                <GridContainer direction="row"  spacing={1} >
                    <GridItem xs={12} md={12} lg={12} >
                        <Paper className={fixedHeightPaper}>
                        </Paper>
                    </GridItem>
                </GridContainer>

                <Divider />

                <div className={classes.drawerHeader}>

                    <IconButton
                        onClick={
                            () => {
                                dispatch(DrawerNotShow())
                                // dispatch( SetIsRackSelected(null, null) )
                                // dispatch( SetIsInrowSelected(null, null) )
                                // dispatch( SetCloseRightDrawer() )
                            }
                        }
                    >
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>

                    <Typography style={ {'fontWeight':'bold'}} >{'title'}</Typography>

                    <Typography className={classes.heading}>{'  '}</Typography>

                </div>

                <Divider />


                <GridContainer direction="row"  >
                    <GridItem xs={12} md={12} lg={12} >

                        <HookAccordion />

                    </GridItem>
                </GridContainer>

                <Divider />

            </Drawer>
        </div>

    );
}