import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../authAction';
import { facebookLogin, googleLogin } from '../oauthAction';
import Messages from '../../Others/Messages';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', password: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSignup(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const { name, email, password } = this.state;
    dispatch(signup(name, email, password, this.props));
  }

  handleFacebook() {
    const { dispatch } = this.props;
    dispatch(facebookLogin(this.props));
  }

  handleGoogle() {
    const { dispatch } = this.props;
    dispatch(googleLogin(this.props));
  }

  render() {
    const { name, email, password } = this.state;
    const { message } = this.props;
    return (
      <div className="login-container container">
        <div className="card" style={{ padding: '30px' }}>
          <div className="card-body">

            <Messages messages={message} />

            <form onSubmit={this.handleSignup.bind(this)}>
              <p className="h2 text-center">Create an account</p>
              <div className="form-group">
                <input type="text" name="name" id="name" placeholder="Name" className="form-control form-control-lg" value={name} onChange={this.handleChange.bind(this)} />
              </div>
              <div className="form-group">
                <input type="email" name="email" id="email" placeholder="Email" className="form-control form-control-lg" value={email} onChange={this.handleChange.bind(this)} />
              </div>
              <div className="form-group">
                <input type="password" name="password" id="password" placeholder="Password" className="form-control form-control-lg" value={password} onChange={this.handleChange.bind(this)} />
              </div>

              <button type="submit" className="btn btn-success btn-block btn-lg">Create an account</button>
            </form>

            <br />

            <div className="hr-title text-center"><span>or</span></div>
            <div style={{ width: '376px', margin: '0 auto' }} className="btn-group btn-toolbar text-center">
              <button type="button" onClick={this.handleFacebook.bind(this)} className="btn btn-facebook">Sign in with Facebook</button>
              <button type="button" onClick={this.handleGoogle.bind(this)} className="btn btn-google">Sign in with Google</button>
            </div>
            <br />
            <div className="text-center">
              <small className="text-muted">
                By signing up, you agree to the
                <Link to="/">Terms of Service</Link>
              </small>
            </div>

          </div>
        </div>
        <p className="text-center mastfoot">
          <small>Already have an account?</small>
          <Link to="/login"><strong>Log in</strong></Link>
        </p>
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

export default withRouter(connect(mapStateToProps)(Signup));
