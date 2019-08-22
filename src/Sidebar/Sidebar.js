import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import {
  Layout,
  Menu,
  Icon,
  Button,
  Dropdown,
} from 'antd';
import AddLink from '../Post/components/AddLink';
import AddPost from '../Post/components/AddPost';
import AddImgToText from '../Post/components/AddImgToText';


const {
  Sider,
} = Layout;


class Sidebar extends React.Component {
  state = {
    size: 'large',
};

onCollapse = (collapsed) => {
    this.setState({ collapsed });
}

toggle = () => {
    const { collapsed } = this.state;
    this.setState({
        collapsed: !collapsed,
    });
}

  render() {
    const { location } = this.props;
    console.log(location);
    const size = this.state.size;
    return (
      <div className="bg-white minvh-100">

        <Menu className="h-100 border-0 " theme="light" selectedKeys={location.pathname} mode="inline">
          
          <Menu.Item key="dashboard">
            <Icon type="dashboard" />
            <span>Upload Image</span>
            <Link to="/dashboard" />
          </Menu.Item>
          
          <Menu.Item key="tag">
            <Icon type="deployment-unit" />
            <span>Match Image</span>
            <Link to="/tag" />
          </Menu.Item>
          
        </Menu>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user,
  };
};

export default withRouter(connect(mapStateToProps)(Sidebar));
