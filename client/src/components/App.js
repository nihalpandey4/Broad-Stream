import React from "react";
import {Router, Route,Switch} from "react-router-dom";

import history from "../history";
import StreamCreate from "./Streams/StreamCreate";
import StreamList from "./Streams/StreamList";
import StreamEdit from "./Streams/StreamEdit";
import StreamDelete  from "./Streams/StreamDelete";
import StreamShow from "./Streams/StreamShow";
import Header from "./Header";

const App  = ()=>{
    return (
        <div className = "ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                    <Route path="/" exact component = {StreamList} />
                    <Route path="/streams/create" exact  component = {StreamCreate} /> 
                    <Route path="/streams/edit/:id" exact  component = {StreamEdit} /> 
                    <Route path="/streams/delete/:id" exact  component = {StreamDelete} />
                    <Route path="/streams/:id" exact  component = {StreamShow} />  
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App; 