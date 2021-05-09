
import React, {useContext} from 'react'
import {useState, useEffect} from 'react'
import {ContentComponent} from "../Content/ContentComponent";
import {ContentApp} from "../Content/ContentApp";
import {useDispatch, useSelector} from "react-redux";
import {DrawerNotShow} from '../../Actions'
// import {DRAWER_NOT_SHOW, DRAWER_SHOW} from "../ActionType/Action";


const buttonStyle = {
    padding: '10px 20px',
    border: '2px solid #3085d6',
    borderRadius: '5px',
    background: '#3085d6',
    boxShadow: '5px 5px 5px grey',
    textShadow: '1px 1px 1px black',
    fontWeight: '900',
    color: 'white'
};

const commonStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    padding: '5px',
    border: '1px solid #0657FF',
    borderRadius: '0 30px 30px 0',
    background: '#C9E5FF',
    width: '280px',
    transition: '0.5s',
    overflow: 'hidden'
};

const visibleStyle = {
    ...commonStyle,
    left: '0'
};

const hiddenStyle = {
    ...commonStyle,
    left: '-300px'

};

const liStyle = {
    margin: '10px',
    padding: '5px',
    border: '2px solid #3085d6',
    borderRadius: '5px',
    background: '#5fa8ed',
    boxShadow: '5px 5px 5px grey',
    textShadow: '1px 1px 1px black',
    fontWeight: '900',
    color: 'white',
    listStyle: 'circle inside'
};

const DrawerTable = (props) => {

    const drawerShow = useSelector(state => state.drawer.drawerShow)

    const dispatch = useDispatch()



    return (
        <div style={{ height: "200px" }}>

            {/*<div style={drawerVisible ? visibleStyle : hiddenStyle}>*/}
            <div style={drawerShow ? visibleStyle : hiddenStyle}>
                {/*<button style={buttonStyle} onClick={() => setDrawerVisible(false)}>*/}
                <button
                    style={buttonStyle}
                    onClick={
                        () => {

                            dispatch(DrawerNotShow())


                        }

                    }
                >

                    Close
                </button>
                <div>
                    <br/>


                    <ContentApp />


                </div>
            </div>
        </div>
    );
};


export {DrawerTable}