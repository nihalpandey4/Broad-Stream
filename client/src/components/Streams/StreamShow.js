import React from "react";
import { connect } from "react-redux";
import flv from "flv.js";

import { getStream } from "../../actions";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount = () => {
    const id = parseInt(this.props.match.params.id.slice(36));
    console.log(id);
    this.props.getStream(id);
    this.buildPlayer();
  };

  componentDidUpdate = () => {
    this.buildPlayer();
  };

  componentWillUnmount = () => {
    this.player.destroy();
  };

  buildPlayer = () => {
    if (this.player || !this.props.stream) {
      return;
    }
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${this.props.stream.id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading ...</div>;
    }

    const { title, description } = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <div className="ui piled segment">
          <h1>{title}</h1>
        </div>
        <div className="ui piled segment">
          <h4>{description}</h4>
        </div>
        <div className="ui padded segment">
          <div className="ui center aligned header" style={{ color: "red" }}>
            If the stream is stuck in loading, try refreshing the page. If the problem still persists, then the
            stream has probably ended or not started yet.
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id.slice(36));
  return { stream: state.streams[id] };
};

export default connect(mapStateToProps, { getStream })(StreamShow);
