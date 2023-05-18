import { useForm, SubmitHandler } from "react-hook-form";
import {Redirect} from "react-router-dom";
import React from "react";
import {AppstateType} from "../../Redux/reduxState";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../Redux/authReducers/authReducer";
import s from './Login.module.css'

type Inputs = {
    email:string
    password:string
    rememberMe:boolean
    captcha?:null |string
};
type LoginType={
    login:(email: string, password: string, rememberMe: boolean, captcha?:string |null)=>void
    isAuth:boolean
    captcha:null |string
}

 function Login2(props:LoginType) {
    const { register, handleSubmit,reset, formState: { errors } } = useForm<Inputs>(); //метод, возвращает объект
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        props.login(data.email,data.password,data.rememberMe, data.captcha)
        reset();
    }
     if(props.isAuth) return <Redirect to={'./profile'}/>



    return (<div className={s.loginBlock}>
        <div className={s.loginForm}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* первый параметр имя, */}
            <div className={s.inputText}>
            <input placeholder={'Email'}  {...register("email", { required: 'Обязательно',
            minLength:{
                value:5,
                message:'минимум 5 символов',
            }})} />
                {errors?.email && <span>{errors?.email?.message ||'Email'}</span>}
            </div>
            <div className={s.inputText} >
            <input placeholder={'Password'} {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}
        </div>
            <div className={s.inputCheckbox}>
                <input id="first" type="checkbox"  {...register("rememberMe")}/>
                <label htmlFor="first"> Remember me</label>
            </div>
            <div className={s.inputText}>
                {props.captcha && <img style={{width:'200px',height:'100px', margin: '20px'}} src={props.captcha} alt=""/>}
                {props.captcha && <input   {...register("captcha")}/>}
            </div>
            <div className={s.buttonContainer}>
            <input className={s.button} type="submit" />
            </div>

        </form>

        </div>
    </div> );
}

type mapStateToPropsType={
    isAuth:boolean
    captcha: null |string
}
const mapStateToProps=(state:AppstateType):mapStateToPropsType=>{
    return{
        isAuth:state.authReducer.isAuth,
        captcha:state.authReducer.captcha
    }
}
export default connect(mapStateToProps, {login:loginThunkCreator})(Login2)