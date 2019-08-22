import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createUser } from '../userAction';
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  Icon,
  TreeSelect,
  Divider,
} from 'antd';

import {
  Link,
  Title,
  Topic,
  Category,
  CkEditor,
  Tag,
  Status
} from '../field';

class DrawerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      visible: false,
      size: 'large',
      value: undefined,
      disabled: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        dispatch(createUser(
          values.name,
          values.email,
          values.address,
          values.password,
          values.role,
          values.status,
          this.props,
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
    this.setState({
      visible: false,
    });
  };



  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    const { form } = this.props;
    const { visible, size, disabled } = this.state;
    return (
      <div style = {{padding: "15px 100px", background: "#fff"}} className="minvh-100">
        
        <div>
          <Button onClick={this.toggle} style = {{float: "right"}}>
            <Icon type={disabled ? "menu-unfold" : "menu-fold"} />
          </Button>
          <Divider />
          <div className={disabled ? "right-side animated" : "right-side-first animated"}>
            <Row>
              <Col span={24}><Title /></Col>
              <Col span={24}><Topic /></Col>
              <Col span={24}><Category /></Col>
              <Col span={24}><CkEditor /></Col>
              <Col span={24}><Tag /></Col>
              <Col span={24}><Status /></Col>
            </Row>
          </div>
        </div>
        

        <Row gutter={16} type="flex" justify="space-around" align="middle">
          <Col span={16}>
            <div>
              <Link />
            </div>
          </Col>
        </Row>

          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              padding: '10px 16px',
              textAlign: 'center',
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

DrawerForm.propTypes = {
  form: PropTypes.isRequired,
  dispatch: PropTypes.isRequired,
};

const AddPost = Form.create()(DrawerForm);
export default withRouter(connect(mapStateToProps)(AddPost));
