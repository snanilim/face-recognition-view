import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Alert } from 'antd';

class Messages extends React.Component {

  onClose = (e) => {
    this.props.dispatch({type: "CLEAR_MESSAGES"})
  };

  render() {
    return this.props.messages.success ? (

      <div role="alert" className="animated bounceInDown message alert alert-success">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span onClick={this.onClose} aria-hidden="true">&times;</span>
        </button>
        <ul>
          {this.props.messages.success.map((message, index) => <div key={index}>{message}</div>)}
        </ul>
      </div>

    ) : this.props.messages.error ? (
      <div>
        <Alert
          message="Error"
          description={this.props.messages.error.map((message, index) => <li key={index}>{message}</li>)}
          type="error"
          closable
          onClose={this.onClose}
        />
      </div>
      
    ) : this.props.messages.info ? (

      <div role="alert" className="animated bounceInDown message alert alert-info">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>{this.props.dispatch({type: "CLEAR_MESSAGES"})}}>
            <span aria-hidden="true">&times;</span>
          </button>
          <ul>
            {this.props.messages.info.map((message, index) => <div key={index}>{message.msg}</div>)}
          </ul>
      </div>
        
    ) : null;
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};

export default withRouter(connect(mapStateToProps)(Messages));
