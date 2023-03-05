import reducerDialogs, {addNewDialog, changeNewDialogCreator, propsDialogsPage} from "./reducerDialogs";



// beforeEach(() => {
//     const initialState:propsDialogsPage={
//         users: [
//             {
//                 id: '1',
//                 name: 'Alex',
//                 src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'
//             },
//             {
//                 id: '2',
//                 name: 'Dima',
//                 src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'
//             },
//             {
//                 id: '3',
//                 name: 'Misha',
//                 src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'
//             },
//             {
//                 id: '4',
//                 name: 'Tanya',
//                 src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'
//             },
//             {
//                 id: '5',
//                 name: 'Valera',
//                 src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'
//             },
//             {
//                 id: '6',
//                 name: 'Serg',
//                 src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'
//             },
//         ],
//         dialogs: [
//             {id: '1', name: 'Hello'},
//             {id: '2', name: 'How are you'},
//             {id: '3', name: 'I am good!'},],
//
//         newDialog:'',
//     }
// })
test('add new dialog',()=>{

    const initialState:propsDialogsPage={
        users: [
            {
                id: '1',
                name: 'Alex',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'
            },
            {
                id: '2',
                name: 'Dima',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'
            },
            {
                id: '3',
                name: 'Misha',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'
            },
            {
                id: '4',
                name: 'Tanya',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'
            },
            {
                id: '5',
                name: 'Valera',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'
            },
            {
                id: '6',
                name: 'Serg',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'
            },
        ],
        dialogs: [
            {id: '1', name: 'Hello'},
            {id: '2', name: 'How are you'},
            {id: '3', name: 'I am good!'},],

        newDialog:'',
    }


   const action=addNewDialog(  'hello')

    const newState=reducerDialogs(initialState, action)

expect(newState.dialogs.length).toBe(4)
expect(newState.dialogs[3].name).toBe('hello')
expect(newState.dialogs[2].name).toBe('I am good!')

})

test('change new dialog',()=>{
    const initialState:propsDialogsPage={
        users: [
            {
                id: '1',
                name: 'Alex',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'
            },
            {
                id: '2',
                name: 'Dima',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'
            },
            {
                id: '3',
                name: 'Misha',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'
            },
            {
                id: '4',
                name: 'Tanya',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'
            },
            {
                id: '5',
                name: 'Valera',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'
            },
            {
                id: '6',
                name: 'Serg',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'
            },
        ],
        dialogs: [
            {id: '1', name: 'Hello'},
            {id: '2', name: 'How are you'},
            {id: '3', name: 'I am good!'},],

        newDialog:'',
    }

    let action=changeNewDialogCreator('test')
    let newState=reducerDialogs(initialState,action)
    expect(newState.newDialog).toBe('test')
    expect(newState).not.toBe('')
    expect(newState.dialogs.length).toBe(3)
})