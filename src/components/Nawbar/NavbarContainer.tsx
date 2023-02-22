import React from "react";
import {connect} from "react-redux";
import {PropsSidebar} from "../../Redux/reducerSidebar";
import {AppstateType} from "../../Redux/reduxState";
import Navbar from "./Navbar";

type mapStateToPropseType={
    sidebar:PropsSidebar[]
}
const mapStateToPropse=(state:AppstateType):mapStateToPropseType=>{
    return {
        sidebar: state.reducerSidebar
    }
}
 const NavbarConteiner=connect(mapStateToPropse)(Navbar)
export default NavbarConteiner