import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Carousel from 'react-native-snap-carousel';
import Dimensions from 'Dimensions';
import {Button} from 'native-base'
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
import {Actions} from 'react-native-router-flux'

class Landing extends Component {

  constructor(props) {
    super(props);
    // this.state = {   images: [     {       path: require('../images/rest1.jpg')
    //   },     {       path: require('../images/rest2.jpg')     },     {
    // path: require('../images/rest3.jpg')     },     {       path:
    // require('../images/rest4.jpg')     },     {       path:
    // require('../images/rest5.jpg')     },   ] };
  }

  // Example with different children
  render() {
    const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <Carousel
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth}
          slideStyle={{
          width: viewportWidth
        }}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}>
          <Image source={require('../images/slide1.png')} style={styles.image}/>
          <Image source={require('../images/slide2.png')} style={styles.image}/>
          <Image source={require('../images/slide3.png')} style={styles.image}/>

        </Carousel>
        <View style={styles.getStarted}>
          
          <Button transparent rounded block>
            <BlurView
          style={styles.blur}
          blurType="light"
          blurAmount={60}
        />
          <Text style={styles.blurText}>Get Started!</Text>
        </Button>
        </View>
        
        <Text style={styles.signin}>Already part of the community?
          <Text
            style={styles.bold}
            onPress={() => Actions.login()}> Log in
          </Text>
        </Text>
        <Text style={styles.privacy}>
          <Text
            style={styles.bold}
            onPress={() => Linking.openURL('http://google.com')}>
            Privacy Policy
          </Text>
          <Text> and </Text>
          <Text
            style={styles.bold}
            onPress={() => Linking.openURL('http://google.com')}>
           Terms of Service
          </Text>
        </Text>
        <CarouselGuide style={styles.carouselGuide}/>

      </View>

    );
  }

}

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    alignSelf: 'stretch'
  },
  signin: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 12
  },
  privacy: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 12
  },
  bold: {
    fontWeight: 'bold'
  },
  getStarted: {
    position: 'absolute',
    bottom: 60,
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
    fontSize: 18
  },
  carouselGuide: {
    position: 'absolute',
    bottom: 70,
    alignSelf: 'center'
  }
});

Landing.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
