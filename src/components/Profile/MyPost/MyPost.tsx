import React, {ChangeEvent} from "react";
import a from './MyPost.module.css'
import {Post} from './Post/Post'
import {actionType, propsPostMessege, propsProfilePage} from "../../../Redux/State";
import {addPOstAc, ChangeCreator} from "../../../Redux/reducerProfile";
// import {PropsArray} from "../../../App";

type PropsType={
    post:propsPostMessege[]
    messages: string
    dispatch: (action: actionType) => void
}


export function MyPost(props: PropsType){
    let onClickHandler = () => {
        debugger
        props.dispatch(addPOstAc(props.messages))

    }
    const onchangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        props.dispatch(ChangeCreator(e.currentTarget.value))


    }

    const post = props.post.map(m=><Post message={m.message}  value ={m.likes}/> )

    return (
        <div className={a.item}>
            <div>
                <textarea value={props.messages} onChange={onchangePost}/>
            </div>
            <div>
                <button onClick={onClickHandler}> Add</button>
            </div>

            {post}
        </div>
)

}
// export default MyPost