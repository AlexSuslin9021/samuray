import {authApi, usersApi} from "../../API/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

// import {propsProfilePage} from "../reducerProfile/reducerProfile";
import {stopSubmit} from 'redux-form'
import {Redirect} from "react-router-dom";

const setUserData = 'SET_USER_DATA'

//initialState

export type initialStateType = {
    data: DataType
    messages: [],
    fieldsErrors: [],
    resultCode: number
    isAuth: boolean
}
export type DataType = {
    id: string | null
    email: string | null,
    login: string | null
}

let initialState: initialStateType = {

    data: {id: '28028', login: "Alex2190", email: "alexsuslin@inbox.ru"},
    messages: [],
    fieldsErrors: [],
    resultCode: 0,
    isAuth: false
}
// authReducer

type ActionType = setUserDataType
export const authReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case setUserData: {return {...state, data: {...action.data}, isAuth: true}}
        default:
            return state
    }
}
// Action creator

type setUserDataType = {
    type: 'SET_USER_DATA'
    data: DataType
}
export const setUserDataAC = (data: DataType): setUserDataType => {
    return {type: setUserData, data}
}

export const setUserThunkCreator = (id: string | null , email: string | null, login: string | null, isAuth:boolean) => ({
    // :ThunkAction<Promise<void>, initialStateType, unknown, ActionType>
    type: 'SET_USER_DATA', data: {id, email, login, isAuth}
    // return async (dispatch:Dispatch<setUserDataType>)=>{
    //     usersApi.getAuth().then(response=>{
    //         if(response.resultCode===0)
    //           dispatch(setUserDataAC(response.data))
    //     })
    // }
}) as const
export const getAuthThunkCreator = (): ThunkAction<Promise<void>, initialStateType, unknown, ActionType> => {
    return async (dispatch: Dispatch<ActionType>) => {
        authApi.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setUserThunkCreator(id, email, login, true))
            }
            // dispatch(setUserDataAC(response.data))
        })
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean = false): ThunkAction<Promise<void>, initialStateType, unknown, ActionType> => {

    return async (dispatch: any) => {
        authApi.loginCreate(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthThunkCreator())
            }
            let message=response.data.messages.length>0 ? response.data.messages[0]:"Some error"
            dispatch(stopSubmit("Login",{_error:message}))
        })
    }
}
export const loginOutThunkCreator = (): ThunkAction<Promise<void>, initialStateType, unknown, ActionType> => {
    return async (dispatch: any) => {
        authApi.loginDelete().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserThunkCreator(null, null, null, false))
            }
            // dispatch(setUserDataAC(response.data))
        })
    }
}