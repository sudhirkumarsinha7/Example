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
import Test from './Test';
import Test1 from './Test1';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Test" component={Test} />
      <Drawer.Screen name="Test1" component={Test1} />
    </Drawer.Navigator>
  );
}