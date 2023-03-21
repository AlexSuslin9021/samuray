import reducerUsers, {
    followAC,
    initialStateType,
    setCurrentPageAC,
    setTotalUserAC,
    setUsersAC, toggleFetchingAC, toggleIsFetchingAC,
    unFollowAC
} from "./reducerUsers";


let initialState: initialStateType
beforeEach(() => {
     initialState = {
        users: [{
            id: 2, photos: {
                small: '',
                large: ''
            }, follow: true, name: '', status: '', location: {
                city: 'string',
                country: ''
            }
        }],
        totalUsersCount: 20,
        pageSize: 5,
        currentPage: 1,
        isFetching: false,
        progressIsFetching: [2]
    }
})
test('follow should be true', () => {

    const action = followAC(2)
    const newState = reducerUsers(initialState, action)

expect(newState.users[0].follow).toBe(true)
expect(newState.users[0].id).toBe(2)
expect(newState.isFetching).toBe(false)

})

test('follow should be false', () => {

    const action = unFollowAC(2)
    const newState = reducerUsers(initialState, action)

    expect(newState.users[0].follow).toBe(false)
    expect(newState.users[0].id).toBe(2)
    expect(newState.isFetching).toBe(false)
})
test(' should to set users', () => {

    const action = setUsersAC([{
        id: 3, photos: {
            small: 'small',
            large: 'large'
        }, follow: false, name: 'Dima', status: 'Super', location: {
            city: 'LA',
            country: ''
        }
    }])
    const newState = reducerUsers(initialState, action)

    expect(newState.users[0].follow).toBe(false)
    expect(newState.users[0].id).toBe(3)
    expect(newState.users[0].photos.small).toBe('small')
    expect(newState.users[0].location.city).toBe('LA')

})

test(' should to set currentPage', () => {

    const action = setCurrentPageAC(2)
    const newState = reducerUsers(initialState, action)

    expect(newState.currentPage).toBe(2)
    expect(newState.pageSize).toBe(5)
    expect(newState.currentPage).toBe(1)
})

test(' should to set total user', () => {

    const action = setTotalUserAC(16)
    const newState = reducerUsers(initialState, action)

    expect(newState.totalUsersCount).toBe(16)
    expect(newState.pageSize).toBe(5)
    expect(newState.currentPage).toBe(1)
})

test(' should change toggle ', () => {

    const action = toggleFetchingAC(true)
    const newState = reducerUsers(initialState, action)

    expect(newState.isFetching).toBe(true)
    expect(newState.users[0].follow).toBe(true)
    expect(newState.currentPage).toBe(1)
})

test(' if isFetching ===false, filter id ', () => {

    const action = toggleIsFetchingAC(2, false)
    const newState = reducerUsers(initialState, action)


    expect(newState.progressIsFetching[0]).toBe(undefined)
    expect(newState.progressIsFetching.length).toBe(0)


})



