
import * as React from 'react';
import {Button, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './MainScreen';
import Home from './Home';
import List from './list';
import Map from './map';
import Test from './Test';
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';
import Test4 from './Test4';
import Test5 from './Test5';
import VectorIcon from 'react-native-vector-icons/Ionicons'

// const Stack = createStackNavigator();
// function MyStack() {
//   return (
//     <Stack.Navigator>
//     <Stack.Screen
//         name="MainScreen"
//         component={MainScreen}
//         options={{headerShown: false}}
//         // options={{title: 'Main Screen',headerStyle: {
//         //     backgroundColor: '#f4511e',
//         //   },
//         //   headerTintColor: '#fff',
//         //   headerTitleStyle: {
//         //     fontWeight: 'bold',
//         //   },}}
//       />
//       <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{title: 'Home',headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },}}
//       />
//       <Stack.Screen
//         name="List"
//         component={List}
//         options={{title: 'List',headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },}}
//       />
//       <Stack.Screen
//         name="Map"
//         component={Map}
//         options={{title: 'Map',headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },}}
//       />
//        <Stack.Screen
//         name="Test"
//         component={Test}
//         options={{title: 'Test',headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },}}
//       />
//       <Stack.Screen
//         name="Test1"
//         component={Test1}
//         options={{title: 'Test1',headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },}}
//       />
//       <Stack.Screen
//         name="Test2"
//         component={Test2}
//         options={{title: 'Test2',headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },}}
//       />
//        <Stack.Screen
//         name="Test3"
//         component={Test3}
//         options={{title: 'Test3',headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },}}
//       />
//       <Stack.Screen
//         name="Test4"
//         component={Test4}
//         options={{title: 'Test4',headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },}}
//       />
//       <Stack.Screen
//         name="Test5"
//         component={Test5}
//         options={{title: 'Test5',headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },}}
//       />
//     </Stack.Navigator>
//   );
// }

export default function Main() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Map') {
              iconName = focused ? 'md-map-sharp' : 'md-map-sharp';
            }else if (route.name === 'Test1') {
              iconName = focused ? 'md-cart-sharp' : 'md-cart-sharp';
            }else if (route.name === 'Setting') {
              iconName = focused ? 'settings' : 'settings';
            }
            // alert(iconName + size +color )

            // You can return any component that you like here!
            return <VectorIcon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#547DD3',
          inactiveTintColor: 'white',
          inactiveBackgroundColor : 'blue'
        }}
        >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Test1" component={Test1} />
      <Tab.Screen name="Setting" component={Test2} />
    </Tab.Navigator>
  );
}

    // return <VectorIcon name="home" style={{ ...styles.IconStyle, }}/>
