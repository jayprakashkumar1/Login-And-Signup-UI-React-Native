
// import EnterName from './App/Components/EnterName

import React from 'react';
import {AppRegistry,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from  'react-native';

import { requireNativeViewManager } from 'expo-core';

// components import
import  FbSignUp  from './FbSignUp';
import  GoogleSignUp  from './GoogleSignUp';
import SignupInputs from './SignupInputs';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.onPressLearnMore=this.onPressLearnMore.bind(this);
}
onPressLearnMore() {
}
  render() {
      return (
        <View>        
      <KeyboardAvoidingView behavior="position">

        <View style={{marginTop:50,marginLeft:'auto',marginRight:'auto'}}>
         <Text style={{fontSize:20,fontWeight:'bold'}}>
         Welcome To YOU !
         </Text>
         </View>
        
       <FbSignUp />
        <GoogleSignUp />
        
        <View style = {style.center}>
                <Text>
                or
                </Text>
            </View>

            <View style={style.center}>
                <Text>
                Signup With Email
                </Text>
            </View>
       
             <SignupInputs />

          {/* own buttons design */}
           <View style={{marginTop:20}}>
            <TouchableOpacity>
            <Text style = {style.textButton}>
               Signup
            </Text>
         </TouchableOpacity>
        </View>

        <View style={style.center}>
                <TouchableOpacity>
                <Text style={{textAlign:'center',padding:20,margin:10}}
                  onPress={this.props.onPressAlreadyReg}>
                Already registered ?
                </Text>
                </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    center: {
      marginLeft:'auto',
      marginRight:'auto',
    },  
    textButton: {
      width:140,
      padding:10,
      fontSize:20,
      marginLeft:10,
      fontWeight:'bold',
      borderRadius:30,
      color:'white',
      textAlign:'center',
      backgroundColor: 'green',
    },
})