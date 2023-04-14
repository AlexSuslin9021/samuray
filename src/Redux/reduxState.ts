import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import reducerSidebar from "./reducerSidebar/reducerSidebar";
import reducerDialogs from "./reduserDialogs/reducerDialogs";
import reducerUsers from "./reducerUsers/reducerUsers";
import {reducerProfile} from "./reducerProfile/reducerProfile";
import {authReducer} from "./authReducers/authReducer";
import thunk, { ThunkDispatch} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {useDispatch} from "react-redux";
import {appReducer} from "./appReducers/appReducer";

let redusers = combineReducers({

        reducerSidebar,
        reducerProfile,
        reducerDialogs,
        reducerUsers,
        authReducer,
        appReducer,
        form: formReducer
    }
)
export type AppstateType = ReturnType<typeof redusers>
type ThunkDispatchType=ThunkDispatch<any, any, AnyAction>
debugger
export const useAppDispatch = () =>  useDispatch<ThunkDispatchType>()
export type AppStateType=ReturnType<typeof redusers>

// export type AppThunkType<ReturnType = void >=ThunkAction<ReturnType, AppStateType, unknown, AppActionType>


let store = createStore(redusers, applyMiddleware(thunk))
export default store

