import React from "react";
import a from './MyPost.module.css'
import {Post} from './Post/Post'

export function MyPost(){
    return (
        <div className={a.item}> My post

           <Post message = 'How are you? ' value ={15}/>
            <Post message = "It's my first post!" value={20} />

</div>
)

}
// export default MyPost