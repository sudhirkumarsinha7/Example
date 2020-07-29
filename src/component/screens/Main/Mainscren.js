import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'

export class Mainscren extends Component{
    constructor(props){
    super(props);
    }
    login= () => {
        this.props.navigation.navigate('Login')
    }
    SignUp=()=>{
         this.props.navigation.navigate('Signup')
    }
    render(){
        return(
            <View style={{flex:10,justifycontent:'center',alignItems:'center'}}>
                        <View style={{flex:2,justifycontent:'center',alignItems:'center'}}>
            {/* <Text>Mainscren</Text> */}
            </View>
            <View style={{flex:2,justifycontent:'center',alignItems:'center'}}>
            <Button
            title='Login'
            onPress= {()=> this.login()}
            />
            </View>
            <View style={{flex:4,justifycontent:'center',alignItems:'center'}}>
             <Button
            title='New User'
            onPress= {()=>this.SignUp()}
            />
            </View>
            </View>
        )
    }
}

export default Mainscren