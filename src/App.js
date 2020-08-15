import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";

import News from "./components/News/News";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar />
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
            </div>
        </div>

    );
}

export default App;
