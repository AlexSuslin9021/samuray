import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import Navbar from "./components/Nawbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {propsDialogsPage, propsProfilePage, PropsSidebar, PropsState, StoreType} from "./Redux/State";
import {EmptyObject, Store} from "redux";
// import store, {actionType, PropsState} from "./Redux/State";


type appStateProps = {
    state: Store<EmptyObject & { reducerSidebar: PropsSidebar[]; reducerProfile: propsProfilePage; reducerDialogs: propsDialogsPage; }, any>
    // addPost: (post?: string) => void
    // changeCallback: (newText:string) => void
    dispatch: (action: any) => void

}


function App(props: appStateProps) {
    debugger
    return (<BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar list={props.state.getState().reducerSidebar}/>

                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={() => <Profile

                        post={props.state.getState().reducerProfile.post}
                        messages={props.state.getState().reducerProfile.newTextPost}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.state.getState().reducerDialogs.dialogs}
                                                                    users={props.state.getState().reducerDialogs.users}
                                                                    newDialog={props.state.getState().reducerDialogs.newDialog}
                                                                        dispatch={props.dispatch}
                    />}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>


                </div>
            </div>
        </BrowserRouter>
    );

}


export default App;
