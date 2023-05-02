import {usersApi} from "../../API/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

export const reducerUsers = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case follow: {
            return {...state, users: state.users.map(u => u.id == action.id ? {...u, follow: true} : u)}
        }
        case unFollow: {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, follow: false} : u)}
        }
        case setUsers: {
            return {...state, users: action.user}
        }
        case setCurrentPage: {
            return {...state, currentPage: action.page}
        }
        case setTotalUser : {
            return {...state, totalUsersCount: action.totalUser}
        }
        case toggleFetching : {
            return {...state, isFetching: action.isFetching}
        }
        case toggleProgress : {
            return {
                ...state, progressIsFetching: action.isFetching ? [...state.progressIsFetching, action.id]
                    :
                    state.progressIsFetching.filter(el => el !== action.id)
            }
        }
        default:
            return state
    }
}

//ACTION CREATOR
export const toggleFetchingAC = (isFetching: boolean) => {return {type: toggleFetching, isFetching} as const}
export const setCurrentPageAC = (page: number) => {
    return {type: setCurrentPage, page} as const
}
export const setTotalUserAC = (totalUser: number) => {
    return {type: setTotalUser, totalUser} as const
}
export const followAC = (id: number) => {
    return {type: follow, id: id} as const
}
export const unFollowAC = (id: number) => {
    return {type: unFollow, id: id} as const
}
export const setUsersAC = (users: usersType[]) => {
    return {type: setUsers, user: users} as const
}
export const toggleIsFetchingAC = (id: number, isFetching: boolean) => {
    return {type: toggleProgress, id, isFetching} as const
}

// Thunk Creator
export const getUserThunkCreator = (currentPage: number, pageSize: number): ThunkAction<Promise<void>, initialStateType, unknown, ActionType> => {
    return async (dispatch: Dispatch<ActionType>) => {
        dispatch(toggleFetchingAC(true))
        dispatch(setCurrentPageAC(currentPage))
        let response= await usersApi.getUsers(currentPage, pageSize)
            dispatch(setUsersAC(response.items))
            dispatch(setTotalUserAC(response.totalCount))
            dispatch(toggleFetchingAC(false))

    }
}
export const followThunkCreator = (id: number): ThunkAction<Promise<void>, initialStateType, unknown, ActionType> => {
    return async (dispatch: Dispatch<ActionType>) => {
        dispatch(toggleIsFetchingAC(id, true))
        let response= await usersApi.gtAuthPost(id)
            if (response.resultCode === 0) {
                dispatch(followAC(id))
            }
            dispatch(toggleIsFetchingAC(id, false))
    }
}
export const unFollowThunkCreator = (id: number): ThunkAction<Promise<void>, initialStateType, unknown, ActionType> => {
    return async (dispatch: Dispatch<ActionType>) => {
        dispatch(toggleIsFetchingAC(id, true))
        let response=  await usersApi.gtAuthDelete(id)
            if (response.resultCode === 0) {
                dispatch(unFollowAC(id))
            }
            dispatch(toggleIsFetchingAC(id, false))

    }
}

//Name type
const follow = 'FOLLOW'
const unFollow = 'UNFOLLOW'
const setUsers = 'setUsers'
const setCurrentPage = 'SET_CURRENT-PAGE'
const setTotalUser = 'SET-TOTAL-USER'
const toggleFetching = "TOGGLE-FETCHING"
const toggleProgress = "TOGGLE-PROGRESS-IS-FETCHING"
//Types
export type usersType = { id: number, photos: PhotosType, follow: boolean, name: string, status: string, location: LocationType }
type PhotosType = {
    small: null | string
    large: null | string
}
type LocationType = {
    city: string
    country: string
}
export type initialStateType = {
    users: usersType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    progressIsFetching: number[]
}
let initialState: initialStateType = {
    users: [],
    totalUsersCount: 20,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
    progressIsFetching: []
}
export type ActionType = ReturnType<typeof followAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUserAC>
    | ReturnType<typeof toggleFetchingAC>

export default reducerUsers;