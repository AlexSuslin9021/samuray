import { propsDialogsType, propsUsersName} from "./State";


let initialState={
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

type addNewDialogType={
    type: 'NEW-DIALOG',
    newText: string
}
type changeNewDialogType={
    type: 'NEW-MESSEGES',
    newText: string
}

export type propsDialogsPage = {
    users: propsUsersName[]
    dialogs: propsDialogsType[]
    newDialog: string
}


    const reducerDialogs = (state:propsDialogsPage=initialState, action:addNewDialogType | changeNewDialogType) => {
        switch(action.type) {
            case 'NEW-MESSEGES': {
                return {...state, newDialog :action.newText}
            }
            case 'NEW-DIALOG': {
                let newPost = {id: '7', name: action.newText}
                state.newDialog=''
                return {...state, dialogs:[...state.dialogs,newPost]}
            }
            default: return state

        }

    }



export const addNewDialog=(newDialog:string )=>{

    return {
        type: 'NEW-DIALOG',
        newText: newDialog
    }
}

export const changeNewDialogCreator=(newDialog:string)=>{
    return {
        type: 'NEW-MESSEGES',
        newText: newDialog
    }

}
export default reducerDialogs;