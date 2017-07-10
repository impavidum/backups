import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Grid, Col, Button, Icon, Item, Input, StyleProvider, Label} from 'native-base'
import { BlurView, VibrancyView } from 'react-native-blur';


class BlurredInput extends Component {

  
  render() {
    const {placeholder,icon} = this.props
    return (
      <View>
        <Text style={styles.label}>{placeholder}</Text>
        <Item regular style={{borderColor: 'transparent', paddingLeft: 10, paddingRight: 10, marginBottom: 6}}>
            <BlurView
            style={styles.blur}
            blurType="light"
            blurAmount={60}
            />
            
            <Input placeholder={placeholder} placeholderTextColor="white" style={{
      fontSize: 15, 
      color: 'white',
  }}/>
            <Icon active name={icon} style={{fontSize: 40, color: 'white'}}/>
        </Item>
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
  },
  blur: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
    borderRadius: 22
  },
  label: {
    backgroundColor: 'transparent',
    color: 'white',
    marginLeft: 22,
    marginBottom: 1,
    fontSize: 12
  }
})

export default BlurredInput;
