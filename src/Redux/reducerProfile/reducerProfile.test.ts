import {addPOstAc, changeProfileAC, changeTitleAC, propsProfilePage, reducerProfile} from "./reducerProfile";

let initialState:propsProfilePage
beforeEach(()=>{
    initialState={
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
        },
        status:'status'
    }
})
test('New post should be add in array post',()=>{

    const action =addPOstAc('Done')
    const newState=reducerProfile(initialState, action)

    expect(newState.post.length).toBe(3)
    expect(newState.post[2].message).toBe('Done')
    expect(newState.newTextPost).toBe('')

})

test('change text post',()=>{

    let action =changeTitleAC('addTitle')
    let newState=reducerProfile(initialState,action )

    expect(newState.newTextPost).toBe('addTitle')
    expect(newState.post.length).toBe(2)

})

test('change profile',()=>{

    let action =changeProfileAC({
        "aboutMe": "Done",
        "contacts": {
            "facebook": "facebook.com",
            "website": 'null',
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": "null",
            "github": "github.com",
            "mainLink": "null"
        },
        "lookingForAJob": false,
        "lookingForAJobDescription": "не ищу, а дурачусь",
        "fullName": "samurai dimych",
        "userId": 2,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }})
    let newState=reducerProfile(initialState,action )

    expect(newState.profile.aboutMe).toBe("Done")
    expect(newState.profile.contacts.website).toBe("null")
    expect(newState.profile.contacts.youtube).toBe("null")
    expect(newState.profile.lookingForAJob).toBe(false)

})