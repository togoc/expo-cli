
import React from 'react'
import {
     Text,View,
     Dimensions,Image,StyleSheet,StatusBar
     ,TouchableOpacity,Animated,
     DeviceEventEmitter,FlatList
    } from 'react-native'

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
    center:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }
})





export default class CustomDrawerContentComponent extends React.Component{
    constructor(props){
      super()
    }
    state={
        barStyle:"light-content"
    }
    componentDidMount(){
    }
    render(){
      // const translateX = this.drawerOpenProgress
      return (
        // <Animated.View style={{ transform: [{ translateX }] }}>
        <View style={[{flex:1},styles.pdTop,styles.pdLeft]}>
            <View style={[{height:height/10,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
                <TouchableOpacity 
                style={[{flexDirection:'row'},styles.center]}
                onPress={() =>{
                    this.props.navigation.goBack()
                    DeviceEventEmitter.emit('barStyle', 'default');
                    }}>
                <FontAwesome name="calendar-plus-o" size={25} />
                <Text style={{paddingLeft:5}}>打卡</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.center}
                onPress={() =>{
                    this.props.navigation.goBack()
                    DeviceEventEmitter.emit('barStyle', 'default');
                    }}
                >
                <MaterialIcons name="cancel" size={22} color="gray" />
                </TouchableOpacity>
            </View>
            <View style={[styles.center,{flexDirection:'row',height:height/8}]}>
                    <TouchableOpacity
                      style={{flex:1.7,width:height/10,height:height/10}}
                    >
                        <Image 
                        source={require('./logo.png')}
                        style={{width:height/10,height:height/10,borderRadius:5}}
                        />
                    </TouchableOpacity>
                    <View style={{flex:5}} >
                          <View style={[styles.center,{flexDirection:'row',justifyContent:'space-between'}]}>
                              <TouchableOpacity>
                                <Text>title</Text>
                              </TouchableOpacity>
                              <TouchableOpacity>
                                 <Ionicons name="ios-barcode" size={25} />
                              </TouchableOpacity>
                          </View>
                          <TouchableOpacity style={{display:'flex',flexDirection:'row'}}>
                              <FontAwesome name="star" color="yellow" size={20} />
                              <FontAwesome name="star" color="yellow" size={20} />
                              <FontAwesome name="star" color="yellow" size={20} />
                          </TouchableOpacity>
                          <TouchableOpacity>
                          <Text
                            style={{fontSize:12}}
                            numberOfLines={1}
                          >
                              <FontAwesome name="edit" color="gray" size={18} />
                           飞雪连天射白鹿,笑书神侠倚碧鸳
                          </Text>
                          </TouchableOpacity>
                    </View>
            </View>
            <FlatList
              style={{marginTop:height/16}}
              data={[
                {key:'了解会员特权',icon:'folder'},
                {key:'我的钱包',icon:'address-card'},
                {key:'我的个性装扮',icon:'street-view'},
                {key:'我的收藏',icon:'folder'},
                {key:'我的相册',icon:'photo'},
                {key:'我的文件',icon:'folder'},
                {key:'免流量特权',icon:'folder'},
              ]}
              renderItem={({item})=>(
                <TouchableOpacity
                style={[{flexDirection:'row',justifyContent:"space-between",marginTop:height/30}]}
                onPress={()=>{
                  alert(item.key)
                }}
             >
               <View style={{display:'flex',flexDirection:'row'}}>
                <FontAwesome 
                    name={item.icon}
                    size={25}
                />
                  <Text style={{fontSize:14,marginLeft:20}}>{item.key}</Text>
               </View>
               <AntDesign 
                    name="right"
                    size={20}
                />
              </TouchableOpacity>
              )}
            >
            </FlatList>
        </View>
          // </Animated.View>
      )
    }
  }
  

  