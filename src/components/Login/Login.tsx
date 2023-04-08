
import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import style from '../../common/PartUi.module.css'
import {Input, required} from "../coomon/FormControles/FormsControles";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../Redux/authReducers/authReducer";
import {AppstateType} from "../../Redux/reduxState";
import {Redirect} from "react-router-dom";
// import s from '/Login.module.css'

type FormDataType={
    email:string
    password:string
    rememberMeme:boolean
}

export const LoginForm :FC<InjectedFormProps<FormDataType>> = (props)=>{

    return(

        <form  onSubmit={props.handleSubmit} >

            <div><Field placeholder={'Login'} name={'email'} component={Input}
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
type LoginType={
    login:(email: string, password: string, rememberMe: boolean)=>void
    isAuth:boolean
}
 const Login=(props:LoginType)=>{
    const onSubmit=(formData:FormDataType)=>{
        props.login(formData.email,formData.password,formData.rememberMeme)
    }
    if(props.isAuth) return <Redirect to={'./profile'}/>

    return(

     <div>
    <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
    )
}


const LoginReduxForm=reduxForm<FormDataType>({form:'Login'})(LoginForm)
type mapStateToPropsType={
    isAuth:boolean
}
const mapStateToProps=(state:AppstateType):mapStateToPropsType=>{
    return{
        isAuth:state.authReducer.isAuth
    }
}
export default connect(mapStateToProps, {login:loginThunkCreator})(Login)