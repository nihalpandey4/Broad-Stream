import React from 'react'
import {connect } from "react-redux";
import {getAllStreams} from "../../actions";
 
class StreamList extends React.Component{
    
    componentDidMount() {
        this.props.getAllStreams();
    }

    renderListItems=()=>{
        return this.props.streams.map((stream)=>{
            return (
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <div className="header">
                            {stream.title}
                        </div>
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                </div>
            )
        })
    }

    render(){
        console.log(this.props.streams);
        return (
            <div>
                <h2>Steams :</h2>
                <div className="ui celled list">
                    {this.renderListItems()}
                </div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return {streams:Object.values(state.streams)};
}

export default connect(mapStateToProps,{
    getAllStreams
})(StreamList);
