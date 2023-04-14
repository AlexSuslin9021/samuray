
//initialState
import {AnyAction, Dispatch} from "redux";
import {getAuthThunkCreator} from "../authReducers/authReducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType, useAppDispatch} from "../reduxState";


const initialized_Success = 'INITIALIZED-SUCCESS'

let initialState: initialStateType = {initialized:false}
// appReducer


export const appReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case initialized_Success: {return {...state,initialized:true }}
        default:
            return state
    }
}
// Action creator

export const initializedSuccess = () => {return {type: initialized_Success} as const}
export const initializedApp =():AppThunkType=>(dispatch=useAppDispatch())=>{

     let promise= dispatch(getAuthThunkCreator())

   Promise.all([promise]).then(()=>{
       dispatch(initializedSuccess())
   })
}

//types
export type initialStateType = { initialized:boolean }
type setUserDataType =ReturnType<typeof initializedSuccess>
type ActionType = setUserDataType
type AppThunkType<ReturnType = void >=ThunkAction<ReturnType, AppStateType, unknown, any>
type ThunkDispatchType=ThunkDispatch<AppStateType, any, AnyAction>