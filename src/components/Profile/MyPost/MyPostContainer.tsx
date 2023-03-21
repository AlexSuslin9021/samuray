import React from "react";
import {addPOstAc, changeTitleAC, propsProfilePage} from "../../../Redux/reducerProfile/reducerProfile";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {AppstateType} from "../../../Redux/reduxState";


export type mapStateToPropsType={
    profilePage:propsProfilePage
}
const mapStateToProps=(state:AppstateType):mapStateToPropsType=>{
    return{
        profilePage: state.reducerProfile
    }
}

export const MyPostContainer=connect(mapStateToProps, {addPost:addPOstAc,onChangeText:changeTitleAC})(MyPost)
