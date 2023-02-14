import {propsDialogsPage} from "./State";
const reducerDialogs = (state:propsDialogsPage, action:any) => {
    if(action.type==='NEW-MESSEGES')
    {
        state.newDialog=action.newText
    } else if(action.type==='NEW-DIALOG')
    {
        let newPost={id:'7', name: state.newDialog}
        state.dialogs.push(newPost)
        state.newDialog=''
    }
};

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