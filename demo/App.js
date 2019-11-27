import React, { Component } from 'react'
import {
     Text,View,
     Dimensions,Button,Image,StyleSheet,StatusBar,
    } from 'react-native'
import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AntDesign } from '@expo/vector-icons'

//组件
import HomeStack from './components/HomeStack'
import ZoneStack from './components/ZoneStack'
import ContactStack from './components/ContactStack'
import CustomDrawerContentComponent from './components/CustomDrawerContentComponent'
import SearchStack from './components/SearchStack';
//获取屏幕大小
const {width,height} = Dimensions.get('window')
//获取状态栏高度




const TabNavigator =   createBottomTabNavigator(
    {
      HomeTab:{
        screen: HomeStack,
        navigationOptions: {
          title:"消息",
          tabBarIcon: ({focused, horizontal, tintColor}) => {
              return <AntDesign name="message1" size={25} color={focused?"green":'gray'} />
        },
          tabBarOnPress: (event) => {
            //调用组建内默认的实现方法
            // alert('12')
            event.defaultHandler();
        },
        },
      },
      ContactTab:{
        screen: ContactStack,
        navigationOptions: {
          title:"联系人",
          tabBarIcon: ({focused, horizontal, tintColor}) => {
              return <AntDesign name="contacts" size={25} color={focused?"green":'gray'} />
        },
          tabBarOnPress: (event) => {
            //调用组建内默认的实现方法
            // alert('12')
            event.defaultHandler();
        },
        },
      },
      ZoneTab:{
        screen: ZoneStack,
        navigationOptions: {
          title:"动态",
          tabBarIcon: ({focused, horizontal, tintColor}) => {
            return <AntDesign name="star" size={25} color={focused?"green":'gray'} />
        },
          tabBarOnPress: (event) => {
            //调用组建内默认的实现方法
            // alert('12')
            event.defaultHandler();
        },
        },
      },
    },
    {
      initialRouteName:'HomeTab',
      tabBarOptions:{
        // 非活动选项卡的背景色
        // inactiveBackgroundColor:'#fff',
        // "非活动" 选项卡的标签和图标颜色。
        // inactiveTintColor:"dd"
        // -活动选项卡的标签和图标颜色。
        activeTintColor :'#11D6BB',
        //  -活动选项卡的背景色。
        // activeBackgroundColor:'#11D6BB',
        // 是否显示 Tab 的图标，默认为false。
        showIcon:true,
        style:{
          backgroundColor:'#fff',
          borderTopColor:'#fff',
          height:height/12
        }
      }
    }
  )


  const Drawer =  createDrawerNavigator(
    {
      HomeDrawer: {
        screen:TabNavigator,
        navigationOptions:{
          drawerLockMode:'unlocked'
        }
      },
      SearchDrawer:{
        screen:SearchStack
      }
    },
    {   
        // order:['Home'],
        // drawerBackgroundColor:'red',
        initialRouteName:'HomeDrawer',
        drawerType:'slide',
        edgeWidth:width,
        // useNativeAnimations :true,
        // minSwipeDistance :50,
        drawerPosition: 'left',
        drawerWidth: width,
        contentComponent:CustomDrawerContentComponent, // 自定义抽屉组件,
        drawerLockMode:'unlocked'
    }
  )

export default createAppContainer(Drawer);








