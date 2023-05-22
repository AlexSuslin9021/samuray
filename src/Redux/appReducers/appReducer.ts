import {AnyAction} from "redux";
import {getAuthThunkCreator} from "../authReducers/authReducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType, useAppDispatch} from "../reduxState";


let initialState: initialStateType = {initialized: false, error: null}
export const appReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case initialized_Success: {return {...state, initialized: true}}
        case setError :{return {...state, error:action.error}}
        default:return state
    }
}

export const initializedSuccess = () => {return {type: initialized_Success} as const}
export const setErrorAC = (error:string | null) => {return {type:"SET-ERROR", error} as const}

export const initializedAppTC = (): AppThunkType => (dispatch = useAppDispatch()) => {
    let promise = dispatch(getAuthThunkCreator())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
}

const initialized_Success = 'INITIALIZED-SUCCESS'
const setError = 'SET-ERROR'
export type initialStateType = { initialized: boolean, error: string | null }
type ActionType = ReturnType<typeof initializedSuccess> | ReturnType<typeof setErrorAC>
type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, any>
type ThunkDispatchType = ThunkDispatch<AppStateType, any, AnyAction>

