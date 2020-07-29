import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Login from'../login/Login.js'
import Fogetpassword from'../login/Fogetpassword.js'
import Signup from'../login/Signup.js'
import Mainscren from'./Mainscren.js'
import Homescreen from'../HomeScreen/Homescreen.js'

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen
        name="Mainscren"
        component={Mainscren}
        options={{title: 'Mainscren',headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Login Screen',headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}
      />
      <Stack.Screen
        name="Fogetpassword"
        component={Fogetpassword}
        options={{title: 'Fogetpassword',headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{title: 'Register',headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}
      />
      <Stack.Screen
        name="Homescreen"
        component={Homescreen}
        options={{title: 'Homescreen',headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}
      />
    </Stack.Navigator>
  );
}

export default function Main() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
