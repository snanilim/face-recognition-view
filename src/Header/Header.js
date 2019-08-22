/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import {
    Layout,
    Menu, Dropdown, Icon,
    Avatar,
    Row,
    Col,
    Input,
    Select,
    Popover, 
    Button,
    Form
} from 'antd';
import { logout } from '../Auth/authAction';


class HeadBar extends React.Component {

  constructor(props) {
    super(props);
  }

  handleLogout = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(logout(this.props));
  }

  render() {
    const { location } = this.props;

    return (
      <Menu mode="horizontal" className="py-1" style = {{'background': 'transparent'}}>
        <Row>
          <Col span={3}>
            <div className="text-center h4 text-primary py-2 mb-0">
              <img src="/img/mind-tree2.jpg" style={{ width: 50 }} /> 
            </div>
          </Col>
          <Col className="header-search" span={12} offset={3}>
            
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style = {{'background': 'transparent', 'borderBottom': "none"}}>
            
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
            
          </Col>
          
        </Row>
      </Menu>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user,
  };
};

export default withRouter(connect(mapStateToProps)(HeadBar));

// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
// import {
//   Row,
//   Col,
//   Menu,
//   Icon,
// } from 'antd';
// import { logout } from '../Auth/authAction';


// class Header extends React.Component {
//   static propTypes = {
//     dispatch: PropTypes.isRequired,
//   }

//   handleLogout(event) {
//     event.preventDefault();
//     const { dispatch } = this.props;
//     dispatch(logout(this.props));
//   }

//   render() {
//     return (
//       <div>
//         <Row>
//           <Col xs={24} sm={24} md={24} lg={6} xl={5} xxl={4}>
//             <img alt="" src="" />
//           </Col>
//           <Col xs={24} sm={24} md={24} lg={18} xl={19} xxl={20}>
//             <Menu
//               mode="horizontal"
//             >
//               <Menu.Item key="mail">
//                 <Icon type="mail" />
//                 Dashboard
//               </Menu.Item>
//             </Menu>
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }

      // <Header className="bg-transparent row">
      //   <div className="col-auto mx-auto py-3">
      //     <span className="h5 float-left" style={{ fontWeight: 300, margin: '2px 0' }}>Dhaka Ceramix</span>
      //     <div className="clearfix">&nbsp;</div>
      //   </div>
      //   <div className="col-auto float-right">
      //     <Avatar className="mr-2 lh-initial" style={{ backgroundColor: '#87d068' }} icon="user" size="small" />
      //     <Dropdown overlay={ProfileMenu} placement="bottomRight">
      //       <a className="ant-dropdown-link text-dark">
      //         <span className="small text-capitalize font-weight-light">
      //           Hi,
      //           { name }
      //         </span>
      //         <Icon className="ml-2" type="caret-down" theme="filled" />
      //       </a>
      //     </Dropdown>
      //   </div>
      // </Header>

// const mapStateToProps = (state) => {
//   return {
//     token: state.auth.token,
//     user: state.auth.user,
//   };
// };

// export default withRouter(connect(mapStateToProps)(Header));
