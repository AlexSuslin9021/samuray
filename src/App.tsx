import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import  {DialogsCont} from "./components/Dialogs/DialogsContainer";
import NavbarConteiner from "./components/Nawbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {ContainerForProfileContainer} from "./components/Profile/ProfileContainer";
import {DataHeader} from "./components/Header/ContainerHeader";




function App() {

    return (<BrowserRouter>
            <div className="app-wrapper">
                <DataHeader  />
                <NavbarConteiner />

                <div className={'app-wrapper-content'}>
                    <Route path={'/profile/:userId'} render={() => <ContainerForProfileContainer   />}/>
                    <Route path={'/dialogs'} render={() => <DialogsCont/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/users'} render={() =>  <UsersContainer />}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>

                </div>
            </div>
        </BrowserRouter>
    );

}


export default App;
