import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    Form,
    Col,
    Row,
    Input,
} from 'antd';

class Link extends React.Component{
    render() {
        const { form } = this.props;
        return (
            <div>
                <Form.Item label="Link">
                {form.getFieldDecorator('link', {
                    rules: [{ required: true, message: 'please enter title' }],
                })(<Input placeholder="please enter a Link" />)}
                </Form.Item>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      messages: state.messages,
      user: state.auth,
    };
  };
  
  Link.propTypes = {
    form: PropTypes.isRequired,
    dispatch: PropTypes.isRequired,
  };
  
  const FormLink = Form.create()(Link);
  export default withRouter(connect(mapStateToProps)(FormLink));