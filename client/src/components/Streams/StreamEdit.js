import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import StreamForm from "./StreamForm";
import { getStream,updateStream } from "../../actions";

class EditStream extends React.Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  onSubmit=(formValues)=>{
      this.props.updateStream(this.props.match.params.id,formValues);
  }

  render() {
    if (!this.props.stream) {
        return <div> loading ....</div>;
    } 
    else {
        return (
            <div>
                <h2>Edit Stream</h2>
                {/* <StreamForm onSubmit = {this.onSubmit} initialValues = {{"title":this.props.stream.title,"description":this.props.stream.description}} /> */}
                <StreamForm onSubmit = {this.onSubmit} initialValues = {_.pick(this.props.stream,'title','description')} />
            </div>
        );
    }
  }
}
 
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream,updateStream })(EditStream);