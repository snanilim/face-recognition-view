import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { upload } from './uploadAction';
import Messages from '../Others/Messages';

import {
  Card,
  Icon,
  Row,
  Col,
  Popover,
  Button,
  Upload,
  message,
  Form,
  Input
} from 'antd';
const { Meta } = Card;

const FormItem = Form.Item;


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class UploadImageForm extends React.Component {

  static propTypes = {
    form: PropTypes.isRequired,
    dispatch: PropTypes.isRequired,
  }

  state = {
    loading: false,
  };

  handleChange = info => {
    console.log('info', info.file.name)
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        // console.log('imageUrl', imageUrl)
        this.setState({
          imageUrl,
          imageName: info.file.name,
          loading: false,
        }),
      );
    }
  };


  handleSubmit = (e) => {
    e.preventDefault();
    console.log('imageUrl', this.state.imageUrl)
    
    const { form, dispatch } = this.props;
    const { imageUrl, imageName } = this.state;
    form.validateFields((err, values) => {
      if (!err) {
        dispatch(upload(values.nid_number, imageUrl, imageName, this.props));
      }
    });
  }

  render () {
    const { form, messages } = this.props;
    console.log('messages', messages);

    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;

    return (
      <div style={{'width': '100%'}}>
        <Messages messages={messages} />
        <Row gutter={16} type="flex" justify="space-around" align="middle">
          <Col span={24}>
            <div className="main-face-back">
              <img src="/img/face-back2.jpg" style={{'width': '650px'}} /> 
              <div className="child-back">
                <Form onSubmit={this.handleSubmit} className="login-form">
                  <Row gutter={16}>
                  <Col span={12}>
                      <FormItem>
                        {form.getFieldDecorator('image', {
                          rules: [{ required: true, message: 'Please upload an image' }],
                        })(
                          <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                            // customRequest={this.customRequest}
                            filename="String"
                          >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                          </Upload>
                        )}
                      </FormItem>
                    </Col>

                    <Col span={12} style={{'marginTop': '40px'}}>
                      <FormItem>
                        {form.getFieldDecorator('nid_number', {
                          rules: [{ required: true, message: 'Please input your NID number!' }],
                        })(
                          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="NID Number" />,
                        )}
                      </FormItem>

                      <Button type="primary" htmlType="submit" className="login-form-button ant-btn-block ctm-h-50">
                        Submit
                      </Button>
                    </Col>

                  </Row>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    user: state.auth,
  };
};

const UploadImage = Form.create()(UploadImageForm);
export default withRouter(connect(mapStateToProps)(UploadImage));
