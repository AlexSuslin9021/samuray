
import React from "react";

import {addNewDialog, changeNewDialogCreator, propsDialogsPage} from "../../Redux/reducerDialogs";

import Dialogs from "./Dialogs";
import {AppstateType} from "../../Redux/reduxState";


import {Dispatch} from "redux";
import {connect} from "react-redux";



type mapStatePropsType={
    dialogs:propsDialogsPage
}
const mapStateProps=(state:AppstateType):mapStatePropsType =>{
    return{
        dialogs:state.reducerDialogs
    }
}
type mapDispatchPropsType={
   add:(newDialog:string)=>void
    onChangeText:(e:string)=>void
}
const mapDispatchProps=(dispatch:Dispatch):mapDispatchPropsType=>{
    return{
        add:(newDialog:string)=>{
            dispatch(addNewDialog(newDialog))
        },
        onChangeText:(e:string)=>{
            dispatch(changeNewDialogCreator(e))
        }
    }
}
export const DialogsCont=connect(mapStateProps,mapDispatchProps )(Dialogs)
