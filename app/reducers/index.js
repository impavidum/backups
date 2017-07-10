/* eslint-disable import/newline-after-import */

/* Combine all available reducers to a single root reducer.
*/

import { combineReducers } from 'redux';
import { firebaseStateReducer } from 'react-redux-firebase'
import user from '../reducers/user.js';

const reducers = {
  user,
  firebase: firebaseStateReducer
};
const combined = combineReducers(reducers);
module.exports = combined;
