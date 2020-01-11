import React from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import MyScreen from '../screens/MyScreen';
import CartScreen from '../screens/CartScreen';
import DetailScreen from '../screens/DetailScreen';
import GoodsDetailScreen from '../screens/GoodsDetailScreen';
import GoodsListScreen from '../screens/GoodsListScreen';
import SearchScreen from '../screens/SearchScreen';

import Colors from '../constants/Colors'
import Layout from '../constants/Layout'
// window: {
//   width,
//   height,
// },
// isSmallDevice: width < 375,


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
});

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.themeColor,// 背景颜色
  },
  headerTintColor: '#fff', //字体颜色
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center',
  },
  cardShadowEnabled: false,
}


//首页
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
    Search: SearchScreen,
    GoodsDetail: GoodsDetailScreen,
    GoodsListScreen
  },
  {
    ...config,
    defaultNavigationOptions: {
      title: '首页',
      ...defaultNavigationOptions
    }
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: '首页',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? `ios-home${focused ? '' : '-outline'}` : 'md-home'
      }
    />
  ),
};

HomeStack.path = 'Home';



//分类
const CategoryStack = createStackNavigator(
  {
    Category: CategoryScreen,
  },
  {
    ...config,
    defaultNavigationOptions: {
      title: '分类',
      ...defaultNavigationOptions
    }
  }
);



CategoryStack.navigationOptions = {
  tabBarLabel: '分类',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="ios-more"
    />
  ),
};

CategoryStack.path = '';




//购物车
const CartStack = createStackNavigator(
  {
    Links: CartScreen,
  },
  {
    ...config,
    defaultNavigationOptions: {
      title: '购物车',
      ...defaultNavigationOptions
    }
  }
);

CartStack.navigationOptions = {
  tabBarLabel: '购物车',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'} />
  ),
};

CartStack.path = 'Cart';


//我的
const MyStack = createStackNavigator(
  {
    Settings: MyScreen,
  },
  {
    ...config,
    defaultNavigationOptions: {
      title: '我的',
      ...defaultNavigationOptions
    }
  }
);

MyStack.navigationOptions = {
  tabBarLabel: '我的',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} />
  ),
};


MyStack.path = 'User';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  CategoryStack,
  CartStack,
  MyStack
});

tabNavigator.path = '';



export default tabNavigator;

