import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";

import { deleteStream, getStream } from "../../actions";

class StreamDelete extends React.Component {
  renderContent = () => {
    if (this.props.stream === undefined) {
      return "Loading ...";
    }
    return `Are you sure you want to delete stream with title:  "${this.props.stream.title}"  ?`;
  };

  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  onActionClicked = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  render = () => {
    return (
      <div>
        <Modal
          header="Delete Stream"
          content={this.renderContent()}
          cancelUrl="/"
          actionText="Delete"
          onActionClicked={this.onActionClicked}
        />
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { deleteStream, getStream })(
  StreamDelete
);