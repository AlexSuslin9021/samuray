
import {combineReducers, createStore} from "redux";
import reducerSidebar from "./reducerSidebar";
import reducerProfile from "./reducerProfile";
import reducerDialogs from "./reducerDialogs";

let redusers = combineReducers({
    reducerSidebar,
    reducerProfile,
    reducerDialogs
}
)

let store = createStore(redusers)
export default store