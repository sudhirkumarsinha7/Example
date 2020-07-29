import React,{Component} from 'react'
import {View,Text} from 'react-native'
import VectorIcon from 'react-native-vector-icons/FontAwesome5'
import {
  Icon,
} from 'native-base'
export class Home extends Component{
    render(){
        let iconName = 'truck'
        let size = 20
        let color = 'red'
        return(
            <View>
            <Text>Home</Text>
            <VectorIcon name={iconName} size={size} color={color} />
                          <Icon name="menu" />

            </View>
        )
    }
}

export default Home