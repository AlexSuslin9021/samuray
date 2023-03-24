import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppstateType} from "../../Redux/reduxState";
import {DataType, setUserThunkCreator} from "../../Redux/authReducers/authReducer";
import { usersApi} from "../../API/api";



export type GetDataResponse={
    data:DataType
    messages:[],
    fieldsErrors:[],
    resultCode:number

}
type ContainerComponentType=mapStateToPropsType & {
   setUserdata:()=>void

}
export class ContainerHeader extends React.Component<ContainerComponentType>{
    componentDidMount() {

        this.props.setUserdata()
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

    setUserdata: setUserThunkCreator})(ContainerHeader)
