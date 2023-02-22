import {propsPostMessege, propsProfilePage} from "./State";

let initialState = {
    post: [
        {id: '1', message: 'How are you?', likes: 15},
        {id: '1', message: 'It\'s my first post!', likes: 20}],
    newTextPost: ''
}
type actionPOstAc = {
    type: 'ADD-POST',
    post: string
}
type changeAc = {
    type: 'CHANGE-CALLBASK',
    newText: string
}

const reducerProfile = (state: propsProfilePage = initialState, action: actionPOstAc | changeAc): propsProfilePage => {
    debugger
    switch (action.type) {
        case'ADD-POST':
            let newPOst: propsPostMessege = {id: new Date().getTime(), message: action.post, likes: 15};
            state.newTextPost=''
            return {...state, post: [...state.post, newPOst]};
        case 'CHANGE-CALLBASK':
            // state.newTextPost = action.post
            return {...state, newTextPost: action.newText};
        default:
            return state
    }
}
export const addPOstAc = (title: string) => {
    return {
        type: 'ADD-POST',
        post: title
    }
}

export const ChangeCreator = (title: string) => {
    return {
        type: 'CHANGE-CALLBASK',
        newText: title
    }
}

export default reducerProfile;