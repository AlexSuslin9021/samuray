import reducerProfile, {addPOstAc, ChangeCreator} from "./reducerProfile";
import reducerDialogs, {addNewDialog} from "./reducerDialogs";
import reducerSidebar from "./reducerSidebar";

export type StoreType={
    _state:PropsState
    getState:()=>PropsState
    // addPost: (post?: string)=>void
     // changeCallback : (newText:string) => void,
    subscriber:(observer:()=>void)=>void
     _rerender:()=>void
    dispatch:(action: actionType)=>void
}

export  type actionType=ReturnType<typeof addPOstAc> |ReturnType<typeof ChangeCreator> | ReturnType<typeof addNewDialog >

export let store :StoreType ={_state:{
        profilePage: {
            post: [
                {id: '1', message: 'How are you?', likes: 15},
                {id: '1', message: 'It\'s my first post!', likes: 20}],
            newTextPost: ''
        },
        dialogsPage: {
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
        },
        sidebar: [
            {id: '1', title: 'Profile', to: '/profile'},
            {id: '2', title: 'Messages', to: '/dialogs'},
            {id: '3', title: 'News', to: '/news'},
            {id: '4', title: 'Music', to: '/music'},
            {id: '5', title: 'Settings', to: '/settings'},
            // {id:'6', title:'Friends',to:'/friends'},

        ]
    },
    getState(){return this._state},

     _rerender(){
        console.log('state')
    },
   subscriber(observer){
       this._rerender=observer
    },

    dispatch(action: any){
    debugger
        reducerProfile(this._state.profilePage, action)
        reducerDialogs(this._state.dialogsPage, action)
        reducerSidebar(this._state.sidebar, action)
        this._rerender()
    }
}

export type propsPostMessege = {
    id: string | number
    message?: string
    likes: number
}
export type propsUsersName = {
    id: string
    name: string
    src: string
}

export type propsDialogsType = {
    id: string
    name: string
}

export type propsProfilePage = {
    post: propsPostMessege[]
    newTextPost: string
}
export type propsDialogsPage = {
    users: propsUsersName[]
    dialogs: propsDialogsType[]
    newDialog:string
}
export type PropsSidebar = {
    id: string
    title: string
    to: string
}

export type PropsState = {
    profilePage: propsProfilePage
    dialogsPage: propsDialogsPage

    sidebar: PropsSidebar[]
}
export default store