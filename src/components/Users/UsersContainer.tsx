
import React from 'react';
import {connect} from "react-redux";

import {followAC, setCurrentPageAC, setTotalUserAC, setUsersAC, unFollowAC, usersType} from "../../Redux/reducerUsers";
import {AppstateType} from "../../Redux/reduxState";
import {Dispatch} from "redux";


import axios from "axios";

import {Users} from "./Users";


type PropsUsersType = {
    users: usersType[]
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: usersType[]) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setTotalUser: (totalUser: number) => void

}


export type GetUsersResponse = {
    items: usersType[]
    totalCount: number
    error: string | null
}

class UsersC extends React.Component<PropsUsersType, usersType[]> {
    componentDidMount() {

        axios.get<GetUsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items)
            this.props.setTotalUser(response.data.totalCount)


        })


    }

    onClickPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get<GetUsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })

    }

    render() {
        return <Users users={this.props.users}
                      unFollow={this.props.unFollow}
                      follow={this.props.follow}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onClickPage={this.onClickPage}
                      setUsers={this.props.setUsers}



        />
    }
}

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