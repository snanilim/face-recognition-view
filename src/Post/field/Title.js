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

class Title extends React.Component{
    render() {
        const { form } = this.props;
        return (
            <div>
                <Form.Item label="Title">
                    {form.getFieldDecorator('Title', {
                      rules: [{ required: true, message: 'please enter title' }],
                    })(<Input type="mail" placeholder="please enter title" />)}
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
  
  Title.propTypes = {
    form: PropTypes.isRequired,
    dispatch: PropTypes.isRequired,
  };
  
  const FormTitle = Form.create()(Title);
  export default withRouter(connect(mapStateToProps)(FormTitle));