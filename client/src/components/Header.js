import React from "react";
import {Link} from "react-router-dom"
import GoogleOAuth from "./GoogleOAuth";

const Header = ()=>{

    return (
        <div className = "ui pointing menu">
            <Link to= "/" className= "item">Streamy</Link>
            <div className = "right menu">
                <Link to="/" className= "item">Show Streams </Link>
                <div><GoogleOAuth /></div>
            </div>
        </div>
    )
}

export default Header;