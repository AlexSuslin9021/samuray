import React from "react";
import a from './MyPost.module.css'
import {Post} from './Post/Post'
// import {PropsArray} from "../../../App";

 type PropsPost={
id: string,
    message:string,
    likes:number
}

type PropsType={
    message:PropsPost[]
}
export function MyPost(props: PropsType){
    // const posts= [
    //     {id: '1', message: 'How are you?', likes:15},
    //     {id: '1', message: 'It\'s my first post!', likes:20},
    // ]
    const post = props.message.map(m=><Post message={m.message}  value ={m.likes}/> )

    return (
        <div className={a.item}>
            {post}
        </div>
)

}
// export default MyPost