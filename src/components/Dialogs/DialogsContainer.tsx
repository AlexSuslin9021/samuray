import React, {ComponentType} from "react";
import {addNewDialogAC, changeNewDialogCreatorAC, propsDialogsPage} from "../../Redux/reduserDialogs/reducerDialogs";
import Dialogs from "./Dialogs";
import {AppstateType} from "../../Redux/reduxState";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type mapStatePropsType={
    dialogs:propsDialogsPage
    // isAuth:boolean
}
const mapStateProps=(state:AppstateType):mapStatePropsType =>{

    return{
        dialogs:state.reducerDialogs,
        // isAuth:state.authReducer.isAuth
    }
}
 export const DialogsCont= compose<ComponentType>( withAuthRedirect,connect(mapStateProps,
     {add:addNewDialogAC,onChangeText:changeNewDialogCreatorAC}
   ))(Dialogs)

// export const DialogsCont= withAuthRedirect( connect(mapStateProps,
//     {add:addNewDialogAC,onChangeText:changeNewDialogCreatorAC} )(Dialogs))
