import React, { Component, PropTypes } from 'react';
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation,Image} from 'react-native';
import style from '../service/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
const styles=style.styles
export default class ListPage extends Component {
  constructor(props) {
    super(props)
    this.state={
      text: '123',
    }
  }
  toMain(){
    this.props.navigator.pop();
  }
  toDetailShow(){
    this.props.navigator.push({id:"DetailShow",title:"DetailShow",data:"goto DetailShow"});
  }
  render() {
    let arr=[{id:1},{id:2},{id:3}]
    let o=this
    let resumap= arr.map(function (itm) {
      return (
        <View style={[styles.mainContiner,styles.marginBottom10,styles.padding10]} key={itm.id} >
        <View style={[styles.flex,styles.flexStart]}><Text>Tirtle·amin</Text></View>
        <TouchableOpacity
         onPress={o.toDetailShow.bind(o)}
         underlayColor="#F5FCFF">
        <View style={[styles.flex,styles.flexStart,styles.flexDirectionColumn]}>
          <View style={[styles.flex,styles.overflowHide,styles.marginTop10]}>
            <Image style={styles.imgAllStyle}  source={require('../img/tabacon/sjkq.png')}/>
          </View>
          <View style={[styles.flex,styles.overflowHide,styles.marginTop10,styles.flexDirectionRow]}>
            <Text style={[styles.textColorGrray]}>this is a impresa</Text>
            <View style={{flex:2,alignItems: 'flex-end'}}>
              <Icon name='comment'  style={[styles.IconColorOrgiange]} size={20}></Icon>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      </View>
      )
    })
    return (
      <View style={[styles.detailContainView,styles.flexStart]}>
        {resumap}
      </View>
    )
  }
}
