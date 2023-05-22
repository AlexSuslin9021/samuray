import { Dispatch } from 'redux'

// setStatusAC
import {ResponseType} from "../../API/api";
import {setErrorAC} from "../../Redux/appReducers/appReducer";



export const handleServerAppError = <D>(data: ResponseType<D>, dispatch: Dispatch) => {
    if (data.messages.length) {
        debugger
        dispatch(setErrorAC(data.messages[0]))
    } else {
        dispatch(setErrorAC('Some error occurred'))
    }
    // dispatch(setStatusAC({status:'failed'}))
}

export const handleServerNetworkError = (error: { message: string }, dispatch: any) => {
    debugger
    dispatch(setErrorAC(error.message))
    // dispatch(setStatusAC({status:'failed'}))
}