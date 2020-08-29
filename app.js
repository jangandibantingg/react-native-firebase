import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import * as firebase from 'firebase'
import { AppState } from 'react-native'

var firebaseConfig = {
  apiKey: "AIzaSyDQGOncWGKvYyt_JiHhEbS8a_bxhEUaRE8",
  authDomain: "poslogin-d5a84.firebaseapp.com",
  databaseURL: "https://poslogin-d5a84.firebaseio.com",
  projectId: "poslogin-d5a84",
  storageBucket: "poslogin-d5a84.appspot.com",
  messagingSenderId: "142362014353",
  appId: "1:142362014353:web:a1dbf33d9278cb38ca8530",
  measurementId: "G-ZH1L5FFPPB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home : HomeScreen
})

const AuthStack = createStackNavigator({
  Login : LoginScreen,
  Register : RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading : LoadingScreen,
      App : AppStack,
      Auth : AuthStack
    },
    {
      initialRouteName : "Loading"
    }
  )
);

