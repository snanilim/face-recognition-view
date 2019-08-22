import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    Form,
    Select,
    Upload,
    Icon,
    message,
} from 'antd';

const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


class UploadFile extends React.Component{

  render() {
      const { form } = this.props;
      return (
          <div>

            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                band files
              </p>
            </Dragger>

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
  
  UploadFile.propTypes = {
    form: PropTypes.isRequired,
    dispatch: PropTypes.isRequired,
  };
  
  const FormUpload = Form.create()(UploadFile);
  export default withRouter(connect(mapStateToProps)(FormUpload));