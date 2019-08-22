import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    Form,
    Select,
    Col,
    Row,
    Input,
} from 'antd';

const { Option } = Select;


class Tag extends React.Component{

  render() {
      const { form } = this.props;
      return (
          <div>
            <Form.Item label="Status">
              {form.getFieldDecorator('status', {
                rules: [{ required: true, message: 'Please choose the status' }],
              })(
                <Select placeholder="Please choose the status">
                  <Option value={1}>Active</Option>
                  <Option value={0}>Disable</Option>
                </Select>,
              )}
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
  
  Tag.propTypes = {
    form: PropTypes.isRequired,
    dispatch: PropTypes.isRequired,
  };
  
  const FormTag = Form.create()(Tag);
  export default withRouter(connect(mapStateToProps)(FormTag));