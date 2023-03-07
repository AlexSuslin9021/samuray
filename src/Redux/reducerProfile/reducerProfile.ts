

export type propsProfilePage = {
    post: propsPostMessege[]
    newTextPost: string
}
export type propsPostMessege = {
    id: string | number
    message: string
    likes: number
}
let initialState = {
    post: [
        {id: '1', message: 'How are you?', likes: 15},
        {id: '1', message: 'It\'s my first post!', likes: 20}],
    newTextPost: ''
}
type actionPOstType = {
    type: 'ADD-POST',
    post: string
}
type changeType = {
    type: 'CHANGE-CALLBASK',
    newText: string
}

export const reducerProfile = (state: propsProfilePage = initialState, action: actionPOstType | changeType): propsProfilePage => {

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
export const addPOstAc = (title: string):actionPOstType => {
    return {
        type: 'ADD-POST',
        post: title
    }
}

export const changeCreator = (title: string):changeType => {
    return {
        type: 'CHANGE-CALLBASK',
        newText: title
    }
}

