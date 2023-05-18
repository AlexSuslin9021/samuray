import {authApi, captchaApi, usersApi} from "../../API/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {stopSubmit} from 'redux-form'



let initialState: initialStateType = {

    data: {id: '', login: "", email: "@inbox.ru"},
    messages: [],
    fieldsErrors: [],
    resultCode: 0,
    isAuth: false,
    captcha:null
}
export const authReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case setUserData:
        return {...state, data: {...action.data}}
        case "CHANGE_ISAUTH":
            return {...state, isAuth:action.isAuth}
        case "GET-CAPTCHA":
            debugger
            return {...state, captcha:action.captcha}
        default:
            return state
    }
}

// Action creator
export const setUserDataAC = (data: DataType) => {return {type: setUserData, data} as const}
export const isAuthAC = (isAuth: boolean) => {return {type: 'CHANGE_ISAUTH', isAuth} as const}
export const getCaptchaAC=(captcha:string) =>{return{type:'GET-CAPTCHA', captcha} as const }

//Thunk creator
export const setUserThunkCreator = (id: string | null , email: string | null, login: string | null) => ({
    type: 'SET_USER_DATA', data: {id, email, login}

}) as const
export const getAuthThunkCreator = (): ThunkAction<Promise<void>, initialStateType, unknown, ActionType> => {
   return   async (dispatch: Dispatch<ActionType>) => {
       const response=await authApi.me()
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setUserDataAC({id, email, login}))
                dispatch(isAuthAC(true))
            }
            // dispatch(setUserDataAC(response.data))

    }

}
export const loginThunkCreator = (email: string, password: string, rememberMe: boolean = false, captcha?:string|null): ThunkAction<Promise<void>, any, unknown, ActionType> => {
debugger
    return async (dispatch: any) => {
      let response=await  authApi.loginCreate(email, password, rememberMe,captcha)
            if (response.data.resultCode === 0) {
                dispatch(getAuthThunkCreator())
            } else {
                if(response.data.resultCode===10){
                    dispatch(getCaptchaTC())
                }
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit("Login", {_error: message}))
            }
    }
}
export const loginOutThunkCreator = (): ThunkAction<Promise<void>, initialStateType, unknown, ActionType> => {
    return async (dispatch: any) => {
       await authApi.loginDelete().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserThunkCreator(null, null, null, ))
                dispatch(isAuthAC(false))
            }
            // dispatch(setUserDataAC(response.data))
        })
    }
}
export const getCaptchaTC = (): ThunkAction<Promise<void>, initialStateType, unknown, ActionType> => {
    debugger
    return async (dispatch) => {
     let response = await captchaApi.getCaptcha();
        dispatch(getCaptchaAC(response.data.url))


    }
}

//Name type
const setUserData = 'SET_USER_DATA'
//Types
export type initialStateType = {
    data: DataType
    messages: [],
    fieldsErrors: [],
    resultCode: number
    isAuth: boolean
    captcha:null |string
}
export type DataType = {
    id: string | null
    email: string | null,
    login: string | null
    captcha?:null |string
}
type ActionType = ReturnType<typeof setUserDataAC> | ReturnType<typeof isAuthAC> | ReturnType<typeof getCaptchaAC>