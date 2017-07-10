import {createStore, applyMiddleware, compose} from 'redux'
import reducers from '../reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import {reactReduxFirebase} from 'react-redux-firebase'

// Saga Imports
import createSagaMiddleware from 'redux-saga'
import userSagas from '../sagas/userSagas.js'

import RNFirebase from 'react-native-firebase'

// Saga Middleware
const sagaMiddleware = createSagaMiddleware()

// Firebase config
// const firebaseConfig = {
//   apiKey: 'AIzaSyDSkbhmg2Jg5FQ7t-rYrta-WTmec4DN2kU',
//   authDomain: 'int-dindr-chatfirebaseapp.com',
//   databaseURL: 'https://int-dindr-chat.firebaseio.com',
//   storageBucket: 'int-dindr-chat.appspot.com'
// }

const configurationOptions = {

  debug: true
};

const firebase = RNFirebase.initializeApp(configurationOptions);

// react-redux-firebase options
const reduxConfig = {
  enableLogging: false, // enable/disable Firebase's database logging
}

function reduxStore(initialState) {

  const store = createStore(reducers, undefined, compose(reactReduxFirebase(RNFirebase, reduxConfig), // pass in react-native-firebase instance instead of config
      applyMiddleware(sagaMiddleware)))

  // Start Up User Sagas
  sagaMiddleware.run(userSagas)

  store.subscribe(() => {
    // console.log('store changed', store.getState())
  })

  return store
}

export default reduxStore
