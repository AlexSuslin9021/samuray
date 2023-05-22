import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import {useAppDispatch} from "../../Redux/reduxState";

// import { appActions } from "app/app.slice";
type GlobalErrorType={
    error:string | null
    setError:(error:string | null)=>any

}
export const GlobalError = (props:GlobalErrorType) => {
    // const error = useAppSelector((state) => state.app.error);
    const dispatch = useAppDispatch();

    if (props.error !== null) {
        toast.error(props.error);
    }
    useEffect(() => {
        debugger
        setTimeout(() => {
            dispatch(props.setError( null ));
        }, 2000);
    }, [props.error]);
    debugger
    return (
        <ToastContainer
            position="bottom-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    );
};

