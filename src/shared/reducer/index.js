import { combineReducers } from 'redux';
import messages from '../../Others/messagesReducer';
import auth from '../../Auth/authReducer';
import user from '../../User/userReducer';
import material from '../../Material/materialReducer';
import match from '../../Tag/matchReducer';
import upload from '../../Dashboard/uploadReducer';
// import generator from '../../Generator/generatorReducer';

export default combineReducers({
  messages,
  auth,
  user,
  material,
  match,
  upload
});
