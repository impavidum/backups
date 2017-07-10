import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Landing from './containers/Landing'
import Login from './containers/Login'

class App extends Component {

  render() {
  
    return (
      <Router>
        <Scene key="root">
          <Scene key="landing" component={Landing} hideNavBar={true}/>
          <Scene key="login" component={Login} hideNavBar={true}/>
          {/*<Scene key="register" component={Register} title="Register"/>*/}
          {/*<Scene key="home" component={Home}/>*/}
        </Scene>
      </Router>
    )
  }
}

export default App
