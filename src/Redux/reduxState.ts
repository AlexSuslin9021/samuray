import {combineReducers, createStore} from "redux";
import reducerSidebar from "./reducerSidebar";
import reducerProfile from "./reducerProfile";
import reducerDialogs from "./reduserDialogs/reducerDialogs";
import reducerUsers from "./reducerUsers";

let redusers = combineReducers({

        reducerSidebar,
        reducerProfile,
        reducerDialogs,
        reducerUsers
    }
)
export type AppstateType = ReturnType<typeof redusers>

let store = createStore(redusers)
export default store