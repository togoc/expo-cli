import React from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform } from 'react-native';
import CategoryScreen from '../screens/CategoryScreen';
import GoodsListScreen from '../screens/GoodsListScreen';
import Colors from '../constants/Colors'
import TabBarIcon from '../components/TabBarIcon';

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


const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {}
});

//分类
const CategoryStack = createStackNavigator(
    {
        Category: CategoryScreen,
        GoodsListScreen
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
    tabBarLabel: '分类1',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name="ios-more"
        />
    ),
};

CategoryStack.path = 'CategoryStack';



const tabNavigator = createBottomTabNavigator({
    CategoryStack
});


export default tabNavigator