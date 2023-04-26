import { useForm, SubmitHandler } from "react-hook-form";
import {Redirect} from "react-router-dom";
import React from "react";
import {AppstateType} from "../../Redux/reduxState";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../Redux/authReducers/authReducer";

type Inputs = {
    email:string
    password:string
    rememberMe:boolean
};
type LoginType={
    login:(email: string, password: string, rememberMe: boolean)=>void
    isAuth:boolean
}

 function Login2(props:LoginType) {
    const { register, handleSubmit,reset, formState: { errors } } = useForm<Inputs>(); //метод, возвращает объект
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        props.login(data.email,data.password,data.rememberMe)
        reset();
    }
     if(props.isAuth) return <Redirect to={'./profile'}/>



    return (<>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* первый параметр имя, */}
            <div >
            <input placeholder={'Email'}  {...register("email", { required: 'Обязательно',
            minLength:{
                value:5,
                message:'минимум 5 символов',
            }})} />
                {errors?.email && <span>{errors?.email?.message ||'Email'}</span>}
            </div>
            {/* include validation with required or other standard HTML validation rules */}
            <div >
            <input placeholder={'Password'} {...register("password", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.password && <span>This field is required</span>}
        </div>
            <div> Remember me
                <input type="checkbox"  {...register("rememberMe")}/>
            </div>
            <input type="submit" />

        </form>
    </> );
}

type mapStateToPropsType={
    isAuth:boolean
}
const mapStateToProps=(state:AppstateType):mapStateToPropsType=>{
    return{
        isAuth:state.authReducer.isAuth
    }
}
export default connect(mapStateToProps, {login:loginThunkCreator})(Login2)