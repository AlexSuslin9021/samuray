
//initialState
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

//types
export type initialStateType = { initialized:boolean }
type setUserDataType =ReturnType<typeof initializedSuccess>
type ActionType = setUserDataType