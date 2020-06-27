import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'
export class MainScreen extends Component{
    render(){
        return(
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text>Main Screen</Text>
            <Button
            onPress = {()=> this.props.navigation.navigate('Test')}
            title = 'Test'
            />
            <Button
            onPress = {()=>this.props.navigation.navigate('Test1')}
            title = 'Test1'
            />
            <Button
            onPress = {()=>this.props.navigation.navigate('Test2')}
            title = 'Test2'
            />
            <Button
            onPress = {()=>this.props.navigation.navigate('Test3')}
            title = 'Test3'
            />
            <Button
            onPress = {()=>this.props.navigation.navigate('Test4')}
            title = 'Test4'
            />
            <Button
            onPress = {()=>this.props.navigation.navigate('Test5')}
            title = 'Test5'
            />
            <Button
            onPress = {()=>this.props.navigation.navigate('Map')}
            title = 'Map'
            />
            <Button
            onPress = {()=>this.props.navigation.navigate('List')}
            title = 'List'
            />
            <Button
            onPress = {()=>this.props.navigation.navigate('Home')}
            title = 'Home'
            />
            </View>
        )
    }
}

export default MainScreen