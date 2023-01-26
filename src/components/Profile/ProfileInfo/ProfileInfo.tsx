import React, {LegacyRef} from "react";
import a from "../Profile.module.css";
export function ProfileInfo (){
    let newPostElement=React.createRef<HTMLTextAreaElement>()
    let onClickHandler=()=>{
        let text=newPostElement.current?.value
        alert(text)
    }
    return (
        <div>

            <div className={a.item}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlCzLDRdu5WjTxrUB5Sd4bN022QuUH5ofeBf7w02xNYSHIAnkhttKQiqzBxlLpoJKuRTQ&usqp=CAU"
                    alt=""/>
            </div>
            <div className={a.item}>
                ava + descript
            </div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={onClickHandler}> Add</button>
            </div>
        </div>)
}