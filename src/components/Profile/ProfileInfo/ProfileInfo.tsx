import React, {ChangeEvent} from "react";
import a from "../Profile.module.css";
import {actionType, addPOstAc, ChangeCreator} from "../../../Redux/State";


type PropsType = {


    messages: string
    dispatch: (action: actionType) => void
}

export function ProfileInfo(props: PropsType) {

    let onClickHandler = () => {
        props.dispatch(addPOstAc(props.messages))

    }
    const onchangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.dispatch(ChangeCreator(e.currentTarget.value))


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