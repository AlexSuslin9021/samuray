

export type propsProfilePage = {
    post: propsPostMessege[]
    newTextPost: string
    profile:ProfileType
}
type ProfileType={

        "aboutMe": string,
        "contacts": ContactProfileType
        "lookingForAJob": boolean,
        "lookingForAJobDescription": "не ищу, а дурачусь",
        "fullName": "samurai dimych",
        "userId": number,
        "photos": PhotoType

}
type ContactProfileType={

        "facebook": string
        "website": null | string
        "vk":string
        "twitter": string
        "instagram": string
        "youtube": null | string
        "github": string
        "mainLink": null | string

}
type PhotoType={

        "small": string
        "large": string

}


export type propsPostMessege = {
    id: string | number
    message: string
    likes: number
}
let initialState:propsProfilePage = {
    post: [
        {id: '1', message: 'How are you?', likes: 15},
        {id: '1', message: 'It\'s my first post!', likes: 20}],
    newTextPost: '',
    profile:{
        "aboutMe": "я круто чувак 1001%",
        "contacts": {
            "facebook": "facebook.com",
            "website": null,
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": null,
            "github": "github.com",
            "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "не ищу, а дурачусь",
        "fullName": "samurai dimych",
        "userId": 2,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    }
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

