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
import store, {actionType, PropsState} from "./Redux/State";


type appStateProps = {
    state: PropsState
    // addPost: (post?: string) => void
    // changeCallback: (newText:string) => void
    dispatch: (action: actionType) => void

}


function App(props: appStateProps) {
    debugger
    return (<BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar list={props.state.sidebar}/>

                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={() => <Profile

                        post={props.state.profilePage.post}
                        messages={props.state.profilePage.newTextPost}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                    users={props.state.dialogsPage.users}
                                                                    newDialog={props.state.dialogsPage.newDialog}
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
