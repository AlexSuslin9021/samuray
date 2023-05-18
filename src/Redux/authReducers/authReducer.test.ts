import {authReducer, initialStateType, setUserDataAC} from "./authReducer";

test('it should be add new login',()=>{

    let initialState :initialStateType= {

        data:{id:'28028',login:"Alex2190",email:"alexsuslin@inbox.ru"},
        messages:[],
        fieldsErrors:[],
        resultCode:0,
        isAuth:false,
        captcha:null
    }

    const action=setUserDataAC({id:'2',login:"Alex",email:"mail.ru", captcha:null} )
    const newState=authReducer(initialState,action )
    expect(newState.isAuth).toBe(true)
    expect(newState.data.id).toBe(`2`)
    expect(newState.data.login).toBe("Alex")
})