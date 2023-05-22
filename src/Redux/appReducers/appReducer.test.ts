import {addPOstAc, propsProfilePage, reducerProfile} from "../reducerProfile/reducerProfile";
import {appReducer, initializedSuccess, initialStateType} from "./appReducer";

let initialState:initialStateType
beforeEach(()=>{
    initialState={
        initialized:false,
        error:''
    }
})
test('change initialized for true',()=>{

    const action = initializedSuccess()
    const newState = appReducer(initialState, action)

    expect(newState.initialized).toBe(true)

})