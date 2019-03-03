
// import EnterName from './App/Components/EnterName
import React from 'react';
import {AppRegistry,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Linking,
  TouchableOpacity,
} from  'react-native';

import { requireNativeViewManager } from 'expo-core';

// components import
// import  FbLogin  from './components/myComponents/FbLogin';
// import  GoogleLogin  from './components/myComponents/GoogleLogin';
// import LoginInputs from './components/myComponents/LoginInputs';

import LoginPage from './components/myComponents/LoginPage';

import SignupPage from './components/myComponents/SignupPage';
import ForgotPassword from './components/myComponents/ForgotPassword';

// import KeyboardAvoidingViewDemo from './components/myComponents/KeyboardAvoidingViewDemo';
// import SignupInputs from './components/myComponents/SignupInputs';
// import FbSignUp from './components/myComponents/FbSignUp';
// import GoogleSignUp from './components/myComponents/GoogleSignUp';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isLoggedIn:false,
      isSingup:false,
      isforgotPass:false,

      showLoginPage:false,
      showSignupPage:false,
      showForgotPassPage:false,
    }
    this.changeToAlreadyregistered = this.changeToAlreadyregistered.bind(this);
    this.changeToCreateAccount = this.changeToCreateAccount.bind(this);
    this.changeToForgotPass = this.changeToForgotPass.bind(this);

    this.onPressLearnMore=this.onPressLearnMore.bind(this);
}
componentWillMount() {
  // on begining showing signup page
  this.setState({showSignupPage:true});

}
onPressLearnMore() {
}

changeToAlreadyregistered() {
  this.setState({
    showLoginPage:true,
    showSignupPage:false,
    showForgotPassPage:false,

  })
}
changeToCreateAccount() {
  this.setState({
    showSignupPage:true,
    showLoginPage:false,
    showForgotPassPage:false,
  })
}
changeToForgotPass() {
  this.setState({
    showForgotPassPage:true,
    showSignupPage:false,
    showLoginPage:false,
  })
}
  render() {
      return (
        <View>     
     {this.state.showSignupPage===true?<SignupPage onPressAlreadyReg = {this.changeToAlreadyregistered} />:<Text></Text>}

      {this.state.showLoginPage===true?<LoginPage onPressCreateAcc = {this.changeToCreateAccount} onPressForgotPass={this.changeToForgotPass}/>:<Text></Text>}

      {this.state.showForgotPassPage===true?<ForgotPassword />:<Text></Text>}

        </View> 
      );
    }
  }
  const style = StyleSheet.create( {
    // title:{
    //   color:'red',
    //   textAlign:'center',
    //   marginTop:50,
    //   fontSize:30,
    //   fontWeight:'bold'
    // },
    // center: {
    //   marginLeft:'auto',
    //   marginRight:'auto',
    // },  
    // textButton: {
    //   width:140,
    //   padding:10,
    //   fontSize:20,
    //   marginLeft:10,
    //   fontWeight:'bold',
    //   borderRadius:30,
    //   color:'white',
    //   textAlign:'center',
    //   backgroundColor: 'green',
    // },
})