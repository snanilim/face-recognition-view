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

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class Tag extends React.Component{
  handleChange = value => {
    console.log(`selected ${value}`);
  }
  render() {
      const { form } = this.props;
      return (
          <div>
            <Form.Item label="Tag">
              {form.getFieldDecorator('tag', {
                rules: [{ required: true, message: 'Please select an tag' }],
              })(
                <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={this.handleChange}>
                  {children}
                </Select>
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