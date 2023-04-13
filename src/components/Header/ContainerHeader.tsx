import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppstateType} from "../../Redux/reduxState";
import {
    DataType,
    getAuthThunkCreator,
    loginOutThunkCreator,
    setUserThunkCreator
} from "../../Redux/authReducers/authReducer";
import { usersApi} from "../../API/api";



export type GetDataResponse={
    data:DataType
    messages:[],
    fieldsErrors:[],
    resultCode:number


}
type ContainerComponentType=mapStateToPropsType & {
    loginOut:()=>void

}
export class ContainerHeader extends React.Component<ContainerComponentType>{


    render() {
      return <Header data={this.props.data} isAuth={this.props.isAuth} loginOut={this.props.loginOut}/>;
  }

}
type mapStateToPropsType={
     data:DataType
    resultCode:number
    isAuth:boolean

}
const mapStateToProps=(state:AppstateType):mapStateToPropsType=>{
     return{
         data:state.authReducer.data,
         resultCode:state.authReducer.resultCode,
         isAuth:state.authReducer.isAuth
     }
}
export const DataHeader=connect(mapStateToProps,{

    loginOut: loginOutThunkCreator

})(ContainerHeader)
