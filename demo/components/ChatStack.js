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
import io from 'socket.io-client'
const socket = io('http://192.168.3.3:3000',{
    path:"/chat"
});
const {width,height} = Dimensions.get('window')
//获取状态栏高度
const statusBarHeight = StatusBar.currentHeight






class ChatScreen extends Component {
    static navigationOptions=(navigate)=>{
        return {
            headerTitle:()=>(
                <View style={{justifyContent:'center',alignItems:'center',display:'flex',flex:1}}>
                    <Text>正在与{JSON.stringify(navigate.navigation.getParam('item',null).key)}对话</Text>
                </View>
            )
        }
    }
    state={
        msg:"消息",
        roomId:'11',
        to:'12'
    }
    ChatRoom(id){
        
    }
    send(msg){
        socket.emit('message',this.state.to,msg)
    }
    componentDidMount(){
        
        this.props.navigation.addListener('willFocus',()=>{
            let id = JSON.stringify(this.props.navigation.getParam('item',null).id)
            let _this = this
            console.log(id)
            this.setState({to:id})
            socket.on(id, function(msg){
                _this.setState({msg})
            });
        })
    }
    render() {
        const {navigation} =this.props
        return (
            <View style={{flex:1}}>
                <View style={{flex:1,backgroundColor:'gray',justifyContent:'center',alignItems:'center'}}>
                    <Text>{this.state.msg}</Text>
                </View>
                <Text>
                    {this.state.msg}
                </Text>
                  <TextInput
                style={{flex:1}}
                placeholder='to'
                value={this.state.to}
                onChangeText={(val)=>{
                    this.setState({to:val})
                }}
                // onEndEditing={( event)=>{
                //     this.setState({roomId:event.nativeEvent.text})
                // }}
                ></TextInput>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <TextInput
                        placeholder="请输入内容"
                        returnKeyLabel="发送"
                        onEndEditing={( event)=>{
                            this.send(event.nativeEvent.text)
                            // console.log(event)
                        }}

                   ></TextInput>
                </View> 
            </View>
        )
    }
}


export default createStackNavigator({
    Chat:{
        screen:ChatScreen
    }
},
{
    initialRouteName: 'Chat',
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
})






