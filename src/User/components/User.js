import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Table,
  Divider,
  Card,
  Column,
} from 'antd';
import AddUser from './AddUser';
import EditUser from './EditUser';
import {
  users,
  toogleDrwer,
  getOneUser,
  deleteUser,
} from '../userAction';

class User extends React.Component {
  static propTypes = {
    dispatch: PropTypes.isRequired,
    users: PropTypes.isRequired,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(users());
  }

  showDrawer = (e, id) => {
    const { dispatch } = this.props;
    dispatch(toogleDrwer(true));
    dispatch(getOneUser(id));
  };

  deleteUser = (e, id) => {
    const { dispatch } = this.props;
    dispatch(deleteUser(id));
  };

  render() {
    const { users } = this.props;
    return (
      <Card className="ctm-100-vh">
        <AddUser />
        <EditUser />
        <div>
          <Table dataSource={users}>
            <Column
              title="Name"
              dataIndex="name"
              key="name"
            />
            <Column
              title="Role"
              dataIndex="role"
              key="role"
            />
            <Column
              title="Address"
              dataIndex="address"
              key="address"
            />
            <Column
              title="Status"
              dataIndex="status"
              key="status"
            />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <span>
                  <a href="javascript:;" onClick={ (e) => this.showDrawer(e, record.id) }>Edit</a>
                  <Divider type="vertical" />
                  <a href="javascript:;" onClick={ (e) => this.deleteUser(e, record.id) }>Delete</a>
                </span>
              )}
            />
          </Table>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    users: state.user.data,
  };
};

export default withRouter(connect(mapStateToProps)(User));
