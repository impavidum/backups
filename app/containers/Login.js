import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Carousel from 'react-native-snap-carousel';
import Dimensions from 'Dimensions';
import {Button, Icon, Item, Input, StyleProvider} from 'native-base'
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';
import { BlurView, VibrancyView } from 'react-native-blur';
import CarouselGuide from '../components/CarouselGuide'
import {} from '../actions/';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  ScrollView,
  Linking
} from 'react-native';

import BlurredInput from '../components/BlurredInput'

class Login extends Component {

  constructor(props) {
    super(props);
  }

  // Example with different children
  render() {
    const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
    return (
      <StyleProvider style={getTheme(commonColor)}>
      <View style={styles.container}>
        <Image source={require('../images/login.png')} style={styles.image}/>
        
        <View style={styles.form}>

          <BlurredInput style={[styles.hide, false && styles.show]} placeholder="Email Address" icon="checkmark"></BlurredInput>
          <BlurredInput style={[styles.hide, true && styles.show]} placeholder="Password" icon="checkmark"></BlurredInput>
          
          <View>
            <Text style={styles.signin}>Forgot Your Password?
          <Text
            style={styles.bold}
            onPress={() => Linking.openURL('http://google.com')}> Click Here.
          </Text>
           </Text>
          </View>
          
        </View>
        
        <View style={styles.getStarted}>
          
          <Button transparent rounded block iconRight>
            <BlurView
          style={styles.blur}
          blurType="light"
          blurAmount={60}
        />
          <Text style={styles.blurText}>Log in With Facebook</Text>
           <Icon name='logo-facebook' style={{fontSize: 25, color: 'white'}}/>
        </Button>
        </View>
        
        <Text style={styles.signin}>Don't have an account?
          <Text
            style={styles.bold}
            onPress={() => Linking.openURL('http://google.com')}> Sign up
          </Text>
        </Text>
        
        <CarouselGuide style={styles.carouselGuide}/>

      </View>
      </StyleProvider>
    );
  }

}

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hide: {opacity: 0},
  show: {opacity: 1},
  image: {
    flex: 1,
    width: null,
    height: null,
    alignSelf: 'stretch'
  },
  signin: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 12
  },
  form: {
    position: 'absolute',
    top: 200,
    width: viewportWidth * .9,
    alignSelf: 'center'
  },
  bold: {
    fontWeight: 'bold'
  },
  getStarted: {
    position: 'absolute',
    bottom: 40,
    width: viewportWidth * .9,
    alignSelf: 'center'
  },
  blur: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
    borderRadius: 22
  },
  blurText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14
  },
  carouselGuide: {
    position: 'absolute',
    bottom: 70,
    alignSelf: 'center'
  },
  input: {
      fontSize: 10, 
      color: 'white',
      marginBottom: 100,
  }

});

Login.propTypes = {
  actions: PropTypes.shape({})
}

function mapStateToProps(state) {
  const props = {
    user: state.user
  }
  return props
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = {
    actions: bindActionCreators(actions, dispatch)
  };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
