
import React, {FC} from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {propsDialogsPage} from "../../Redux/reduserDialogs/reducerDialogs";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Button} from "../Button/Button";

function Dialogs(props:propsDoalogs){
        const onSubmit=(formData:FormDataType)=>{
            props.add(formData.message)
            props.add(props.dialogs.newDialog)
    }
    const user= props.dialogs.users.map(u=><DialogsItem  key={u.id} id={u.id}  name ={u.name}/>)
    const  dialog=props.dialogs.dialogs.map(d=><Message key={d.id} message={d.name}/>)

    return<div className={s.dialogsContent}>
        <div className={s.users}>
            {user}
        </div>
        <div className={s.dialogs}>
            {dialog}
            <MessageReduxForm onSubmit={onSubmit} />
    </div>
</div>

}
const AddMessageForm:FC<InjectedFormProps<FormDataType>> =(props)=>{
    return <form onSubmit={props.handleSubmit} >
        <div><Field placeholder={'Message'} name={'message'} component={'textarea'} />   </div>
        <Button name={'ass'}/>
    </form>
}

const MessageReduxForm=reduxForm<FormDataType>({form:'Message'})(AddMessageForm)
//types
type propsDoalogs={
    dialogs:propsDialogsPage
    add:(newDialog:string)=>void
    // onChangeText:(e:string)=>void
    // isAuth:boolean
}

type FormDataType={
    message:string
}


export default Dialogs