import {AnyAction, Dispatch} from "redux";
import {getAuthThunkCreator} from "../authReducers/authReducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType, useAppDispatch} from "../reduxState";

//initialState
let initialState: initialStateType = {initialized:false}
 const appReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case initialized_Success: {return {...state,initialized:true }}
        default:
            return state
    }
}
// Action creator
export const initializedSuccess = () => {return {type: initialized_Success} as const}
// Thunk creator
export const initializedAppTC =():AppThunkType=>(dispatch=useAppDispatch())=>{
     let promise= dispatch(getAuthThunkCreator())
   Promise.all([promise]).then(()=>{
       dispatch(initializedSuccess())
   })
}
//Name type
const initialized_Success = 'INITIALIZED-SUCCESS'
//Types
export type initialStateType = { initialized:boolean }
type ActionType = ReturnType<typeof initializedSuccess>
type AppThunkType<ReturnType = void >=ThunkAction<ReturnType, AppStateType, unknown, any>
type ThunkDispatchType=ThunkDispatch<AppStateType, any, AnyAction>

export default appReducer