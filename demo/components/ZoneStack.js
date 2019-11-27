import React, { Component } from 'react'
import {
     Text,View,TextInput,
     Dimensions,Button,Image,StyleSheet,StatusBar,
     TouchableHighlight,TouchableOpacity,
     Vibration,DeviceEventEmitter,
    } from 'react-native'
import { createStackNavigator} from 'react-navigation-stack';
import { FontAwesome } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

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
                    navigate.navigation.openDrawer('HomeDrawer')
                    DeviceEventEmitter.emit('barStyle', 'dark-content');
                }}
                onLongPress={()=>{
                    Vibration.vibrate(50)
                    alert("长按了")
                }}
                style={[{marginLeft:10,flex:0,width:40}]} >
                <Image
                 source={require('./logo.png')}
                 style={[styles.image]}
                />
            </TouchableHighlight>
            <View style={[{flex:1,flexDirection:'row',display:'flex',marginRight:50}]}>
                <View
                 style={{display:'flex',justifyContent:'center',alignItems:'center',flex:1}}
                >
                    <Text>动态</Text>
                </View>
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
      
        <View style={{ flex: 1 ,backgroundColor:'#F5F6FA'}}>
           <StatusBar
                ref='statuBar'
                //  指定状态栏的变化是否应以动画形式呈现。
                animated = { true }
                // 状态栏的背景色。
                backgroundColor="rgba(0,0,0,0)"
                barStyle={this.state.barStyle}
                translucent={true}/>
            <View style={[styles.pdLeft,{height:height/10,width,backgroundColor:'#fff',paddingBottom:10,paddingTop:10}]}>
                <TouchableOpacity
                    style={[{flex:1,borderRadius:20,backgroundColor:'#F5F6FA',height:height/14,flexDirection:'row'},styles.center]}
                    onPress={()=>{
                        this.props.navigation.navigate('Search',{lastRoute:'Zone'});
                    }}
                >
                    <View style={{flex:0,marginLeft:5}}>
                        <FontAwesome
                            name="search"
                            size={20}
                            color="#B4B6C2"
                        />
                    </View>
                    <TextInput
                    placeholder="搜索"
                    editable={false}
                    style={{color:'#B4B6C2',marginLeft:5,flex:0}}
                    >

                    </TextInput>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={()=>{
                    alert("敬请期待!")
                }}
                >
            <View 
            style={{height:height/10,width,paddingLeft:15,paddingRight:15,backgroundColor:'#fff', display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <MaterialIcons name="fiber-new" size={25} />
                    <Text style={{fontSize:12}}>好友动态</Text>
                </View>
                <View style={{flex:1,display:"flex",alignItems:"center",justifyContent:'flex-end',flexDirection:'row'}}>
                    <Ionicons name="logo-freebsd-devil" size={25} />
                    <AntDesign 
                    name="right"
                    size={10}
                />
                </View>
            </View>
            </TouchableOpacity>
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