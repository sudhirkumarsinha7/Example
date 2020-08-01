import React,{Component} from 'react'
// import {View,Text} from 'react-native'
// export class Dashboard extends Component{
//     render(){
//         return(
//             <View>
//             <Text>Dashboard</Text>
//             </View>
//         )
//     }
// }

// export default Dashboard

import { createDrawerNavigator } from '@react-navigation/drawer';
import Register from './register';
import login from './login';


const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name = 'Login' component = {login}/>
      <Drawer.Screen name="Register" component={Register} />
    </Drawer.Navigator>
  );
}