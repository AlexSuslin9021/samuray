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
import { PropsState} from "./Redux/State";

//
// export type PropsPost={
// id: string,
//     message:string,
//     likes:number
// }
//
//
// export type PropsMD={
//     id:string, name:string
// }
// export type PropsArray={
//    posts: Array<PropsPost>
//     dialogs: PropsMD[]
//     users:PropsMD[]
// }
// type PropsState={
//     state:object
// }

type appStateProps = {
    state: PropsState
    addPost: (post?: string) => void
    changeCallback: (newText:string) => void

}


function App(props: appStateProps) {

    return (<BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar list={props.state.sidebar}/>

                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={() => <Profile
                        changeCallback={props.changeCallback}
                        post={props.state.profilePage.post}
                        messages={props.state.profilePage.newTextPost}
                        addPost={props.addPost}
                        />}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                    users={props.state.dialogsPage.users}/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>


                </div>
            </div>
        </BrowserRouter>
    );

}


export default App;
