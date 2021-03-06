import React, { Component, PropTypes } from 'react';
import { View,ScrollView, StatusBar,Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation,Image} from 'react-native';
import style from '../service/styles'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import Icon from 'react-native-vector-icons/FontAwesome'
const styles=style.styles
export default class Person extends Component {
  constructor(props) {
    super(props)
    this.state={
      text: '123',
    }
  }
  toMain(){
    this.props.navigator.pop();
  }
  toList(){
    this.props.navigator.push({id:"list",title:"List",data:"Passed from List screen"});
  }
  toCharts(){
    this.props.navigator.push({id:"MyCharts",title:"MyCharts",data:"Passed from MyCharts screen"});
  }
  toSet(){
    this.props.navigator.push({id:"Setting",title:"Setting",data:"Passed from List screen"});
  }
  toAppStorage(){
    this.props.navigator.push({id:"AppStorage",title:"AppStorage",data:"Passed from List screen"});
  }
  render() {
    return (
      <View style={styles.NoHeaderView}>
        <Image style={[styles.backgroundVideo,styles.halfHeight]} blurRadius={2} source={require('../img/tabacon/sjkq.png')}/>
        <ScrollView style={styles.noHeader}>
          <View style={[styles.flexUtilCenter,styles.padding10]}>
            <TouchableOpacity
             style={styles.button}
             onPress={this.toMain.bind(this)}
             underlayColor="#F5FCFF">
               <View style={[styles.round,styles.overflowHide]}>
                <Image style={{flex:1,width:100}} blurRadius={1} source={require('../img/tabacon/personDef.png')}/>
               </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.flex,styles.flexDirectionRow,styles.padding10]}>
            <View style={[styles.flex,styles.alignItemsCenter]}>
             <Text style={[styles.bgTrans,styles.textColorWhite]}>Mr Andsen</Text>
            </View>
          </View>
          <View style={[styles.flex,styles.flexDirectionRow,styles.bgshow,styles.padding10,styles.borderBottom]}>
            <View style={[styles.flex,styles.alignItemsCenter,styles.borderRight]}>
               <Text style={[styles.bgTrans]}>关注 88</Text>
            </View>
            <View style={[styles.flex,styles.alignItemsCenter,styles.borderRight]}>
               <Text style={[styles.bgTrans]}>粉丝 11</Text>
            </View>
            <View style={[styles.flex,styles.alignItemsCenter]}>
               <Text style={[styles.bgTrans]}>吉纳 12</Text>
            </View>
          </View>
          <TouchableHighlight
           onPress={this.toList.bind(this)}
           underlayColor="#F5FCFF">
          <View style={[styles.list]}>
            <View style={{flex:1,alignItems: 'center'}}><Icon name='rocket' color='#999' size={23} /></View>
            <View style={{flex:4,alignItems: 'flex-start'}}><Text>Rocket</Text></View>
            <View style={{flex:2,alignItems: 'flex-end'}}><Icon name='angle-right' color='#999' size={23} /></View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight
           onPress={this.toCharts.bind(this)}
           underlayColor="#F5FCFF">
          <View style={styles.list}>
            <View style={{flex:1,alignItems: 'center'}}><Icon name='briefcase' color='#999' size={23} /></View>
            <View style={{flex:4,alignItems: 'flex-start'}}><Text>MyCharts</Text></View>
            <View style={{flex:2,alignItems: 'flex-end'}}><Icon name='angle-right' color='#999' size={23} /></View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight
           onPress={this.toList.bind(this)}
           underlayColor="#F5FCFF">
          <View style={styles.list}>
            <View style={{flex:1,alignItems: 'center'}}><Icon name='thermometer-3' color='#999' size={23} /></View>
            <View style={{flex:4,alignItems: 'flex-start'}}><Text>Thermometer</Text></View>
            <View style={{flex:2,alignItems: 'flex-end'}}><Icon name='angle-right' color='#999' size={23} /></View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight
           onPress={this.toAppStorage.bind(this)}
           underlayColor="#F5FCFF" style={[styles.marginTop10]}>
          <View style={[styles.list,styles.borderTop]}>
            <View style={{flex:1,alignItems: 'center'}}><Icon name='balance-scale' color='#999' size={23} /></View>
            <View style={{flex:4,alignItems: 'flex-start'}}><Text>AppStorage</Text></View>
            <View style={{flex:2,alignItems: 'flex-end'}}><Icon name='angle-right' color='#999' size={23} /></View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight
           onPress={this.toList.bind(this)}
           underlayColor="#F5FCFF">
          <View style={styles.list}>
            <View style={{flex:1,alignItems: 'center'}}><Icon name='id-card-o' color='#999' size={23} /></View>
            <View style={{flex:4,alignItems: 'flex-start'}}><Text>IdCard</Text></View>
            <View style={{flex:2,alignItems: 'flex-end'}}><Icon name='angle-right' color='#999' size={23} /></View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight
           onPress={this.toSet.bind(this)}
           underlayColor="#F5FCFF">
          <View style={styles.list}>
            <View style={{flex:1,alignItems: 'center'}}><Icon name='cog' color='#999' size={23} /></View>
            <View style={{flex:4,alignItems: 'flex-start'}}><Text>Setting</Text></View>
            <View style={{flex:2,alignItems: 'flex-end'}}><Icon name='angle-right' color='#999' size={23} /></View>
          </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    )
  }
}
