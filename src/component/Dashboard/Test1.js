import React,{Component} from 'react'
import {View,Text} from 'react-native'
import VectorIcon from 'react-native-vector-icons/Ionicons'
export class Test1 extends Component{
    render(){
        return(
            <View>
              <VectorIcon name='menu' size={58} color={'blue'} />
            </View>
        )
    }
}

export default Test1