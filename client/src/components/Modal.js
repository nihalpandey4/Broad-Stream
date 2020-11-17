import React from 'react';
import ReactDOM from "react-dom";
import {Link } from "react-router-dom";

import history from "../history";

const Modal = props=>{
    return ReactDOM.createPortal(
        <div className = "ui dimmer modals visible active" onClick = {()=>history.push(props.cancelUrl)}>
            <div className="ui standard modal visible active" onClick={(e)=>e.stopPropagation()}>
                <div className="header">
                    {props.header}
                </div>
                <div className = "content">
                    {props.content}
                </div>
                <div className = "actions">
                    <button className="ui button red" onClick={props.onActionClicked}>{props.actionText}</button>
                    <Link to={props.cancelUrl} className="ui button">Cancel</Link>
                </div>
            </div>
        </div>,
        document.querySelector("#modal")
    );
}

export default Modal;