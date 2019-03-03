import React from 'react';
import {AppRegistry,
  View,
  Text,
  StyleSheet,
  Linking
} from 'react-native';

import { requireNativeViewManager } from 'expo-core';

export default class FbLogin extends React.Component {
  
  onPressLearnMore() {

  }
  render() {
      return (
        <View>
         <View style = {style.container}>
         <Text style={style.fbText}
         onPress={() => Linking.openURL('https://www.facebook.com')}>
         Login with Facebook. 
         </Text>
         </View>
        </View>    
      );
    }
  }
  const style = StyleSheet.create( {
    title:{
      color:'red',
      textAlign:'center',
      
      marginTop:50,
      fontSize:30,
      fontWeight:'bold'
    },
    fbText: {
      color:'white',
      fontWeight:'bold',
      textAlign:'center',
    },
    container: {
                      width:200,
                      margin:10,
                      padding:10,
                      marginLeft:'auto',
                      marginRight:'auto',
                      // borderColor:'blue',
              
                      borderRadius:50,
                      backgroundColor:'#3C5A99'
    },
}
  )