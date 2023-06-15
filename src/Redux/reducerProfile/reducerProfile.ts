import {Dispatch} from "redux";
import {profileApi, saveDataProfileType, usersApi} from "../../API/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../reduxState";
import {getUsers} from "../Selector/user-selector";
import {handleServerAppError, handleServerNetworkError} from "../../common/error-utils/error-utils";
import axios from "axios";

let initialState: propsProfilePage = {
    post: [
        {id: '1', message: 'How are you?', likes: 15},
        {id: '2', message: 'It\'s my first post!', likes: 20}],
    newTextPost: '',
    profile: {
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
        "userId": 28028,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    },
    status: 'status',
    isOwner: false
}
export const reducerProfile = (state: propsProfilePage = initialState, action: ActionType): propsProfilePage => {
    switch (action.type) {
        case'ADD-POST':
            let newPOst: propsPostMessege = {id: new Date().getTime(), message: action.post, likes: 15};
            state.newTextPost = ''
            return {...state, post: [...state.post, newPOst]};
        case "CHANGE-PROFILE":
            return {...state, profile: action.profile};
        case "GET-STATUS":
            return {...state, status: action.status}
        case "SAVE-PHOTO":
            debugger
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state
    }
}

export const addPOstAc = (title: string) => {return {type: 'ADD-POST', post: title} as const}
export const savePhotoAC = (photos: { small: string, large: string }) => {return {type: 'SAVE-PHOTO', photos} as const}
export const changeProfileAC = (profile: ProfileType) => {return {type: 'CHANGE-PROFILE', profile} as const}
export const getStatusAC = (status: string) => {return {type: 'GET-STATUS', status} as const}

export const changeProfileThunkCreator = (userId: string): ThunkAction<Promise<void>, propsProfilePage, unknown, ActionType> => {
    return async (dispatch: Dispatch<ActionType>) => {
        try {
            let response = await usersApi.getProfile(userId)
            dispatch(changeProfileAC(response.data))
        } catch (e) {
            if (axios.isAxiosError(e))
                handleServerNetworkError(e, dispatch)
        }
    }
}
export const getProfileStatusTC = (userId: string): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => {
    return async (dispatch: Dispatch<ActionType>) => {
        try {
            let response = await profileApi.getStatus(userId)
            dispatch(getStatusAC(response.data))
        } catch (e) {
            if (axios.isAxiosError(e))
                handleServerNetworkError(e, dispatch)
        }
    }
}
export const updateProfileStatusTC = (status: string): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => {
    return async (dispatch: Dispatch) => {
        try {
            let response = await profileApi.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(getStatusAC(status))
            } else {
                handleServerAppError(response.data, dispatch)
            }
        } catch (e) {
            if (axios.isAxiosError(e))
                handleServerNetworkError(e, dispatch)
        }
    }
}
export const savePhotoTC = (photo: any): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => {
    return async (dispatch: Dispatch) => {
        try {
            let res = await profileApi.updatePhoto(photo)
            if (res.data.resultCode === 0) {
                debugger
                dispatch(savePhotoAC(res.data.data.photos))
            } else {

                handleServerAppError(res.data, dispatch)
            }
        } catch (e) {
            if (axios.isAxiosError(e))
                handleServerNetworkError(e, dispatch)
        }
    }
}
export const saveProfileDataTC = (profile: saveDataProfileType): ThunkAction<Promise<void>, any, unknown, ActionType> => {
    return async (dispatch, getState) => {
        try {
            let res = await profileApi.saveDataProfile(profile)
            const userId = getState().authReducer.data.id
            if (res.data.resultCode === 0) {
                return dispatch(changeProfileThunkCreator(userId.toString()))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        } catch (e) {
            if (axios.isAxiosError(e))
                handleServerNetworkError(e, dispatch)
        }
    }
}

export type propsProfilePage = {
    post: propsPostMessege[]
    newTextPost: string
    profile: ProfileType
    status: string
    isOwner: boolean
}
export type ProfileType = {

    "aboutMe": string,
    "contacts": ContactProfileType
    "lookingForAJob": boolean,
    "lookingForAJobDescription": "не ищу, а дурачусь",
    "fullName": "samurai dimych",
    "userId": number,
    "photos": PhotoType


}
export type ContactProfileType = {

    "facebook": any
    "website": any
    "vk": any
    "twitter": any
    "instagram": any
    "youtube": any
    "github": any
    "mainLink": any

}
type PhotoType = {

    "small": string
    "large": string

}
export type propsPostMessege = {
    id: string | number
    message?: string
    likes: number
}
type ActionType =
    ReturnType<typeof addPOstAc>
    | ReturnType<typeof changeProfileAC>
    | ReturnType<typeof getStatusAC>
    | ReturnType<typeof savePhotoAC>
