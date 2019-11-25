import React, { Component } from 'react'
import {
     Text,View,
     Dimensions,Button,Image,StyleSheet,StatusBar,
     TouchableHighlight,TouchableOpacity,
     Vibration,DeviceEventEmitter,FlatList,BackHandler,Alert
    } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
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



class DetailsScreen extends React.Component {
  render() {
    const {navigation} = this.props
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
        <Button
        title="Go to Home"
        onPress={() => {
            this.props.navigation.navigate('Home');
        }
    }
        />
        </View>
    );
  }
}



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
  handleBackPress = () => {
    // console.log(this.props.navigation.state.routeName)
    // if(this.props.navigation.state.routeName!=="Home")
     return
    let flat=false
    Alert.alert(
        '',
        '是否确定退出?',
        [
          {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: '确定', onPress: () => {
            BackHandler.exitApp()
            }},
        ],
        { cancelable: false }
        );
        if(flat){
            console.log("1")
            return false
        }
    // BackHandler.exitApp(); // works best when the goBack is async
    return true;
  }
  componentDidMount(){
       //收到监听
      this.listener = DeviceEventEmitter.addListener('barStyle', (message) => {
      //收到监听后想做的事情
      this.setState({barStyle:message})
      })
      BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

  }
  componentWillUnmount(){
        //移除监听
      if (this.listener) {
          this.listener.remove();
      }
      //
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);

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



