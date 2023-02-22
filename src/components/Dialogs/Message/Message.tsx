import s from '../Dialogs.module.css'

type DialogProps={
    message:string
}
export const Message:React.FC<DialogProps>=(props)=>{
    return<div className={s.dialog}> {props.message}</div>
}