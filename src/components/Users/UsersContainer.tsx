import React from 'react';
import {connect} from "react-redux";
import {

    followAC, followThunkCreator, getUserThunkCreator,
    setCurrentPageAC,
    setTotalUserAC,
    setUsersAC,
    toggleFetchingAC, toggleIsFetchingAC,
    unFollowAC, unFollowThunkCreator,
    usersType
} from "../../Redux/reducerUsers/reducerUsers";
import {AppstateType} from "../../Redux/reduxState";
import {Users} from "./Users";
import {usersApi} from "../../API/api";





export type PropsUsersType = {
    users: usersType[]
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: usersType[]) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setTotalUser: (totalUser: number) => void
    isFetching:boolean
    setFetching:( fetching:boolean)=>void
    toggleIsFetching:(id:number, isFetching:boolean)=>void
    progressIsFetching:number[]
    getUserThunkCreator:(currentPage:number, pageSize:number)=>void
    followThunkCreator:(id:number)=>void
    unFollowThunkCreator:(id:number)=>void

    // getUserThunkCreator:(currentPage:number, pageSize:number)=>(dispatch:Dispatch)=>void

}


export type GetUsersResponse = {
    items: usersType[]
    totalCount: number
    error: string | null
}

class UsersC extends React.Component<PropsUsersType, usersType[]> {
    componentDidMount() {
        this.props.getUserThunkCreator(this.props.currentPage,this.props.pageSize)

    }

    onClickPage = (pageNumber: number) => {
        this.props.getUserThunkCreator(pageNumber,this.props.pageSize)

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
                      isFetching={this.props.isFetching}
                      setFetching={this.props.setFetching}
                      toggleIsFetching={this.props.toggleIsFetching}
                      progressIsFetching={this.props.progressIsFetching}
                      followThunkCreator={this.props.followThunkCreator}
                      unFollowThunkCreator={this.props.unFollowThunkCreator}
        />
    }
}

type mapStateToPropsType={
    users:usersType[]
    totalUsersCount:number
    pageSize:number
    currentPage:number
    isFetching:boolean
    progressIsFetching:number[]

}

const mapStateToProps = (state: AppstateType) :mapStateToPropsType => {

    return {
        users: state.reducerUsers.users,
        totalUsersCount:state.reducerUsers.totalUsersCount,
        pageSize:state.reducerUsers.pageSize,
        currentPage:state.reducerUsers.currentPage,
        isFetching:state.reducerUsers.isFetching,
        progressIsFetching:state.reducerUsers.progressIsFetching
    }
}


const UsersContainer = connect(mapStateToProps, {
    follow: followAC,
    unFollow:unFollowAC,
    setUsers:setUsersAC,
    setCurrentPage:setCurrentPageAC,
    setTotalUser:setTotalUserAC,
    setFetching: toggleFetchingAC,
    toggleIsFetching: toggleIsFetchingAC,
    getUserThunkCreator,
    followThunkCreator,
    unFollowThunkCreator,
})
(UsersC)
//создает контейнерную компоненту UsersContainer для Users
// mapStateToProps, mapDispatchToProps- функции которые возвращают пропсы
export default UsersContainer