import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import usersPhoto from "../../assets/image/3607444.png";
import {Header} from "./Header";
import axios from "axios";
import {GetUsersResponse} from "../Users/UsersContainer";
import {connect} from "react-redux";
import {AppstateType} from "../../Redux/reduxState";
import {DataType, initialStateType, setUserDataAC} from "../../Redux/authReducers/authReducer";
import {getAuth} from "../../API/api";

 type DataStateType={
     data:DataType
     resultCode:number

}

export type GetDataResponse={
    data:DataType
    messages:[],
    fieldsErrors:[],
    resultCode:number

}
type ContainerComponentType=mapStateToPropsType & {
   setUserdata:(data:DataType)=>void

}
export class ContainerHeader extends React.Component<ContainerComponentType>{
    componentDidMount() {

        getAuth().then(response=>{
            if(response.resultCode===0)
            this.props.setUserdata(response.data)
        })
    }

    render() {
      return <Header data={this.props.data} isAuth={this.props.isAuth}/>;
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

    setUserdata: setUserDataAC})(ContainerHeader)
