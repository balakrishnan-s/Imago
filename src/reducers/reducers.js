import { combineReducers } from 'redux';
import events from './events';
import currentUser from './currentUser';

export default combineReducers({
  events,
  currentUser,
});
