import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Alert from'./Alert.js'
import BatteryBank from'./BatteryBank.js'
import Onboard from'./Onboard.js'
import Setting from'./Setting.js'

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen
        name="Alert"
        component={Alert}
        options={{title: 'Alert',headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}
      />
      <Stack.Screen
        name="BatteryBank"
        component={BatteryBank}
        options={{title: 'BatteryBank',headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}
      />
      <Stack.Screen
        name="Onboard"
        component={Onboard}
        options={{title: 'Onboard',headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{title: 'Setting',headerStyle: {
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
export default function Homescreen() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
