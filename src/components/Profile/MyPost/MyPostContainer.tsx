import React from "react";

import { propsPostMessege, propsProfilePage} from "../../../Redux/State";
import {addPOstAc, ChangeCreator} from "../../../Redux/reducerProfile";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {AppstateType} from "../../../Redux/reduxState";
import {Dispatch} from "redux";

type mapStateToPropsType={
    profilePage:propsProfilePage
}
const mapStateToProps=(state:AppstateType):mapStateToPropsType=>{
    return{
        profilePage: state.reducerProfile
    }
}

type mapDispatchToPropsType={
    addPost:(messages:string)=>void
    onChangeText:(e:string)=>void
}
const mapDispatchToProps=(dispatch:Dispatch):mapDispatchToPropsType=>{
    return{
        addPost:(messages:string)=>{
            dispatch(addPOstAc(messages))
        },
        onChangeText:(e:string)=>{
            dispatch(ChangeCreator(e))
        }
    }
}
export const MyPostContainer=connect(mapStateToProps, mapDispatchToProps)(MyPost)
