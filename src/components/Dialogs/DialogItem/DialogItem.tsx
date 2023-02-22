import {NavLink} from "react-router-dom";
import s from '../Dialogs.module.css'

type DialogsItemProps ={
    name:string
    id:string
}
export const DialogsItem: React.FC<DialogsItemProps>=(props)=>{
    return <div className={s.user}>
        <NavLink to={`/dialogs/ +${props.id}`}> <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'} alt={'#'} /> {props.name}</NavLink>
    </div>
}

