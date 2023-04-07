
import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import style from '../../common/PartUi.module.css'
import {Input, required} from "../coomon/FormControles/FormsControles";
// import s from '/Login.module.css'

type FormDataType={
    login:string
    password:string
    rememberMeme:boolean
}

export const LoginForm :FC<InjectedFormProps<FormDataType>> = (props)=>{

    return(

        <form  onSubmit={props.handleSubmit} >

            <div><Field placeholder={'Login'} name={'Login'} component={Input}
                        validate={[required]}
            />   </div>
            <div > <Field   placeholder={'password'} name={'password'} component={Input}
                            validate={[required]}
            /></div>
            <div> <Field   name={'remember me'} type="checkbox" component={Input}

            /> </div>
            <div> <button className={style.button}>Login</button></div>
        </form>
    )
}
export const Login=()=>{
    const onSubmit=(formData:FormDataType)=>{
        console.log(formData)
    }
    return<div>
    <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}


const LoginReduxForm=reduxForm<FormDataType>({form:'Login'})(LoginForm)