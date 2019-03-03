import React from 'react';
import {AppRegistry,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from  'react-native';

import { requireNativeViewManager } from 'expo-core';

export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
}  
  render() {
      return (
        <View>
        
        <View>
        <Text style={[style.title,style.center]}>
        Forgot Your Password?
        </Text>
        </View>

        <View>
        <Text style={{padding:10,marginLeft:'auto',marginRight:'auto'}}>
        No worries! Enter Your Email & we will send you a reset work
        </Text>
        </View>
        
        <View>
            <TextInput style={style.inputs} placeholder = "Enter email"/>
        </View>

        <View >    
            <TouchableOpacity>
                <Text style = {style.textButton}>
                    SEND REQUEST
                </Text>
            </TouchableOpacity>
        </View>

        </View>
      );
    }
  }
  const style = StyleSheet.create( {
    title:{
        color:'red',
        textAlign:'center',
        marginTop:30,
        fontSize:30,
        fontWeight:'bold',
        // textDecorationLine: 'underline',
    },
      center: {
        marginLeft:'auto',
        marginRight:'auto',
      },  
    inputs: {
      marginTop:50,
      fontSize:20,
      marginLeft:10,
      marginRight:10,
      borderBottomColor:'red',
      borderBottomWidth:2, 
    },
    textButton: {
        // width:140,
        padding:10,
        fontSize:20,
        marginTop:20,
        marginLeft:'auto',
        marginRight:'auto',
        fontWeight:'bold',
        borderRadius:30,
        color:'white',
        textAlign:'center',
        backgroundColor: 'green',
      },
  }
  )