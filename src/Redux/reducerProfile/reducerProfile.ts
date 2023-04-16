import {Dispatch} from "redux";
import {profileApi, usersApi} from "../../API/api";
import {ThunkAction} from "redux-thunk";


//initialState
let initialState:propsProfilePage = {
    post: [
        {id: '1', message: 'How are you?', likes: 15},
        {id: '2', message: 'It\'s my first post!', likes: 20}],
    newTextPost: '',
    profile:{
        "aboutMe": "я крут",
        "contacts": {
            "facebook": "facebook.com",
            "website": null,
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": null,
            "github": "github.com",
            "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "не ищу, а дурачусь",
        "fullName": "samurai dimych",
        "userId": 2,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    },
    status:'status'
}
export const reducerProfile = (state: propsProfilePage = initialState, action: ActionType ): propsProfilePage => {

    switch (action.type) {
        case'ADD-POST':
            let newPOst: propsPostMessege = {id: new Date().getTime(), message: action.post, likes: 15};
            state.newTextPost=''
            return {...state, post: [...state.post, newPOst]};
        // case 'CHANGE-CALLBASK':
        //     // state.newTextPost = action.post
        //     return {...state, newTextPost: action.newText};
        case "CHANGE-PROFILE":
            return {...state, profile:action.profile};
        case "GET-STATUS":
            return {...state, status:action.status}
        default:
            return state
    }
}

//Action Creator
export const addPOstAc = (title: string) => {return {type: 'ADD-POST', post: title} as const}
export const changeProfileAC = (profile: ProfileType) => {return {type: 'CHANGE-PROFILE', profile} as const}
export const getStatusAC = (status: string) => {return {type: 'GET-STATUS', status} as const}

//Thunk Creator
export const changeProfileThunkCreator=(userId:string):ThunkAction<Promise<void>, propsProfilePage, unknown, ActionType>=>{
    return async (dispatch: Dispatch<ActionType>)=>{
        usersApi.getProfile(userId).then(response => {

            dispatch(changeProfileAC(response))

        })
    }
}
export const getProfileStatusTC=(userId:string):ThunkAction<Promise<void>, propsProfilePage, unknown, ActionType>=>{
    return async (dispatch: Dispatch<ActionType>)=>{

        profileApi.getStatus(userId).then(response=>{

            dispatch(getStatusAC(response.data))
        })
    }
}
export const updateProfileStatusTC=(status:string):ThunkAction<Promise<void>, propsProfilePage, unknown, ActionType>=>{
    return async (dispatch: Dispatch<ActionType>)=>{

        profileApi.updateStatus(status).then(response=>{
if (response.data.resultCode===0)
            dispatch(getStatusAC(status))
        })
    }
}

//Types

export type propsProfilePage = {
    post: propsPostMessege[]
    newTextPost: string
    profile:ProfileType
    status:string
}
export type ProfileType={

    "aboutMe": string,
    "contacts": ContactProfileType
    "lookingForAJob": boolean,
    "lookingForAJobDescription": "не ищу, а дурачусь",
    "fullName": "samurai dimych",
    "userId": number,
    "photos": PhotoType


}
type ContactProfileType={

    "facebook": string
    "website": null | string
    "vk":string
    "twitter": string
    "instagram": string
    "youtube": null | string
    "github": string
    "mainLink": null | string

}
type PhotoType={

    "small": string
    "large": string

}
export type propsPostMessege = {
    id: string | number
    message?: string
    likes: number
}
type ActionType=ReturnType<typeof addPOstAc>  | ReturnType<typeof changeProfileAC> | ReturnType<typeof getStatusAC>

//
// type changeStatusType={
//     type: 'CHANGE-STATUS',
//     status: string
// }
//
// export const changeStatusAC = (status: string) => {
//     return {
//         type: 'CHANGE-STATUS',
//         status
//     }
// }
// type changeTitleType = {
//     type: 'CHANGE-CALLBASK',
//     newText: string
// }
// export const changeTitleAC = (title: string):changeTitleType => {
//     return {
//         type: 'CHANGE-CALLBASK',
//         newText: title
//     }
// }