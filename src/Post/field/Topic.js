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
    Icon,
    TreeSelect,
    Divider,
} from 'antd';

const TreeNode = TreeSelect.TreeNode;

class Topic extends React.Component{
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
                <Form.Item label="Topic">
                    {form.getFieldDecorator('name', {
                      rules: [{ required: true, message: 'Select topics' }],
                    })(
                      <TreeSelect
                        showSearch
                        style={{ width: 300 }}
                        value={this.state.value}
                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                        placeholder="Select topics"
                        allowClear
                        multiple
                        treeDefaultExpandAll
                        onChange={this.onChange}
                      >
                        <TreeNode value="parent 1" title="parent 1" key="0-1">
                          <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                            <TreeNode value="leaf1" title="my leaf" key="random" />
                            <TreeNode value="leaf2" title="your leaf" key="random1" />
                          </TreeNode>
                          <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                            <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
                          </TreeNode>
                        </TreeNode>
                      </TreeSelect>
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
  
  Topic.propTypes = {
    form: PropTypes.isRequired,
    dispatch: PropTypes.isRequired,
  };
  
  const FormTopic = Form.create()(Topic);
  export default withRouter(connect(mapStateToProps)(FormTopic));