import React from "react";
import a from "../Profile.module.css";
export function ProfileInfo (){
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
                <textarea></textarea>
            </div>
            <div>
                <button> Add</button>
            </div>
        </div>)
}