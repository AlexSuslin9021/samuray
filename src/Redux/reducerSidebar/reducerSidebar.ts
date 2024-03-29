let initialState: PropsSidebar[]=[
    {id: '1', title: 'Profile', to: '/profile'},
    {id: '2', title: 'Messages', to: '/dialogs'},
    {id: '3', title: 'News', to: '/news'},
    {id: '4', title: 'Music', to: '/music'},
    {id: '5', title: 'Settings', to: '/settings'},
    {id:'6', title:'Users',to:'/users'},

]
const reducerSidebar = (state:PropsSidebar[]=initialState, action:any) => {return state};
export type PropsSidebar = { id: string, title: string, to: string }
export default reducerSidebar;