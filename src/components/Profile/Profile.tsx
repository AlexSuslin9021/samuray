import React from "react";
import a from './Profile.module.css'
// import {MyPost} from './MyPost/MyPost'
import {MyPost} from './MyPost/MyPost'
export function Profile(){
    return <div className='contains'>
        <div className={a.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlCzLDRdu5WjTxrUB5Sd4bN022QuUH5ofeBf7w02xNYSHIAnkhttKQiqzBxlLpoJKuRTQ&usqp=CAU" alt=""/>
        </div>
        <div className={a.item}>
            ava + descript
        </div>
        <textarea ></textarea>
        <button> Add</button>

        <MyPost/>
    </div>

}
export default Profile