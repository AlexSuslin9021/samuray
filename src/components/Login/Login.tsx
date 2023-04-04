
import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType={
    login:string
    password:string
    rememberMeme:boolean
}
// function Login2(){
//     return<div>
//         Login
//     </div>
// }
// export default Login
export const LoginForm :FC<InjectedFormProps<FormDataType>> = (props)=>{
    debugger
    return(

        <form  onSubmit={props.handleSubmit} >
            <div><Field placeholder={'Login'} name={'login'} component={'input'} />   </div>
            <div> <Field placeholder={'password'} name={'password'} component={'input'} /></div>
            <div> <Field  name={'remember me'} type="checkbox" component={'input'} /></div>
            <div> <button>Login</button></div>
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