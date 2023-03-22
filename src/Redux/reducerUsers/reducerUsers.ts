





const follow='FOLLOW'
const unFollow='UNFOLLOW'
const setUsers='setUsers'
const setCurrentPage='SET_CURRENT-PAGE'
const setTotalUser='SET-TOTAL-USER'
const toggleFetching="TOGGLE-FETCHING"
const toggleProgress="TOGGLE-PROGRESS-IS-FETCHING"

type PhotosType={
    small: null | string
    large: null | string
}
export type usersType=
    {id:number, photos: PhotosType, follow:boolean, name: string, status: string, location:locationtype}


type locationtype={
    city: string
    country:string
}
export type initialStateType={
    users:usersType[]
    totalUsersCount:number
    pageSize:number
    currentPage:number
    isFetching:boolean
    progressIsFetching:number[]
}

let initialState:initialStateType= {
    users: [],
    totalUsersCount:20,
    pageSize:5,
    currentPage:1,
    isFetching:false,
    progressIsFetching:[]
}
type ActionType=followTupe | toggleIsFetchingType | unFollow | setUsersAC | setCurrentPageType | setTotalUserType | ToggleFetchingType

  export  const reducerUsers = (state:initialStateType=initialState, action:ActionType) :initialStateType => {

        switch(action.type) {
            case follow: {
                return {...state, users:state.users.map(u=>u.id==action.id ?{...u,follow:true }: u) }
            }
            case unFollow: {
                return {...state, users:state.users.map(u=>u.id===action.id ?{...u,follow:false }: u) }
            }
            case setUsers: {
                return {...state, users: action.user }
            }
            case setCurrentPage: {
                return {...state, currentPage: action.page }
            }
            case setTotalUser : {
                return {...state, totalUsersCount: action.totalUser }
            }
            case toggleFetching : {
                return {...state, isFetching: action.isFetching }
            }
            case toggleProgress : {
                return {...state, progressIsFetching: action.isFetching ? [...state.progressIsFetching, action.id]
                        :
                state.progressIsFetching.filter(el=>el !== action.id)}
            }
            default: return state
        }
    }
    //ACTION CREATOR

    //ToggleFetchingType
type ToggleFetchingType= {type: "TOGGLE-FETCHING" , isFetching:boolean}
export const toggleFetchingAC=( isFetching:boolean) : ToggleFetchingType=>{return {type: toggleFetching, isFetching}}

//setCurrentPage
type setCurrentPageType={
    type:'SET_CURRENT-PAGE'
    page:number }
export const setCurrentPageAC=( page:number):setCurrentPageType=>{return {type: setCurrentPage, page}}

// setTotalUser
type setTotalUserType={
    type:'SET-TOTAL-USER'
    totalUser:number
}
export const setTotalUserAC=( totalUser:number):setTotalUserType=>{return {type: setTotalUser, totalUser}}

//Follow
type followTupe={
    type:'FOLLOW'
    id:number
}
export const followAC=( id:number): followTupe=>{return {type: follow, id:id}}

//UnFollow
type unFollow={ type:'UNFOLLOW'
    id:number
}
export const unFollowAC=(id:number):unFollow=>{return {type: unFollow, id: id }

}
// setUsersAC
 type setUsersAC={
    type: 'setUsers',
    user: usersType[]
}
export const setUsersAC=(users:usersType[]):setUsersAC=>{return {type: setUsers, user: users}}

//toggleIsFetching
type toggleIsFetchingType={
    type: "TOGGLE-PROGRESS-IS-FETCHING",
    id:number
    isFetching:boolean
}
export const toggleIsFetchingAC=(id:number, isFetching:boolean): toggleIsFetchingType=>{return {type: toggleProgress, id,isFetching}}

export default reducerUsers;