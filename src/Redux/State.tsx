

export type propsPostMessege={
    id:string
    message: string
    likes:number
}
export type propsUsersName={
    id:string
    name:string
    src:string
}

export type propsDialogsType={
    id:string
    name:string
}

export type propsProfilePage={
    post:propsPostMessege[]
}
export type propsDialogsPage={
   users:propsUsersName[]
    dialogs:propsDialogsType[]
}
export type PropsSidebar={
    id:string
    title:string
    to:string

}

export type PropsState={
    profilePage:propsProfilePage
    dialogsPage:propsDialogsPage
    sidebar:PropsSidebar[]
}

let state:PropsState={
    profilePage:{
        post:[
            {id: '1', message: 'How are you?', likes:15},
            {id: '1', message: 'It\'s my first post!', likes:20}]
    },
    dialogsPage:{
        users:[
            {id:'1', name:'Alex', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'},
            {id:'2', name:'Dima', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU' },
            {id:'3', name:'Misha', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'},
            {id:'4', name:'Tanya', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'},
            {id:'5', name:'Valera', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'},
            {id:'6', name:'Serg', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'},
        ],
        dialogs:[
            {id:'1', name:'Hello'},
            {id:'2', name:'How are you'},
            {id:'3', name:'I am good!'},]

    },

    sidebar:[
        {id:'1', title:'Profile',to:'/profile'},
        {id:'2', title:'Messages',to:'/dialogs'},
        {id:'3', title:'News',to:'/news'},
        {id:'4', title:'Music',to:'/music'},
        {id:'5', title:'Settings',to:'/settings'},
        // {id:'6', title:'Friends',to:'/friends'},

            ]


}
export default state