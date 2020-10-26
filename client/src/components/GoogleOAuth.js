import React from "react"

class GoogleOAuth extends React.Component{

    state = {isSignedIn : null}

    componentDidMount(){
        window.gapi.load("client:auth2",()=>{
            window.gapi.client.init({
                clientId: "150690585145-c0bk32r9msgekdeohliuc5ple0vq80f8.apps.googleusercontent.com",
                scope :"email"
            }).then(()=>{
                this.user=window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn:this.user.isSignedIn.get()});
                this.user.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = ()=>{
        this.setState({isSignedIn:this.user.isSignedIn.get()});
    }

    signButton = () =>{
        if(this.state.isSignedIn==null){
            return <a className="item">Checking...</a>
        }
        else if (this.state.isSignedIn==true){
            return <a className="item" onClick = {()=>{this.user.signOut()}}>Sign Out</a>
        }
        else{
            return <a className="item" onClick = {()=>{this.user.signIn()}}>Sign in using Google</a>
        }
    }

    render () {
        return (
            <>{this.signButton()}</>
        )
    }
}

export default GoogleOAuth;