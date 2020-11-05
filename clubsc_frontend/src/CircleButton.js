import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

export default class CircleButton extends React.Component {
  render(){
    let localStyles = styles(this.props) //need to load styles with props because the styles rely on prop values

    return (
      <View style={localStyles.container}>
        <TouchableOpacity
          activeOpacity={.8} //The opacity of the button when it is pressed
          style = {localStyles.button}
          onPress = {this.props.onPress}
        >
          {this.props.children}
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = (props) => StyleSheet.create({
  button: {
	backgroundColor: '#ffff'
  },
});