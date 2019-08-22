import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Divider,
  Card,
} from 'antd';
import { login } from '../authAction';
import Messages from '../../Others/Messages';

const FormItem = Form.Item;

class LoginForm extends React.Component {
  static propTypes = {
    form: PropTypes.isRequired,
    dispatch: PropTypes.isRequired,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        dispatch(login(values.email, values.password, this.props));
      }
    });
  }

  render() {
    const { form, messages } = this.props;
    console.log('messages', messages);
    return (
      <div>
        <Card className="ctm-100-vh border-0">
          <h2 className="text-center"> Admin Panels </h2>
          <h4> Login </h4>
          <Messages messages={messages} />
          {/* <a href='/api/download/'> Test Download </a> */}

          <Form onSubmit={this.handleSubmit} className="login-form">

            <FormItem label="E-mail">
              {form.getFieldDecorator('email', {
                rules: [
                  { type: 'email', message: 'The input is not valid E-mail!' },
                  { required: true, message: 'Please input your E-mail!' },
                ],
              })(
                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />,
              )}
            </FormItem>

            <FormItem label="Password">
              {form.getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />,
              )}
            </FormItem>

            <Button type="primary" htmlType="submit" className="login-form-button ant-btn-block ctm-h-50">
              Log in
            </Button>

          </Form>

        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    user: state.auth,
  };
};

const Login = Form.create()(LoginForm);
export default withRouter(connect(mapStateToProps)(Login));
