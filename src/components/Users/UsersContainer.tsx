
import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setTotalUserAC, setUsersAC, unFollowAC, usersType} from "../../Redux/reducerUsers";
import {AppstateType} from "../../Redux/reduxState";
import {Dispatch} from "redux";
import UsersC from "./UsersC";

type mapStateToPropsType={
    users:usersType[]
    totalUsersCount:number
    pageSize:number
    currentPage:number

}
const mapStateToProps = (state: AppstateType) :mapStateToPropsType => {

    return {
        users: state.reducerUsers.users,
        totalUsersCount:state.reducerUsers.totalUsersCount,
        pageSize:state.reducerUsers.pageSize,
        currentPage:state.reducerUsers.currentPage
    }
}
type mapDispatchToPropsType={
    follow:(id: number)=>void
    unFollow: (id: number)=>void
    setUsers: (users: usersType[]) =>void
    setCurrentPage:( page:number)=>void
    setTotalUser:( totalUser:number)=>void
}

// если что-то меняется в стейте, то мы это dispatch
const mapDispatchToProps = (dispatch: Dispatch) : mapDispatchToPropsType => {

    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },

        unFollow: (id: number) => {
            dispatch(unFollowAC(id))
        },

        setUsers: (users: usersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage:( page:number)=>{
            dispatch(setCurrentPageAC(page))
        },
        setTotalUser:( totalUser:number)=>{
            dispatch(setTotalUserAC(totalUser))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)
//создает контейнерную компоненту UsersContainer для Users
// mapStateToProps, mapDispatchToProps- функции которые возвращают пропсы
export default UsersContainer