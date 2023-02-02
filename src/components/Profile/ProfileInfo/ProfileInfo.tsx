import React, {ChangeEvent} from "react";
import a from "../Profile.module.css";


type PropsType = {
    addPost: (post?: string) => void

    messages: string
    changeCallback: (newText:string) => void
}

export function ProfileInfo(props: PropsType) {

    let onClickHandler = () => {
        props.addPost(props.messages)
    }
    const onchangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.changeCallback(e.currentTarget.value)

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
                <textarea value={props.messages} onChange={onchangePost}/>
            </div>
            <div>
                <button onClick={onClickHandler}> Add</button>
            </div>
        </div>)
}