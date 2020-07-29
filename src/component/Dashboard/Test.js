import React,{Component} from 'react'
import {View,Text} from 'react-native'
import VectorIcon from 'react-native-vector-icons/Ionicons'

export class Test extends Component{
    render(){
        return(
            <View>
                          <VectorIcon name='menu' size={40} color={'green'} />

            </View>
        )
    }
}

export default Test