import { combineReducers } from 'redux';
import messages from '../../Others/messagesReducer';
import match from '../../Match/matchReducer';
import upload from '../../Upload/uploadReducer';
// import generator from '../../Generator/generatorReducer';

export default combineReducers({
  messages,
  match,
  upload
});
