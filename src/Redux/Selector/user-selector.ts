import {AppstateType} from "../reduxState";
import {createSelector} from "reselect";
import {usersType} from "../reducerUsers/reducerUsers";

export const getTotalUsersCount=(state:AppstateType)=>{
    return state.reducerUsers.totalUsersCount
}


export const getPageSize=(state:AppstateType)=>{
    return state.reducerUsers.pageSize
}
export const getCurrentPage=(state:AppstateType)=>{
    return state.reducerUsers.currentPage
}
export const getUsers=(state:AppstateType)=>{
    return state.reducerUsers.users
}

export const getUserSelector=(state:AppstateType)=>{
    getUsers(state).map(u=>true)
}
export const getUserSuperSelector=createSelector(getUsers,(users:usersType[])=>{
    users.filter(u=>true)
} )
export const getIsFetching=(state:AppstateType)=>{
    return state.reducerUsers.isFetching
}
export const getProgressIsFetching=(state:AppstateType)=>{
    return state.reducerUsers.progressIsFetching
}

