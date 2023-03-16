

const setUserData='SET_USER_DATA'
export type initialStateType={
 data:DataType
    messages:[],
    fieldsErrors:[],
    resultCode:number
    isAuth:boolean
}
export type DataType={
    id: number,
    email:string,
    login:string
}

let initialState :initialStateType= {

data:{id:28028,login:"Alex2190",email:"alexsuslin@inbox.ru"},
    messages:[],
    fieldsErrors:[],
    resultCode:0,
    isAuth:false
}

  export  const authReducer = (state:initialStateType=initialState, action:setUserDataType) :initialStateType => {
       debugger
        switch(action.type) {
            case setUserData: {
                return {...state, ...action.data, isAuth:true }
            }

            default: return state
        }
    }

type setUserDataType={
    type:'SET_USER_DATA'
    data: initialStateType
}
export const setUserDataAC=(data:DataType)=>{
    return{
        type:setUserData,
        data
    }
}