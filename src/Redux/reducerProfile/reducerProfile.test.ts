import {addPOstAc, changeCreator, propsProfilePage, reducerProfile} from "./reducerProfile";

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
        }
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

    let action =changeCreator('addTitle')
    let newState=reducerProfile(initialState,action )

    expect(newState.newTextPost).toBe('addTitle')
    expect(newState.post.length).toBe(2)

})