// import EnterName from './App/Components/EnterName

import React from 'react';
import {AppRegistry,
  View,
  StyleSheet,
  TextInput,
} from  'react-native';
import { requireNativeViewManager } from 'expo-core';

export default class LoginInputs extends React.Component {
  constructor(props) {
    super(props);
}  
  render() {
      return (
        <View>
        
        <View>
            <TextInput style={style.inputs} placeholder = "Enter email"/>
        </View>

        <View>
            <TextInput secureTextEntry={true}
              style={style.inputs} placeholder = "Enter Password"
              />
        </View>

        </View>
      );
    }
  }
  const style = StyleSheet.create( {
    inputs: {
      marginTop:50,
      color:'red',
      fontSize:20,
      marginLeft:10,
      marginRight:10,
      borderBottomColor:'red',
      borderBottomWidth:2, 
    },
  }
  )