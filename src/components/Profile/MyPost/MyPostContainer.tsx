import React, {ChangeEvent} from "react";
import a from './MyPost.module.css'
import {Post} from './Post/Post'
import {actionType, propsPostMessege, propsProfilePage} from "../../../Redux/State";
import {addPOstAc, ChangeCreator} from "../../../Redux/reducerProfile";
import {MyPost} from "./MyPost";
// import {PropsArray} from "../../../App";

type PropsType={
    post:propsPostMessege[]
    messages: string
    dispatch: (action: actionType) => void
}


export function MyPostContainer(props: PropsType){
    let addPost = () => {

        props.dispatch(addPOstAc(props.messages))

    }
    const onChangeText = (e: any) => {
        debugger
        props.dispatch(ChangeCreator(e))


    }

    // const post = props.post.map(m=><Post message={m.message}  value ={m.likes}/> )

    return (
   <MyPost post={props.post} messages={props.messages} onChangeText={onChangeText} addPost={addPost}/>
)

}
// export default MyPost