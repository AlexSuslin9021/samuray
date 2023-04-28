import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppstateType} from "../Redux/reduxState";

type mapStateToPropsType= {
    isAuth: boolean
}
let mapStateToProps=(state: AppstateType):mapStateToPropsType=> {
    return {
        isAuth: state.authReducer.isAuth
    }
}
function withAuthRedirect<T>(Component:ComponentType<T>) {
  const RedirectComponent=(props:mapStateToPropsType)=>{
debugger
      let {isAuth, ...restProps}=props
      if(!props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

   return  connect(mapStateToProps)(RedirectComponent)

}
export default withAuthRedirect;


