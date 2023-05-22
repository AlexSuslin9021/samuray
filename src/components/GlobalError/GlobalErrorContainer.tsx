import React from "react";
import {GlobalError} from "./GlobalError";
import {AppstateType} from "../../Redux/reduxState";
import {connect} from "react-redux";
import {setErrorAC} from "../../Redux/appReducers/appReducer";

export class GlobalErrorContainer extends  React.Component<GlobalErrorContainerType>{
    render(){
        return <GlobalError
        error={this.props.error}
        setError={this.props.setError}
        />
    }
}

const mapStateToProps = (state:AppstateType) => {
    return{
        error:state.appReducer.error
    }
}

export const ErrorSnackBar= connect(mapStateToProps, {
    setError: setErrorAC
})(GlobalErrorContainer)
type MapStateToPropsType = {
    error:string | null
}

type GlobalErrorContainerType= MapStateToPropsType &{
    setError:(error:string| null)=>void
}