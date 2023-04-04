import {applyMiddleware, combineReducers, createStore} from "redux";
import reducerSidebar from "./reducerSidebar/reducerSidebar";
import reducerDialogs from "./reduserDialogs/reducerDialogs";
import reducerUsers from "./reducerUsers/reducerUsers";
import {reducerProfile} from "./reducerProfile/reducerProfile";
import {authReducer} from "./authReducers/authReducer";
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let redusers = combineReducers({

        reducerSidebar,
        reducerProfile,
        reducerDialogs,
        reducerUsers,
        authReducer,
        form: formReducer
    }
)
export type AppstateType = ReturnType<typeof redusers>

let store = createStore(redusers, applyMiddleware(thunk))
export default store

