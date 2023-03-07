import {addPOstAc, changeCreator, propsProfilePage, reducerProfile} from "./reducerProfile";

test('New post should be add in array post',()=>{
    let initialState: propsProfilePage = {
        post: [
            {id: '1', message: 'How are you?', likes: 15},
            {id: '1', message: 'It\'s my first post!', likes: 20}],
        newTextPost: ''
    }
    const action =addPOstAc('Done')
    const newState=reducerProfile(initialState, action)

    expect(newState.post.length).toBe(3)
    expect(newState.post[2].message).toBe('Done')
    expect(newState.newTextPost).toBe('')

})

test('change text post',()=>{
    let initialState: propsProfilePage = {
        post: [
            {id: '1', message: 'How are you?', likes: 15},
            {id: '1', message: 'It\'s my first post!', likes: 20}],
        newTextPost: ''
    }
    let action =changeCreator('addTitle')
    let newState=reducerProfile(initialState,action )

    expect(newState.newTextPost).toBe('addTitle')
    expect(newState.post.length).toBe(2)

})