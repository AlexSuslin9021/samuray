import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppstateType} from "../../Redux/reduxState";
import {DataType,setUserDataAC} from "../../Redux/authReducers/authReducer";
import { usersApi} from "../../API/api";



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

        usersApi.getAuth().then(response=>{
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
