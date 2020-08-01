import React,{Component} from 'react'
import {View,Keyboard} from 'react-native'
import {Input,Text,Button,Form,Item,Container,
  Content,Label} from 'native-base'
import { renderEmptyStringIfUndefined } from '../common/Utils'

export class InputElement extends React.PureComponent<Props> {
  constructor (props: Props) {
    super(props)
  }
  render () {
    const { eachRow, state, updateState } = this.props
    return (<View style={{ flexDirection: 'row', }}>
      
      <View >
        <Label>{eachRow.displayName}</Label>
      </View>
      <View>
        <Input value={renderEmptyStringIfUndefined(state[eachRow.stateName])} keyboardType={eachRow.keyboardType} onChangeText={text => updateState({ [eachRow.stateName]: text })}/>
      </View>
    </View>)
  }
}