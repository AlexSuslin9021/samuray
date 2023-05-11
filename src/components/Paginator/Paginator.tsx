import React, {useState} from 'react';
import preloader from "../../assets/image/6.gif";
import s from "./paginator.module.css";


const Paginator = (props:PaginatorType) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let page = []
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }
    const portionSize=10;
    const portionCount=Math.ceil(props.totalUsersCount /portionSize) //сколько порций всего
    let[portionNumber, setPortionNumber]=useState(1);
    let leftPortionPageNumber=(portionNumber-1)*portionSize+1;
    let rightPortionPageNumber=portionNumber*portionSize
    return (
        <div>
            {props.isFetching && <div><img src={preloader} alt=""/></div>}
            {portionNumber > 1 && <button className={s.button} onClick={()=>setPortionNumber(portionNumber-1)}>{'<'}</button>}
            {page
                .filter(p=>p >= leftPortionPageNumber && p<= rightPortionPageNumber)
                .map((p, index) => <span key={index} className={props.currentPage === p ? s.activePage : s.page}
                                         onClick={() => props.onClickPage(p)}>{p}</span>)}
            {portionCount > portionNumber && <button className={s.button} onClick={()=>setPortionNumber(portionNumber+1)}>{'>'}</button>}
        </div>
    );
};

export default Paginator;


type PaginatorType={

    totalUsersCount: number
    pageSize: number
    currentPage: number
    onClickPage: (pageNumber: number) => void
    isFetching: boolean


}