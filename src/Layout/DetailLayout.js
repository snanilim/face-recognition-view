import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Layout,
  Row,
  Col
} from 'antd';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

class DetailLayout extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
  };

  render() {
    const { children, users } = this.props;

    return (
      <div>
        {/* <Layout className="minvh-100">
          <Sidebar />
          <Layout className="minvh-100">
            
            <div className="">
              <div className="row">
                <div className="col-12 minvh-100 pl-0">
                  <Header {...users} />
                    {children}
                </div>
              </div>
            </div>
          </Layout>
        </Layout> */}
        <Layout>
          <Layout>
            <Header {...users} />
          </Layout>
          <Layout>
            <div className = "row">
              <div className="col-12 p-0 m-0 ">
                {children}
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

export default connect(mapStateToProps)(DetailLayout);
