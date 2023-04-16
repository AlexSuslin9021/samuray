import React, {ChangeEvent, FC} from "react";
import s from './MyPost.module.css'
import style from '../../../common/PartUi.module.css'

import {Post} from './Post/Post'
import {propsPostMessege} from "../../../Redux/reducerProfile/reducerProfile";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxValueLength, requiredField} from "../../../common/validation/validation";
import {maxLength, required, Textarea} from "../../coomon/FormControles/FormsControles";




type propsProfilePage = {
    post: propsPostMessege[]
    newTextPost: string
}
export type PropsType = {
    profilePage: propsProfilePage

    addPost: (messages: string) => void
    // onChangeText: (e: any) => void

}

type FormDataType={
    postMessage:string

}

function MyPost(props: PropsType) {
    // let onClickHandler = () => {
    //     props.addPost(props.profilePage.newTextPost)
    //
    // }
    // const onchangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //
    //     props.onChangeText(e.currentTarget.value)
    //
    //
    // }
    const onSubmit=(formData:FormDataType)=>{

        props.addPost(formData.postMessage)
    }
    const post = props.profilePage.post.map(m => <Post key={+m.id}  message={m.message} value={m.likes}/>)

    return<div className={s.item}>
            <h3>My Post</h3>
            {/*<div >*/}
            {/*    <textarea className={`${style.window} ${s.post}`} value={props.profilePage.newTextPost} onChange={onchangePost}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <button className={style.button} onClick={onClickHandler}> Send</button>*/}
            {/*</div>*/}
            <PostFormRedux onSubmit={onSubmit}/>

            {post}
        </div>


}
const maxValueLength10=maxLength(10)
const AddPostForm :FC<InjectedFormProps<FormDataType>> =(props)=>{


    return  <form onSubmit={props.handleSubmit} >
        <div >
        <Field placeholder={'Post'} name={'postMessage'} component={Textarea}
        validate={[required,maxValueLength10 ]}
        />
    </div>
    <div>
        <button className={style.button} > Send</button>
    </div>
    </form>
}
const PostFormRedux=reduxForm<FormDataType>({form:'postMessage'})(AddPostForm)

export default MyPost