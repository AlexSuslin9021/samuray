import React from "react";
import {addNewDialogAC, changeNewDialogCreatorAC, propsDialogsPage} from "../../Redux/reduserDialogs/reducerDialogs";
import Dialogs from "./Dialogs";
import {AppstateType} from "../../Redux/reduxState";
import {connect} from "react-redux";


type mapStatePropsType={
    dialogs:propsDialogsPage
}
const mapStateProps=(state:AppstateType):mapStatePropsType =>{

    return{
        dialogs:state.reducerDialogs
    }
}

export const DialogsCont=connect(mapStateProps,{add:addNewDialogAC,onChangeText:changeNewDialogCreatorAC} )(Dialogs)
