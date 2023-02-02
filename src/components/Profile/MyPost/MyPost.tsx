import React from "react";
import a from './MyPost.module.css'
import {Post} from './Post/Post'
import {propsPostMessege, propsProfilePage} from "../../../Redux/State";
// import {PropsArray} from "../../../App";

type PropsType={
    post:propsPostMessege[]
}


export function MyPost(props: PropsType){

    const post = props.post.map(m=><Post message={m.message}  value ={m.likes}/> )

    return (
        <div className={a.item}>

            {post}
        </div>
)

}
// export default MyPost