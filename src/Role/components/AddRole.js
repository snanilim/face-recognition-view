import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
} from 'antd';

const { Option } = Select;

class DrawerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { form } = this.props;
    const { visible } = this.state;
    return (
      <div>
        <Row>
          <Col span={8}>
            <h4 className="float-left">Role List</h4>
          </Col>
          <Col span={8} offset={8}>
            <Button className="float-right" type="primary" onClick={this.showDrawer}>
              + Add New Role
            </Button>
          </Col>
        </Row>

        <Drawer
          title="Create"
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
                    rules: [{ required: true, message: 'please enter user name' }],
                  })(<Input placeholder="please enter user name" />)}
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Email">
                  {form.getFieldDecorator('email', {
                    rules: [{ required: true, message: 'please enter user email' }],
                  })(<Input type="mail" placeholder="please enter user email" />)}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Address">
                  {form.getFieldDecorator('address', {
                  })(<Input placeholder="please enter user name" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Role">
                  {form.getFieldDecorator('owner', {
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
                <Form.Item label="Password">
                  {form.getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please select an password' }],
                  })(<Input type="password" placeholder="please enter user password" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Status">
                  {form.getFieldDecorator('status', {
                    rules: [{ required: true, message: 'Please choose the status' }],
                  })(
                    <Select placeholder="Please choose the status">
                      <Option value="active">Active</Option>
                      <Option value="disable">Disable</Option>
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
            <Button onClick={this.onClose} type="primary">Submit</Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

DrawerForm.propTypes = {
  form: PropTypes.isRequired,
};

const AddRole = Form.create()(DrawerForm);
export default AddRole;
