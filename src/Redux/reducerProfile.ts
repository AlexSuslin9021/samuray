import {propsPostMessege, propsProfilePage} from "./State";
let initialState={
    post: [
        {id: '1', message: 'How are you?', likes: 15},
        {id: '1', message: 'It\'s my first post!', likes: 20}],
    newTextPost: ''
}
const reducerProfile = (state: propsProfilePage=initialState, action: any) => {
    switch (action.type) {
        case'ADD-POST':
            let newPOst: propsPostMessege = {id: new Date().getTime(), message: action.post, likes: 15};
            state.post.push(newPOst);
            return state;
        case 'CHANGE-CALLBASK':
            state.newTextPost = action.post
            return state;
        default:return state
    }
}
export const addPOstAc=(title:string)=>{


    return {
        type: 'ADD-POST',
        post: title
    }
}

export const ChangeCreator=(title:string)=>{
    return {
        type: 'CHANGE-CALLBASK',
        newText: title
    }
}

export default reducerProfile;