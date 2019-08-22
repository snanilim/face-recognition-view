import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
} from 'antd';
import { toogleDrwer, updateUser } from '../userAction';

const { Option } = Select;

class DrawerForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const { form, dispatch, user} = this.props;
    form.validateFields((err, values) => {
      console.log('values', values);
      if (!err) {
        dispatch(updateUser(
          user.id,
          values.name,
          values.email,
          values.address,
          values.role,
          values.status,
        ));
      }
    });
  }

  onClose = () => {
    const { dispatch } = this.props;
    dispatch(toogleDrwer(false));
  };

  render() {
    const { form, user } = this.props;
    const { visible } = this.props;
    return (
      <div>
        <Drawer
          title="Edit"
          width={720}
          placement="right"
          onClose={this.onClose}
          maskClosable={false}
          visible={visible}
          style={{
            height: 'calc(100% - 55px)',
            overflow: 'auto',
            paddingBottom: 53,
          }}
        >
          <Form layout="vertical" hideRequiredMark>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Name">
                  {form.getFieldDecorator('name', {
                    initialValue: user.name,
                    rules: [{ required: true, message: 'please enter user name' }],
                  })(<Input value="asd" placeholder="please enter user name" />)}
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Email">
                  {form.getFieldDecorator('email', {
                      initialValue: user.email,
                      rules: [{
                        type: 'email', message: 'The input is not valid E-mail!',
                      }, {
                        required: true, message: 'Please input user E-mail!',
                      }],
                    })(
                      <Input placeholder="please enter user email" />,
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Address">
                  {form.getFieldDecorator('address', {
                    initialValue: user.address,
                  })(<Input placeholder="please enter user name" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Role">
                  {form.getFieldDecorator('role', {
                    initialValue: user.role,
                    rules: [{ required: true, message: 'Please select an role' }],
                  })(
                    <Select placeholder="Please select an role">
                      <Option value="admin">Admin</Option>
                      <Option value="user">User</Option>
                    </Select>,
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Status">
                  {form.getFieldDecorator('status', {
                    initialValue: user.status,
                    rules: [{ required: true, message: 'Please choose the status' }],
                  })(
                    <Select placeholder="Please choose the status">
                      <Option value={1}>Active</Option>
                      <Option value={0}>Disable</Option>
                    </Select>,
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e8e8e8',
              padding: '10px 16px',
              textAlign: 'right',
              left: 0,
              background: '#fff',
              borderRadius: '0 0 4px 4px',
            }}
          >
            <Button
              style={{
                marginRight: 8,
              }}
              onClick={this.onClose}
            >
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} type="primary">Submit</Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    messages: state.messages,
    user: state.user.oneUser,
    visible: state.user.visible,
  };
};

DrawerForm.propTypes = {
  form: PropTypes.isRequired,
  dispatch: PropTypes.isRequired,
  visible: PropTypes.isRequired,
  user: PropTypes.isRequired,
};

const EditUser = Form.create()(DrawerForm);
export default withRouter(connect(mapStateToProps)(EditUser));
