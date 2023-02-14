import {propsPostMessege, propsProfilePage} from "./State";

const reducerProfile = (state: propsProfilePage, action: any) => {
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