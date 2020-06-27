/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Main from './src/component/screens/Home.js'

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView>
//           <View>
//             <Text>Home</Text>
//             </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };
export class App extends Component{
 
  render(){
    return(
      <View>
        <Main/>
      </View>
    )
  }
}


export default App;
