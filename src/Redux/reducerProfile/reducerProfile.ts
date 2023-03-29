import {Dispatch} from "redux";
import {usersApi} from "../../API/api";
import {ThunkAction} from "redux-thunk";



export type propsProfilePage = {
    post: propsPostMessege[]
    newTextPost: string
    profile:ProfileType
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
    }
}



type ActionType=actionPOstType | changeTitleType | changeProfileType
export const reducerProfile = (state: propsProfilePage = initialState, action: ActionType ): propsProfilePage => {

    switch (action.type) {
        case'ADD-POST':
            let newPOst: propsPostMessege = {id: new Date().getTime(), message: action.post, likes: 15};
            state.newTextPost=''
            return {...state, post: [...state.post, newPOst]};
        case 'CHANGE-CALLBASK':
            // state.newTextPost = action.post
            return {...state, newTextPost: action.newText};
        case "CHANGE-PROFILE":
            return {...state, profile:action.profile}
        default:
            return state
    }
}

type actionPOstType = {
    type: 'ADD-POST',
    post: string
}
export const addPOstAc = (title: string):actionPOstType => {
    return {
        type: 'ADD-POST',
        post: title
    }
}

type changeTitleType = {
    type: 'CHANGE-CALLBASK',
    newText: string
}
export const changeTitleAC = (title: string):changeTitleType => {
    return {
        type: 'CHANGE-CALLBASK',
        newText: title
    }
}




type changeProfileType={
    type: 'CHANGE-PROFILE',
    profile:ProfileType
}



export const changeProfileAC = (profile: ProfileType):changeProfileType => {
    return {
        type: 'CHANGE-PROFILE',
        profile
    }
}

export const changeProfileThunkCreator=(userId:any):ThunkAction<Promise<void>, propsProfilePage, unknown, changeProfileType>=>{
    return async (dispatch: Dispatch<ActionType>)=>{
        usersApi.getProfile(userId).then(response => {

            dispatch(changeProfileAC(response))

        })
    }
}

