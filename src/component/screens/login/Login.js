import React,{Component} from 'react'
import {View,Text,TextInput,Button} from 'react-native'
import Homescreen from'../HomeScreen/Homescreen.js'

export class Login extends Component{
    constructor(props){
        super(props);
        this.state ={ 
            username : '',
            password : ''
        }
    }
    submit =() =>{
        var {username,password} = this.state
        if(username && password){
            // alert('login API')
            // <Homescreen/>
            this.props.navigation.navigate('Homescreen')

        }else{
            alert('Please enter valid username and password')
        }
    }
    render(){
        return(
            <View>
            <Text>UserName</Text>
             <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => this.setState({username: text})}
                value ={this.state.username}
                />
                 <Text>Password</Text>
             <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => this.setState({password: text})}
                value ={this.state.password}
                />

                <Button
                title= 'submit'
                onPress = {()=>this.submit()}
                />
            </View>
        )
    }
}

export default Login