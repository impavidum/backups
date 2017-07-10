import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Grid, Col} from 'native-base'

class CarouselGuide extends Component {

  constructor(props) {
    super(props)

    // this.requestContacts = this
    //   .requestContacts
    //   .bind(this)
  }
  // requestContacts() {

  // }

  render() {
    return (
      <View style={styles.container}>
        <Grid>
          <Col style={{ backgroundColor: '#D954D7', height: 200 }}></Col>
          <Col style={{ backgroundColor: '#D93735', height: 200  }}></Col>
        </Grid>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 70,
    flex: 1,
    backgroundColor: 'transparent'
  }
});

export default CarouselGuide;
