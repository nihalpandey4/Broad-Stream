import React from 'react'
import {connect } from "react-redux";
import {getAllStreams} from "../../actions";
import {Link} from "react-router-dom";  

class StreamList extends React.Component{
    
    componentDidMount() {
        this.props.getAllStreams();
    }

    renderOptionsWhensignedIn=(stream)=>{
        if(this.props.userId ===stream.userId ){
            return(
                <React.Fragment>
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </React.Fragment>
            )
        }
    }

    renderListItems=()=>{
        return this.props.streams.map((stream)=>{  
            return (
                <div className="item" key={stream.id}>
                    <div className="right floated content">
                        {this.renderOptionsWhensignedIn(stream)}
                    </div>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <div className="header">
                            <Link to={`/streams/${stream.id}`}>
                                {stream.title}
                            </Link>
                        </div>
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                </div>
            )
        })
    }

    renderCreateNewStream=()=>{
        if(this.props.isSignedIn===true){
            return (
                <div style={{textAlign:"center"}}>
                    <Link to="/streams/create" className="ui button primary">
                        Create Stream
                    </Link> 
                </div>
            )
        }
    }

    render(){
        return (
            <div>
                <h2>Streams :</h2>
                <div className="ui celled list">
                    {this.renderListItems()}
                </div>
                {this.renderCreateNewStream()}
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        streams:Object.values(state.streams),
        userId:state.auth.userId,
        isSignedIn:state.auth.isSignedIn
    };
}

export default connect(mapStateToProps,{
    getAllStreams
})(StreamList);