import React, {Component} from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,DrawerLayoutAndroid
} from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';


 class HomeScreen extends Component {
    static navigationOptions={
        title:"Home",
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    render() {
        return (
            <View>
                <Text> HomeScreen </Text>
                <Button
          title="Go to Details"
          onPress={() => this.props.navigation.openDrawer()}
        />
            </View>
        )
    }
}
 
class ShoppingScreen extends Component {
    render() {
        return (
            <View>
                <Text> ShoppingScreen </Text>
            </View>
        )
    }
}
class DetailsScreen extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'red',height:200}}>
                <Text> DetailsScreen </Text>
            </View>
        )
    }
}
 


class CartScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>CartScreen!</Text>
      </View>
    );
  }
}
 
class FindScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>FindScreen!</Text>
      </View>
    );
  }
}
 
class UserScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>UserScreen!</Text>
      </View>
    );
  }
}
 
//创建底部导航createBottomTabNavigator
 
const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Shopping: ShoppingScreen,
    Cart:CartScreen,
    Find:FindScreen,
    User:UserScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        }
        if (routeName === 'Shopping') {
          iconName = "shopping-bag";
        }
        if (routeName === 'Cart') {
          iconName = "shopping-cart";
        }
        if (routeName === 'Find') {
          iconName = "file";
        }
        if (routeName === 'User') {
          iconName = "user";
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Text>111</Text>
        //  <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'rgb(4,127,116)',
      inactiveTintColor: 'gray',
    },
  }
);
 



 
//创建全局导航器createStackNavigator
const  AppStack = createStackNavigator({
  bottomTabNavigator:{
    screen : bottomTabNavigator,
    // navigationOptions:{
    //   header :null
    // }
  },
//全局的stack 
//   defaultNavigationOptions:{
//     screen : DetailsScreen,
//     navigationOptions:{
//         headerStyle:{
//             backgroundColor:'#6699ff'}
//     },
//     title :"This is the details"
//   },
  initialRouteName:'bottomTabNavigator'
})
 
 
// const CustomDrawerContentComponent = props => {
//   return (
//       <View style={{flex:1}}>
//            <TouchableOpacity 

//              onPress={() =>props.navigation.navigate("DrawerClose")}>
//              <Text>首页</Text>
//            </TouchableOpacity>
//       </View>
//  );
// }

class CustomDrawerContentComponent extends Component{
  constructor(props){
    super()
    this.props = props
  }
  render(){
    return (
      <View style={{flex:1}}>
      <TouchableOpacity 
        onPress={() =>this.props.navigation.navigate("DrawerClose")}>
        <Text>首页</Text>
      </TouchableOpacity>
      </View>
    )
  }
}





const Drawer = createDrawerNavigator({  
    Home: {
        screen: AppStack
    } 
},
{
 drawerWidth:  300, // 展示的宽度
 drawerPosition: 'left', // 抽屉在左边还是右边
 contentComponent: CustomDrawerContentComponent, // 自定义抽屉组件,
 drawerLockMode:'unlocked',
 useNativeAnimations :true,
 
}); 







const AppStackContainer =  createAppContainer(Drawer);
 
 
 
export default  AppStackContainer
