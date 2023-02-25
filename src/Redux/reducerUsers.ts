

const follow='FOLLOW'
const unFollow='UNFOLLOW'
const setUsers='setUsers'

export type usersType=
    {id:number, urlFoto: string, follow:boolean, name: string, status: string, location:locationtype}

type locationtype={
    city: string
    country:string
}
export type initialStateType={
    users:usersType[]
}

let initialState= {
    users: [{id: 1, urlFoto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwtLELR6UBlHi5ZFe04WtAijnDam0G94bMQ&usqp=CAU' , follow: true, name: 'alex', status: 'I am good', location: {city: 'London', country: 'England'}},
        {id: 2, urlFoto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwtLELR6UBlHi5ZFe04WtAijnDam0G94bMQ&usqp=CAU', follow: false, name: 'Sveta', status: 'I am crazy', location: {city: 'Milan', country: 'Italy'}},
        {id: 3, urlFoto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwtLELR6UBlHi5ZFe04WtAijnDam0G94bMQ&usqp=CAU', follow: true, name: 'Dima', status: 'I am smart', location: {city: 'LA', country: 'USA'}}
    ]
}




  export  const reducerUsers = (state:initialStateType=initialState, action:followTupe | unFollow | setUsersAC):initialStateType => {
    debugger
        switch(action.type) {
            case follow: {
                return {...state, users:state.users.map(u=>u.id==action.id ?{...u,follow:true }: u) }
            }
            case unFollow: {
                return {...state, users:state.users.map(u=>u.id===action.id ?{...u,follow:false }: u) }
            }
            case setUsers: {
                return {...state, users: [...state.users, action.user] }
            }
            default: return state
        }
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
    user: usersType
}
export const setUsersAC=(users:usersType)=>{
    return {
        type: unFollow,
        user: users
    }

}

export default reducerUsers;