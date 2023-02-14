
import { propsPostMessege, propsProfilePage} from "./State";

const reducerProfile = (state:propsProfilePage, action:any) => {

    if(action.type ==='ADD-POST')
    { let newPOst: propsPostMessege = {id: new Date().getTime(), message:action.post, likes: 15};
       state.post.push(newPOst)
        }
    else if(action.type==='CHANGE-CALLBASK'){
       state.newTextPost= action.post

    }
    return state
}



export default reducerProfile;