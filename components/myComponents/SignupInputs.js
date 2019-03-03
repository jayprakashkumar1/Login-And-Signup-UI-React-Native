// import EnterName from './App/Components/EnterName

import React from 'react';
import {AppRegistry,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from  'react-native';

import { requireNativeViewManager } from 'expo-core';

export default class SignupInputs extends React.Component {
  constructor(props) {
    super(props);
}  
  render() {
      return (
         <View> 
          {/* <KeyboardAvoidingView behavior="position"> */}

        <View>
            <TextInput style={style.inputs} placeholder = "Enter Full Name "/>
        </View>

        <View>
            <TextInput style={style.inputs} placeholder = "Enter email"/>
        </View>

        <View>
            <TextInput secureTextEntry={true}
              style={style.inputs} placeholder = "Set your Password" />
        </View>
        {/* </KeyboardAvoidingView> */}
        
        </View>
      );
    }
  }
  const style = StyleSheet.create( {
    inputs: {
      marginTop:50,
      fontSize:20,
      marginLeft:10,
      marginRight:10,
      borderBottomColor:'red',
      borderBottomWidth:2, 
    },
  }
  );
  