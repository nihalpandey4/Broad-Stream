import React from 'react'
import Modal from "../Modal";
import {connect} from "react-redux";

import {deleteStream} from "../../actions";

class StreamDelete extends React.Component {

    constructor(props){
        super(props);
        this.modal = {
            header:"Delete this stream?",
            content:"Are you sure you want to delete this stream?",
            cancelUrl:"/",
            actionText:"Delete",
            onActionClicked:this.onActionClicked
        }
    }

    onActionClicked=()=>{
        this.props.deleteStream(this.props.match.params.id);
    }

    render=()=>{
        return (
            <div>
                <Modal {...this.modal} />
            </div>
        )
    }
}

export default connect(null,{deleteStream})(StreamDelete);