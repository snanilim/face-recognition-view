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
  InputNumber,
} from 'antd';
import { updateMaterial, toogleDrwer } from '../materialAction';

class DrawerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form, dispatch, material } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        dispatch(updateMaterial(
          material.id,
          values.name,
          values.weight,
          values.value,
        ));
      }
    });
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    const { dispatch } = this.props;
    dispatch(toogleDrwer(false));
  };

  render() {
    const { form, material } = this.props;
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
                    initialValue: material.name,
                    rules: [{ required: true, message: 'please enter user name' }],
                  })(<Input placeholder="please enter user name" />)}
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Weight">
                  {form.getFieldDecorator('weight', {
                    initialValue: material.weight,
                    rules: [{ required: true, message: 'please enter weight' }],
                  })(<InputNumber type="number" placeholder="please enter weight" />)}
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Value">
                  {form.getFieldDecorator('value', {
                    initialValue: material.value,
                    rules: [{ required: true, message: 'please enter value' }],
                  })(<InputNumber type="number" placeholder="please enter value" />)}
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
  return {
    messages: state.messages,
    material: state.material.oneMaterial,
    visible: state.material.visible,
  };
};

DrawerForm.propTypes = {
  form: PropTypes.isRequired,
  dispatch: PropTypes.isRequired,
};

const EditMaterial = Form.create()(DrawerForm);
export default withRouter(connect(mapStateToProps)(EditMaterial));
