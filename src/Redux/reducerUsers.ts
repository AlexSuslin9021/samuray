





const follow='FOLLOW'
const unFollow='UNFOLLOW'
const setUsers='setUsers'
const setCurrentPage='SET_CURRENT-PAGE'
const setTotalUser='SET-TOTAL-USER'
type PhotosType={
    small: null | string
    large: null | string
}
export type usersType=
    {id:number, photos: PhotosType, follow:boolean, name: string, status: string, location:locationtype}

// {
//     "name": "Vitaliy16",
//     "id": 28233,
//     "uniqueUrlName": null,
//     "photos": {
//     "small": null,
//         "large": null
// },
//     "status": null,
//     "followed": false
// },

type locationtype={
    city: string
    country:string
}
export type initialStateType={
    users:usersType[]
    totalUsersCount:number
    pageSize:number
    currentPage:number
}

let initialState= {
    users: [
        // {id: 1, urlFoto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwtLELR6UBlHi5ZFe04WtAijnDam0G94bMQ&usqp=CAU' , follow: true, name: 'alex', status: 'I am good', location: {city: 'London', country: 'England'}},
        // {id: 2, urlFoto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwtLELR6UBlHi5ZFe04WtAijnDam0G94bMQ&usqp=CAU', follow: false, name: 'Sveta', status: 'I am crazy', location: {city: 'Milan', country: 'Italy'}},
        // {id: 3, urlFoto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwtLELR6UBlHi5ZFe04WtAijnDam0G94bMQ&usqp=CAU', follow: true, name: 'Dima', status: 'I am smart', location: {city: 'LA', country: 'USA'}}
    ],
    totalUsersCount:20,
    pageSize:5,
    currentPage:1,
}

  export  const reducerUsers = (state:initialStateType=initialState, action:followTupe | unFollow | setUsersAC | setCurrentPageType | setTotalUserType) :initialStateType => {
       debugger
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
            default: return state
        }
    }


export const setCurrentPageAC=( page:number)=>{

    return {
        type: setCurrentPage,
       page
    }
}
type setCurrentPageType={
    type:'SET_CURRENT-PAGE'
    page:number
}
export const setTotalUserAC=( totalUser:number)=>{

    return {
        type: setTotalUser,
        totalUser
    }
}
type setTotalUserType={
    type:'SET-TOTAL-USER'
    totalUser:number
}

type followTupe={
    type:'FOLLOW'
    id:number
}
export const followAC=( id:number)=>{

    return {
        type: follow,
        id:id
    }
}
type unFollow={
    type:'UNFOLLOW'
    id:number
}
export const unFollowAC=(id:number)=>{
    return {
        type: unFollow,
        id: id
    }

}
 type setUsersAC={
    type: 'setUsers',
    user: usersType[]
}
export const setUsersAC=(users:usersType[])=>{
    return {
        type: setUsers,
        user: users
    }

}

export default reducerUsers;