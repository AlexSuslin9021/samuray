const setUserData='SET_USER_DATA'

//initialState

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
// authReducer
type ActionType=setUserDataType
  export  const authReducer = (state:initialStateType=initialState, action:ActionType) :initialStateType => {

        switch(action.type) {
            case setUserData: {
                return {...state,data:{ ...action.data}, isAuth:true }
            }

            default: return state
        }
    }
    // Action creator

type setUserDataType={
    type:'SET_USER_DATA'
    data: DataType
}
export const setUserDataAC=(data:DataType):setUserDataType=>{
    return{
        type:setUserData,
        data
    }
}