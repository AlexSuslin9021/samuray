import React, {ChangeEvent} from "react";
import a from './MyPost.module.css'
import {Post} from './Post/Post'
import {actionType, propsPostMessege, propsProfilePage} from "../../../Redux/State";
import {addPOstAc, ChangeCreator} from "../../../Redux/reducerProfile";
// import {PropsArray} from "../../../App";

type PropsType = {
    profilePage: propsProfilePage
    // dispatch: (action: actionType) => void
    addPost: (messages: string) => void
    onChangeText: (e: any) => void

}


function MyPost(props: PropsType) {
    let onClickHandler = () => {
        props.addPost(props.profilePage.newTextPost)

    }
    const onchangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        props.onChangeText(e.currentTarget.value)


    }

    const post = props.profilePage.post.map(m => <Post message={m.message} value={m.likes}/>)

    return (
        <div className={a.item}>
            <div>
                <textarea value={props.profilePage.newTextPost} onChange={onchangePost}/>
            </div>
            <div>
                <button onClick={onClickHandler}> Add</button>
            </div>

            {post}
        </div>
    )

}

export default MyPost