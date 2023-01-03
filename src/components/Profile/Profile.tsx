import React from "react";
import a from './Profile.module.css'

export function Profile(){
    return <div className='contains'>
        <div className={a.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlCzLDRdu5WjTxrUB5Sd4bN022QuUH5ofeBf7w02xNYSHIAnkhttKQiqzBxlLpoJKuRTQ&usqp=CAU" alt=""/>
        </div>
        <div className={a.item}>
            ava + descript
        </div>
        <div className={a.item}> My post
            <div className={a.item}>
                New post
            </div>
        </div>
        <div>
            <div className={a.item}>
                post 1
            </div>
            <div className={a.item}>
                post 2
            </div>
        </div>
    </div>

}
export default Profile