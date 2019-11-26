import React, { Component } from 'react'
import {
     Text,View,
     Dimensions,Button,Image,StyleSheet,StatusBar,
     TouchableHighlight,
     Vibration,DeviceEventEmitter,BackHandler,Alert
    } from 'react-native'
import { createStackNavigator} from 'react-navigation-stack';

//获取屏幕大小
const {width,height} = Dimensions.get('window')
//获取状态栏高度
const statusBarHeight = StatusBar.currentHeight


const styles = StyleSheet.create({
    pdLeft:{
        paddingLeft:20,
        paddingRight:20
    }
    ,
    pdTop:{
        paddingTop:statusBarHeight
    }
    ,
    image:{
        width:40,
        height:40,
        borderRadius:5
    },
    center:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }
})





class ZoneScreen extends React.Component {
    state={
        barStyle:'default'
    }
    static navigationOptions=(navigate)=>{
      return  {
        headerTitle:()=> 
        <View style={{ marginRight:10,flex: 1, justifyContent: 'center', alignItems: 'center',flexDirection:'row'}}>
             
             <TouchableHighlight
                onPress={()=>{
                    navigate.navigation.openDrawer('HomeDrawer',{name:'togoc'})
                    DeviceEventEmitter.emit('barStyle', 'dark-content');
                }}
                onLongPress={()=>{
                    Vibration.vibrate(50)
                    alert("长按了")
                }}
                style={[{marginLeft:10,flex:1,width:40}]} >
                <Image
                 source={require('./logo.png')}
                 style={[styles.image]}
                />
            </TouchableHighlight>
            <View style={[{flex:3,flexDirection:'row',display:'flex'}]}>
                <View
                 style={{display:'flex',justifyContent:'center',alignItems:'center',flex:4}}
                >
                    <Text>消息</Text>
                </View>
                <TouchableHighlight
                    style={{paddingRight:20}}
                    onPress={()=>{
                        alert("拍照")
                    }}
                >
                <Image
                 source={require('./images/photo.png')}
                 style={[styles.image,{width:30,height:30}]}
                />
                </TouchableHighlight>
                <TouchableHighlight
                onPress={()=>{
                    alert("加好友")
                }}>
                 <Image
                 source={require('./images/addfriend.png')}
                 style={[styles.image,{width:25,height:25}]}
                 />
                </TouchableHighlight>
            </View>
        </View>
      }
    }
    componentDidMount(){
         //收到监听
        this.listener = DeviceEventEmitter.addListener('barStyle', (message) => {
        //收到监听后想做的事情
        this.setState({barStyle:message})
        })
  
    }
    componentWillUnmount(){
          //移除监听
        if (this.listener) {
            this.listener.remove();
        }
        //
    }
    render() {
        // const {navigation} = this.props.navigate
        return (
      
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <StatusBar
                ref='statuBar'
                //  指定状态栏的变化是否应以动画形式呈现。
                animated = { true }
                // 状态栏的背景色。
                backgroundColor="transparent"
                barStyle={this.state.barStyle}
                translucent={true}/>
            <Text>HomeScreen</Text>
            <Button
            title="Go"
            onPress={() => {
                this.props.navigation.navigate('Details');
            }}
            />
        </View>
        );
  }
  }
  
const ZoneStack = createStackNavigator({
    Zone:ZoneScreen,
  },{
      initialRouteName: 'Zone',
      defaultNavigationOptions:{
          headerStyle: {
              backgroundColor: '#11D6BB',
              height:height/8,
              paddingTop:statusBarHeight
          },
          headerTintColor: '#E3FAF8',
          headerTitleStyle: {
              fontWeight: 'bold',
          },
      },
  });
export default ZoneStack