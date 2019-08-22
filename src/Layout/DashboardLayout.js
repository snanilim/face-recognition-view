import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Layout,
  Row,
  Col
} from 'antd';
import HeaderMenu from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const { Header, Content, Footer, Sider } = Layout;

class DashboardLayout extends React.Component {
  state = {
    collapsed: false,
  };

  static propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { children, users } = this.props;

    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Layout>
            <Header className="p-0">
              <HeaderMenu {...users} />
            </Header>
          </Layout>
          <Layout>
            <div className = "row">
              <div style={{'width': '100%'}}>
                <Content>
                  {children}
                </Content>
              </div>
            </div>
          </Layout>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.auth.users,
});

export default connect(mapStateToProps)(DashboardLayout);
