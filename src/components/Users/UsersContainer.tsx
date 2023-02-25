import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, initialStateType, setUsersAC, unFollowAC, usersType} from "../../Redux/reducerUsers";
import {AppstateType} from "../../Redux/reduxState";
import {Dispatch} from "redux";

type mapStateToPropsType={
    users:initialStateType

}
const mapStateToProps = (state: AppstateType) :mapStateToPropsType => {
    debugger
    return {
        users: state.reducerUsers
    }
}
type mapDispatchToPropsType={
    follow:(id: number)=>void
    unFollow: (id: number)=>void
    setUsers: (users: usersType) =>void
}

// если что-то меняется в стейте, то мы это dispatch, внутрь которого передаем объект, который говорит, что делать
const mapDispatchToProps = (dispatch: Dispatch) : mapDispatchToPropsType => {
    debugger
    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },

        unFollow: (id: number) => {
            dispatch(unFollowAC(id))
        },

        setUsers: (users: usersType) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
//создает контейнерную компоненту UsersContainer для Users
// mapStateToProps, mapDispatchToProps- функции которые возвращают пропсы
export default UsersContainer