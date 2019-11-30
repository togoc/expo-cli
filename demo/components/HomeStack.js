import React, { Component } from 'react'
import {
     Text,View,
     Dimensions,Button,Image,StyleSheet,StatusBar,
     TouchableHighlight,TextInput,FlatList,TouchableNativeFeedback,
     Vibration,DeviceEventEmitter,BackHandler,Alert,TouchableOpacity
    } from 'react-native'
import { createStackNavigator} from 'react-navigation-stack';
import { FontAwesome } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
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



class HomeScreen extends React.Component {
    state={
        barStyle:'default',
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
                style={[{marginLeft:10,flex:1,width:40}]} >
                <Image
                 source={require('./logo.png')}
                 style={[styles.image]}
                />
            </TouchableHighlight>
            <View style={[{flex:3,flexDirection:'row',display:'flex'}]}>
                <View
                 style={{display:'flex',justifyContent:'center',alignItems:'center',flex:4,marginRight:30}}
                >
                    <Text>消息</Text>
                </View>
                <TouchableHighlight
                    style={{paddingRight:20}}
                    onPress={()=>{
                        alert("拍照")
                    }}
                >
                <MaterialIcons name="add-a-photo" size={25}/>
                </TouchableHighlight>
                <TouchableHighlight
                onPress={()=>{
                    alert("加好友")
                }}>

                <MaterialIcons name="add" size={28}/>
                </TouchableHighlight>
            </View>
        </View>
      }
    }
    handleBackPress = () => {
      const parent = this.props.navigation.dangerouslyGetParent().dangerouslyGetParent().dangerouslyGetParent();
      const isDrawerOpen = parent && parent.state && parent.state.isDrawerOpen;
      if(isDrawerOpen||parent._childrenNavigation.SearchDrawer.isFocused()||parent._childrenNavigation.ChatDrawer.isFocused()) 
      return
      let flat=false
      Alert.alert(
          '',
          '是否确定退出?',
          [
            {text: '取消', onPress: () => {}, style: 'cancel'},
            {text: '确定', onPress: () => {
              BackHandler.exitApp()
              }},
          ],
          { cancelable: false }
          );
          if(flat){
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
        fetch('http://192.168.3.3:5001/test')
        .then((response) => response.json())
        .then((responseJson) => {
  
        //   this.setState({
        //     isLoading: false,
        //     dataSource: responseJson.movies,
        //   }, function(){
  
        //   });
        console.log(responseJson)
  
        })
        .catch((error) =>{
          console.error(error);
        });
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
      
        <View style={{ flex: 1,backgroundColor:'#F5F6FA' }}>
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
                        this.props.navigation.navigate('Search',{lastRoute:'Home'});
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
            <View style={[style.container,{paddingBottom:height/10}]}>
                <FlatList
                initialNumToRender={9}
                data={[
                    {key: 'Devin',id:'11'},
                    {key: 'Dan',id:'12'},
                    {key: 'Dominic',id:'13'},
                    {key: 'Jackson',id:'14'},
                    {key: 'James',id:'15'},
                    {key: 'Joel',id:'16'},
                    {key: 'John',id:'17'},
                    {key: 'Jillian',id:'18'},
                    {key: 'Jimmy',id:'19'},
                    {key: 'Julie',id:'20'},
                    {key: 'Juli1e',id:'21'},
                    {key: 'Jul2ie',id:'22'},
                ]}
                renderItem={({item}) =>
                <TouchableNativeFeedback
                onPress={()=>{
                //    alert("你点击的是 "+item.key)
                   this.props.navigation.navigate('Chat',{item})
                }}
                background={TouchableNativeFeedback.SelectableBackground()}>
                   <View style={{backgroundColor:'#fff',display:'flex',paddingTop:10}} >
                        <View style={[style.flex,{justifyContent:'center',alignItems:'center'}]}>
                            <View style={[style.flex,{flexDirection:'row',width:width-20}]}>
                                <Image
                                    style={{width:45,height:45,margin:5,borderRadius:5}}
                                    source={require('./logo.png')}
                                />
                                <View style={[style.flex,{justifyContent:'center',marginLeft:2}]}>
                                    <View  style={[style.flex,{flexDirection:'row',flex:1}]}>
                                        <Text style={{flex:4,fontSize:16,color:'#03081B'}}>
                                            {item.key}
                                        </Text>
                                        <Text  style={{flex:1,fontSize:10,color:'#A4A4A4'}}>
                                            time
                                        </Text>
                                    </View>
                                    <Text  style={{fontSize:12,color:'#A4A4A4',flex:1}}>Msg</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableNativeFeedback>
                    }/>
            </View>       
        </View>
        );
  }
}

{/* <Button
title="Go"
onPress={() => {
    this.props.navigation.navigate('Details');
}}
/> */}

class DetailsScreen extends React.Component {
    render() {
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

const HomeStack = createStackNavigator({
    Home:HomeScreen,
    // Details: DetailsScreen,
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


export default HomeStack


const style = StyleSheet.create({
    flex:{
        display:"flex",
        flex:1
    }
    ,
    home:{
        display:'flex',
        flexDirection:'column',
        flex:1
    },
    constainer:{
        flex:8,
        backgroundColor:'#F5F6FA',
        
    }
    ,
    nav:{
        flex:1,
        backgroundColor:'#11D6BB',
        display:'flex',
        flexDirection:'row',

    } ,
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
})

