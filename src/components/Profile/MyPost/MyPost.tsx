import React, {ChangeEvent} from "react";
import s from './MyPost.module.css'
import style from '../../../common/PartUi.module.css'

import {Post} from './Post/Post'
import {propsPostMessege} from "../../../Redux/reducerProfile/reducerProfile";



type propsProfilePage = {
    post: propsPostMessege[]
    newTextPost: string
}
export type PropsType = {
    profilePage: propsProfilePage

    addPost: (messages: string) => void
    onChangeText: (e: any) => void

}


function MyPost(props: PropsType) {
    let onClickHandler = () => {
        props.addPost(props.profilePage.newTextPost)

    }
    const onchangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {

        props.onChangeText(e.currentTarget.value)


    }

    const post = props.profilePage.post.map(m => <Post message={m.message} value={m.likes}/>)

    return (
        <div className={s.item}>
            <h3>My Post</h3>
            <div >
                <textarea className={`${style.window} ${s.post}`} value={props.profilePage.newTextPost} onChange={onchangePost}/>
            </div>
            <div>
                <button className={style.button} onClick={onClickHandler}> Send</button>
            </div>

            {post}
        </div>
    )

}

export default MyPost