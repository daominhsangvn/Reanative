import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {WinHeight, WinWidth} = Dimensions.get('window');
import Util from './util';
const styles = StyleSheet.create({
  home: {
    flex: 1,marginTop:32
  },
  flex:{flex:1},
  flex2:{flex:2},
  flex3:{flex:3},
  noHeader:{flex: 1,},
  hasHeader:{
    flex: 1,marginTop:64
  },
  container: {
    flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',color: '#333333',marginBottom: 5,
  },
  backImage:{
    width:13,height:26,
  },
  container: {
    flex: 1,backgroundColor:'#F6F6F6',
    justifyContent: 'flex-end',
  },
  //carview
  carview:{
    width: WinWidth,height:180,
    flex: 1,justifyContent: 'center',
    alignItems: 'center',backgroundColor: '#ccc',
  },
  containView:{
    flex: 1,backgroundColor:'#F6F6F6',
  },
  detailContainView:{
    flex:1,justifyContent: 'center',backgroundColor:'#F6F6F6',
  },
  NoHeaderView:{
    flex:1,justifyContent: 'center',backgroundColor:'#F6F6F6',paddingTop:20
  },
  blackText:{
    fontSize:15,textAlign:'center',
  },
// nav bar
  navBar: {
   backgroundColor: '#fff',borderBottomColor:'#EAEDF2',borderStyle:'solid',borderBottomWidth:1
  },
  navBarText: {
   fontSize: 16,marginVertical: 10,
  },
  navBarTitleText: {
   color: '#373E4D',fontWeight: '500',marginVertical: 9,
  },
  navBarLeftButton: {paddingLeft: 10,paddingRight: 10,},
  navBarRightButton: {paddingRight: 10,paddingTop:10},
  navBarButtonText: {color: '#5890FF',},

  icon: {
    width: 30,height: 30,alignSelf: 'center',
  },
  // tabs
  tabBottom:{flexDirection: 'row',alignItems: 'flex-end',justifyContent:'center',backgroundColor: 'white',borderTopColor:'#EAEDF2',borderStyle:'solid',borderTopWidth:1},
  tab:{flex: 1,height: 60},
  flexUtilCenter:{
    flex:1,flexDirection: 'column',justifyContent:'center',alignItems: 'center'
  },
  round:{flex:1,width:100,height:100,backgroundColor:'#999',borderRadius:200},
  list:{flex:1,flexDirection: 'row',backgroundColor:'#fff',borderStyle:'solid',borderBottomColor:'#EAEDF2',borderBottomWidth:1,
    justifyContent:'flex-start',alignItems: 'center',padding:12},
  mainContiner:{
      flex:1,backgroundColor:'#fff'
  },
  homeItemLeft:{flex:1,marginTop:10,marginRight:10,backgroundColor:'#999',height:90},
  homeItemRight:{flex:1,marginTop:10,backgroundColor:'#999',height:90},
  homeItem:{flex:1,marginRight:10,backgroundColor:'#999',height:90},
  // layout
  flexStart:{justifyContent:'flex-start'},
  flexCenter:{justifyContent:'center'},
  flexEnd:{justifyContent:'flex-end'},
  flexAround:{justifyContent:'space-around'},
  flexBetween:{justifyContent:'space-between'},

  flexDirectionRow:{flexDirection: 'row'},
  flexDirectionRowReverse:{flexDirection: 'row-reverse'},
  flexDirectionColumn:{flexDirection: 'column'},
  flexDirectionColumnReverse:{flexDirection: 'column-reverse'},

  alignItemsStart:{alignItems:'flex-start'},
  alignItemsCenter:{alignItems:'center'},
  alignItemsEnd:{alignItems:'flex-end'},
  alignItemsStretch:{alignItems:'stretch'},

  padding5:{padding:5},
  padding10:{padding:10},
  padding_5_10:{paddingTop:5,paddingRight:10,paddingBottom:5,paddingLeft:10,},
  paddingTop15:{paddingTop:15},
  paddingLeft15:{paddingLeft:15},
  marginTop10:{marginTop:10},
  marginTop22:{marginTop:22},
  marginTop30:{marginTop:30},
  marginTop35:{marginTop:35},
  marginTop40:{marginTop:40},
  marginRight5:{marginRight:5},
  marginBottom10:{marginBottom:10},
  marginLeft10:{marginLeft:10},
  // top
  top30:{top:Dimensions.get('window').height*0.3},
  overflowHide:{overflow:'hidden'},
  halfHeight:{height:Dimensions.get('window').height*0.5,},
  allheight:{height:Dimensions.get('window').height},
  height300:{height:Dimensions.get('window').height},
  height250:{height:250},
  height200:{height:200},
  height100:{height:100},
  height60:{height:60},
  height50:{height:50},
  height40:{height:40},
  height30:{height:30},
  height20:{height:10},
  minHeight150:{minHeight:150},
  maxHeight70:{maxHeight:70},
  maxHeight80:{maxHeight:80},
  maxHeight150:{maxHeight:150},
  maxHeight250:{maxHeight:250},
  maxHeight300:{maxHeight:300},
  AllWidth:{width:Dimensions.get('window').width},
  loginWidth:{width:Dimensions.get('window').width*0.8},
  midleWidth:{width:Dimensions.get('window').width*0.6},
  littleWidth:{width:Dimensions.get('window').width*0.4},
  relative:{position:'relative'},
  popUp:{left:Dimensions.get('window').width*0.1,
  width:Dimensions.get('window').width*0.8,minHeight:100,backgroundColor:'#fff',borderRadius:6},
  // fontSize
  fontSize20:{fontSize:20},
  fontSize18:{fontSize:18},
  fontSize15:{fontSize:15},
  fontSize12:{fontSize:12},
  // button
  smallButtom:{flex:1,width:100,height:50,justifyContent:'center',alignItems:'center'},
  medileButtom:{width:200,height:50,justifyContent:'center',alignItems:'center'},
  longButtom:{flex:1,width:Dimensions.get('window').width*0.8,height:45,justifyContent:'center',alignItems:'center'},

  // backgroundColor
  bgTrans:{backgroundColor:'transparent'},
  bgshow:{backgroundColor:'#fff'},
  bgf6:{backgroundColor:'#F6F6F6'},
  bgBottonBlue:{backgroundColor:'#66A0E0'},
  bg000:{backgroundColor:'#000'},
  bgeee:{backgroundColor:'#eee'},
  bg666:{backgroundColor:'#666'},
  bg999:{backgroundColor:'#999'},
  bgBottonGre:{backgroundColor:'#FDB045',opacity:0.8},
  bg8d:{backgroundColor:'#8D8D8D'},
  loginBg:{backgroundColor:'#fff',opacity:0.5},
  // color
  textColorWhite:{color:"#fff"},
  textColorGrray:{color:"#8D8D8D"},
  IconColorOrgiange:{color:"#8D8D8D"},
  // border
  borderRadiusLittle:{borderRadius:3},
  borderRadiusSmial:{borderRadius:6},
  borderRadiusLarge:{borderRadius:60},
  borderTop:{borderStyle:'solid',borderTopColor:'#EAEDF2',borderTopWidth:1,},
  borderBottom:{borderStyle:'solid',borderBottomColor:'#EAEDF2',borderBottomWidth:1,},
  borderRight:{borderStyle:'solid',borderRightColor:'#999',borderRightWidth:1,},
  flexWrap:{flexWrap:'wrap'},
  // image
  imgStyle:{
           width:Dimensions.get('window').width*0.45,
           height:90,
           resizeMode:'cover'
  },
  imgAllStyle:{
           width:Dimensions.get('window').width,
           height:120,
           resizeMode:'cover'
  },
  imgLeftStyle:{
           width:Dimensions.get('window').width*0.3,
           height:110,
           resizeMode:'cover'
  },
  imgMsgStyle:{
           width:Dimensions.get('window').width,
           height:170,
           resizeMode:'cover'
  },
  absoluteIcon:{
    position:'absolute',
    top:10,right:11,fontSize:5,color:'#F96C43'
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width:Dimensions.get('window').width,
  },
  WebView:{
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },
  loading:{
    flex:1,height:64,marginTop:-64
  },
  chart: {
      width: 200,
      height: 200,
  },
  welcome: {
    fontSize: 14,
    textAlign: 'left',
    margin: 10,
  },
  content:{
    fontSize: 13,
    textAlign: 'left',
    margin: 10,
  },
   buttonpin: {
    margin:5,
    padding: 15,
  },
  touchBox:{
    width: Util.size.width/4,
    height: Util.size.width/4,
    backgroundColor:"#fff",
    borderWidth: Util.pixel,
    borderColor:"#EAEDF2",
    alignItems:'center',
    justifyContent:'center'
  },
  iconItem:{
    alignItems:'center',
    justifyContent:'center',
    width: Util.size.width/4,
  },
  boxIcon:{
    position:"relative",
    top:1,
    fontSize:35,
    width:35,height:35,
  },
  boxText:{
    width: Util.size.width/4,
    position:"relative",
    bottom:-10,
    height:20,
    textAlign:"center",
    backgroundColor:"transparent"
  },

  });
export default { styles }
