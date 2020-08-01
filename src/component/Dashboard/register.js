// @flow
import React,{Component} from 'react'
import {View,Keyboard} from 'react-native'
import {Input,Text,Button,Form,Item,Container,
  Content,Label} from 'native-base'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  loginRequest,
} from '../../actions/Authenticate'
import {user} from '../../common/defaultData'
import {InputElement} from'../common/userHelper'
export class Register extends Component{
      constructor (props) {
    super(props)
    this.updateState = this.updateState.bind(this)
    this.state = {
      email: '',
      password: ''
    }
  }
  
    componetDidmount(){
    }
    submit=()=>{
          Keyboard.dismiss()

       var {email,password} = this.state
        this.props.loginRequest(email,password)
    }
   updateState (updateElements) {
    this.setState(updateElements)
  }
    render(){
      var data = user.registerationForm
        return (
      <Container>
        <Content padder>
      
          {Object.keys(data).map((stateName) => {
          var eachRow = data[stateName]
          switch (eachRow.type) {
            case 'String' :
              return <View >
                <View><InputElement
                  eachRow={eachRow}
                  state={this.state}
                  updateState={this.updateState}
                />
                </View>
              </View>
          //   case 'dropdown' :
          //     var dataList = ['No data available']
          //     if (eachRow.stateName === 'model') {
          //       if (this.state.isTruck) {
          //         dataList = defaultStateValues.modelList1
          //       } else {
          //         dataList = defaultStateValues.modelList
          //       }
          //     } else if (eachRow.stateName === 'sensor_number') {
          //       dataList = defaultStateValues.sensorNoList
          //     }
          //     return (this.state.model === 'GPSTracker' && eachRow.stateName === 'sensor_number') ? null : <View style={styles.h1}><View style={{ flex: 1, marginRight: 8, marginBottom: 8 }}><DropdownElement
          //       eachRow={eachRow}
          //       dataList={dataList}
          //       state={this.state}
          //       updateState={this.updateState}
          //     />
          //     </View>
          //     </View>
          //   case 'buttons' :
          //     return <View style={styles.h1}><View style={{ flex: 1, marginRight: 8 }}><CustomButton
          //       eachRow={eachRow}
          //       onBackPress={this.onBackPress}
          //       onCreateClicked={this.onCreateClicked}
          //     />
          //     </View>
          //     </View>
            default :
              return <View/>
          }
        })}
        </Content>
      </Container>
    )
    }
    
}
function mapStateToProps (state: ReduxStore) : StateToProps {
  return {
    state:state
  }
}

function mapDispatchToProps (dispatch) : DispatchToProps {
  return {
    loginRequest: bindActionCreators(loginRequest, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
