import React from 'react';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import  {DialogsCont} from "./components/Dialogs/DialogsContainer";
import NavbarConteiner from "./components/Nawbar/NavbarContainer";
import {ContainerForProfileContainer} from "./components/Profile/ProfileContainer";
import {DataHeader} from "./components/Header/ContainerHeader";
import UsersContainer from "./components/Users/UsersContainer";
import {connect} from "react-redux";
import {AppstateType} from "./Redux/reduxState";
import preloader from './assets/image/6.gif'
import {initializedAppTC} from "./Redux/appReducers/appReducer";
import Login2 from "./components/Login/Login2";
import {ErrorSnackBar} from "./components/GlobalError/GlobalErrorContainer";



type AppType={
    initializedAppTC:()=>void
    initialized:boolean
    isAuth:boolean
    error:string | null

}
class App extends React.Component<AppType>{

    componentDidMount() {
        this.props.initializedAppTC()

    }

    render() {

if(!this.props.initialized) return <div><img src={preloader} alt=""/></div>
debugger
        return (<BrowserRouter>
                <div className="app-wrapper">
                    <DataHeader/>
                    {/*{this.props.error && <ErrorSnackBar/>}*/}
                    <div className={'app-wrapper-content'}>
                        <NavbarConteiner/>
                        <Route path={'/profile/:userId?'} render={() => <ContainerForProfileContainer/>}/>
                        <Route path={'/dialogs'} render={() => <DialogsCont/>}/>
                        <Route path={'/news'} component={News}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/music'} component={Music}/>
                        <Route path={'/settings'} component={Settings}/>
                        <Route path={'/login'} component={Login2}/>

                    </div>
                </div>
            </BrowserRouter>
        );

    }
}

 const mapStateToProps=(state:AppstateType)=>{
    return{
    initialized:state.appReducer.initialized,
        isAuth:state.authReducer.isAuth,
        error:state.appReducer.error
     }
}
export const App1= connect(mapStateToProps,{ initializedAppTC})(App);
export default   App1