class ContactScreen extends React.Component {
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
  handleBackPress = () => {
    // console.log(this.props.navigation.state.routeName)
    // if(this.props.navigation.state.routeName!=="Home") 
    return
    let flat=false
    Alert.alert(
        '',
        '是否确定退出?',
        [
          {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: '确定', onPress: () => {
            BackHandler.exitApp()
            }},
        ],
        { cancelable: false }
        );
        if(flat){
            console.log("1")
            return false
        }
    // BackHandler.exitApp(); // works best when the goBack is async
    return true;
  }
  componentDidMount(){
       //收到监听
      this.listener = DeviceEventEmitter.addListener('barStyle', (message) => {
      //收到监听后想做的事情
      this.setState({barStyle:message})
      })
      BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

  }
  componentWillUnmount(){
        //移除监听
      if (this.listener) {
          this.listener.remove();
      }
      //
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);

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




class HomeScreen extends React.Component {
    state={
        barStyle:'default',
        exit:true
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
    handleBackPress = () => {
      const parent = this.props.navigation.dangerouslyGetParent();
      const isDrawerOpen = parent && parent.state && parent.state.isDrawerOpen;
      console.log(parent.state)
      // if(this.props.navigation.state.routeName!=="Home") return
      // console.log(this.props.navigation.isFocused(),this.state.exit)
      if(!this.props.navigation.isFocused()||!this.state.exit)
       return
      let flat=false
      Alert.alert(
          '',
          '是否确定退出?',
          [
            {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: '确定', onPress: () => {
              BackHandler.exitApp()
              }},
          ],
          { cancelable: false }
          );
          if(flat){
              console.log("1")
              return false
          }
      // BackHandler.exitApp(); // works best when the goBack is async
      return true;
    }
    componentDidMount(){
         //收到监听
        this.listener = DeviceEventEmitter.addListener('barStyle', (message) => {
        //收到监听后想做的事情
        console.log(message)
        this.setState({barStyle:message,exit:!this.state.exit})
        })
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

    }
    componentWillUnmount(){
          //移除监听
        if (this.listener) {
            this.listener.remove();
        }
        //
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);

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




class CustomDrawerContentComponent extends React.Component{
    constructor(props){
      super()
      this.props = props
    }
    state={
        barStyle:"light-content"
    }
    componentDidMount(){
    
        
    }
    render(){
        const {navigation} = this.props
      return (
        <View style={[{flex:1,backgroundColor:'#ccc'},styles.pdTop,styles.pdLeft]}>
            <View style={[{height:height/10,backgroundColor:'gray',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
                <TouchableOpacity 
                style={[{flexDirection:'row'},styles.center]}
                onPress={() =>{
                    this.props.navigation.goBack()
                    DeviceEventEmitter.emit('barStyle', 'default');
                    }}>
                <Image 
                source={require('./images/addcard.png')}
                style={{width:30,height:30}}
                />
                <Text style={{paddingLeft:5}}>打卡</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.center}
                onPress={() =>{
                    this.props.navigation.goBack()
                    DeviceEventEmitter.emit('barStyle', 'default');
                    }}
                >
                <Image
                source={require('./images/cancel.png')}
                style={{width:25,height:25}}
                />
                </TouchableOpacity>
            </View>
            <View style={[styles.center,{flexDirection:'row',height:height/8,backgroundColor:'red'}]}>
                    <TouchableOpacity
                      style={{flex:1}}
                    >
                        <Image 
                        source={require('./logo.png')}
                        style={{width:50,height:50,margin:5}}
                        />
                    </TouchableOpacity>
                    <View style={[{flex:4}]}>
                          <View style={[styles.center,{flexDirection:'row',justifyContent:'space-between'}]}>
                              <TouchableOpacity>
                                <Text>title</Text>
                              </TouchableOpacity>
                              <TouchableOpacity>
                              <Image
                                source={require('./images/code.png')}
                                style={{width:20,height:20,margin:2}}
                              />
                              </TouchableOpacity>
                          </View>
                          <TouchableOpacity>
                              <Image
                                source={require('./images/star.png')}
                                style={{width:20,height:20,margin:2}}
                              />
                          </TouchableOpacity>
                          <TouchableOpacity>
                          <Text
                            style={{fontSize:12}}
                            numberOfLines={1}
                          >
                            <Image
                           source={require('./images/edit.png')}
                           style={{width:20,height:20,margin:2}}
                          />飞雪连天射白鹿,笑书神侠倚碧鸳</Text>
                          </TouchableOpacity>
                    </View>
            </View>
            <FlatList
              style={{marginTop:height/16}}
              data={[
                {key:'了解会员特权'},
                {key:'我的钱包'},
                {key:'我的个性装扮'},
                {key:'我的收藏'},
                {key:'我的相册'},
                {key:'我的文件'},
                {key:'免流量特权'},
              ]}
              renderItem={({item})=>(
                <TouchableOpacity
                style={[styles.center,{flexDirection:'row',justifyContent:'flex-start',marginTop:height/30}]}
                onPress={()=>{
                  alert(item.key)
                }}
             >
                <Image
                   source={require('./images/vip.png')}
                   style={{width:20,height:20,marginRight:20}}
                />
                <Text style={{fontSize:14}}>{item.key}</Text>
              </TouchableOpacity>
              )}
            >
            </FlatList>
        </View>
      )
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

const HomeStack = createStackNavigator({
  Home:HomeScreen,
  Details: DetailsScreen,
},{
    initialRouteName: 'Home',
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

const ContactStack = createStackNavigator({
  Settings: ContactScreen,
},{
  initialRouteName: 'Settings',
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



const TabNavigator =   createBottomTabNavigator(
    {
      HomeTab:{
        screen: HomeStack,
        navigationOptions: {
          tabBarIcon: ({focused, horizontal, tintColor}) => {
            if (focused) {
              return <Text style={{fontFamily:'iconfont',fontSize:22,width: 30, height: 30,color:"#11D6BB"}}>&#xe655;</Text>
            } else {
              return <Text style={{fontFamily:'iconfont',fontSize:22,width: 30, height: 30}}>&#xe655;</Text>
            }
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
          tabBarIcon: ({focused, horizontal, tintColor}) => {
            if (focused) {
              return <Text style={{fontFamily:'iconfont',fontSize:24,width: 30, height: 30,color:"#11D6BB"}}>&#xe61c;</Text>
            } else {
                return <Text style={{fontFamily:'iconfont',fontSize:24,width: 30, height: 30}}>&#xe61c;</Text>
            }
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
          tabBarIcon: ({focused, horizontal, tintColor}) => {
            if (focused) {
                return <Text style={{fontFamily:'iconfont',fontSize:25,width: 30, height: 30,color:"#11D6BB"}}>&#xe611;</Text>
            } else {
                return <Text style={{fontFamily:'iconfont',fontSize:25,width: 30, height: 30}}>&#xe611;</Text>
            }
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
      }
      // defaultNavigationOptions: ({navigation}) => {
      //   const {routes} = navigation.state;
      //   let flat = true;
      //   if (routes && routes.length > 1) {
      //     flat = false;
      //   }
      //   return {
      //     tabBarVisible: flat,
      //   };
      // }
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
    },
    {   
        // order:['Home'],
        // drawerBackgroundColor:'red',
        // initialRouteName:'Home',
        drawerType:'back',
        edgeWidth:10,
        // useNativeAnimations :true,
        minSwipeDistance :50,
        drawerPosition: 'left',
        drawerWidth: width,
        contentComponent:CustomDrawerContentComponent, // 自定义抽屉组件,
        drawerLockMode:'unlocked'
    }
  )

export default createAppContainer(Drawer);








