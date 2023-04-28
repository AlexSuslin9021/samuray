import React, {ComponentType} from "react";
import {addNewDialogAC,  propsDialogsPage} from "../../Redux/reduserDialogs/reducerDialogs";
import Dialogs from "./Dialogs";
import {AppstateType} from "../../Redux/reduxState";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type mapStatePropsType={ dialogs:propsDialogsPage }
const mapStateProps=(state:AppstateType):mapStatePropsType =>{return{dialogs:state.reducerDialogs}}
 export const DialogsCont= compose<ComponentType>( connect(mapStateProps, {add:addNewDialogAC,}
   ), withAuthRedirect)(Dialogs)


