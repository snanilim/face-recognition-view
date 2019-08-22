import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Cascader,
  Form,
} from 'antd';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hanzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

class Folder extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          value: undefined,
        };
    }

    onChange = value => {
        console.log(value);
        this.setState({ value });
    };

    render() {
        const { form } = this.props;
        return (
            <div>
                <Form.Item label="Folder">
                    {form.getFieldDecorator('name', {
                      rules: [{ required: true, message: 'Select Folders' }],
                    })(
                      <Cascader options={options} onChange={this.onChange} changeOnSelect />
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
  
  Folder.propTypes = {
    form: PropTypes.isRequired,
    dispatch: PropTypes.isRequired,
  };
  
  const FormFolder = Form.create()(Folder);
  export default withRouter(connect(mapStateToProps)(FormFolder));