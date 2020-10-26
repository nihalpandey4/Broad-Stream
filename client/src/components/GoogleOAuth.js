import React from "react"
import {connect} from "react-redux";

import {signIn,signOut} from "../actions";


class GoogleOAuth extends React.Component{
    componentDidMount(){
        window.gapi.load("client:auth2",()=>{
            window.gapi.client.init({
                clientId: "150690585145-c0bk32r9msgekdeohliuc5ple0vq80f8.apps.googleusercontent.com",
                scope :"email"
            }).then(()=>{
                this.user=window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.user.isSignedIn.get());
                this.user.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.user.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }
    }

    signButton = () =>{
        if(this.props.isSignedIn===null){
            return <div className="item">Checking...</div>
        }
        else if (this.props.isSignedIn===true){
            return (
                <button className = "ui red google button" onClick = {()=>{this.user.signOut()}}>
                    <i className = "google icon"/>
                        Sign Out
                </button>
            )
        }
        else{
            return (
                <button className = "ui red google button" onClick = {()=>{this.user.signIn()}}>
                <i className = "google icon"/>
                    Sign in with Google
                </button>
            )
        }
    }

    render () {
        return (
            <>{this.signButton()}</>
        )
    }
}

const mapStateToProps = (state) =>{
    return { isSignedIn:state.auth.isSignedIn};
}

export default connect(
    mapStateToProps,
    {signIn,signOut}
)(GoogleOAuth);