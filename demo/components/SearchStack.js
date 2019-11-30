import React, { Component } from 'react'
import {
     Text,View,
     Dimensions,StyleSheet,StatusBar,
     TouchableOpacity,TextInput,
    } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
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


class SearchScreen extends Component {
    state={
        oninput:false,
    }
    componentDidMount(){
        this.props.navigation.addListener('willFocus',()=>{
            setTimeout(() => {
                this.refs.oninput.focus()
            }, 100);
        })
    }
    render() {
        const {navigation} =this.props
        return (
            <View style={{flex:1}}>
                <View style={[styles.pdLeft,styles.center,{height:height/10,width,backgroundColor:'gray',paddingBottom:10,paddingTop:10,flexDirection:'row'}]}>
                    <View
                        style={[{flex:1,borderRadius:20,backgroundColor:'#F5F6FA',height:height/14,flexDirection:'row'},styles.center]}
                        onPress={()=>{
                            // navigate('SearchDrawer');
                        }}
                    >
                        <View style={{flex:0,marginLeft:5}}>
                            <Feather name="search" size={22} color="gray" />
                        </View>
                        <TextInput
                        ref="oninput"
                        autoFocus
                        returnKeyLabel="搜索"
                        placeholder="搜索"
                        clearTextOnFocus={true}
                        keyboardShouldPersistTaps="always"
                        // 当文本框失去焦点的时候调用此回调函数。
                        onBlur={()=>{
                            this.setState({oninput:false})
                        }}

                        // 当文本输入结束后调用此回调函数。
                        // onEndEditing

                        // 当文本框获得焦点的时候调用此回调函数。回调参数为{ nativeEvent: { target } }。
                        onFocus={(e)=>{
                            this.setState({oninput:true})
                        }}
                        style={{color:'#B4B6C2',marginLeft:3,flex:this.state.oninput?1:0}}
                        >
                        </TextInput>
                        <TouchableOpacity
                            onPress={()=>{
                                this.refs.oninput.clear();
                            }}
                            style={{padding:10,display:this.state.oninput?'flex':'none',justifyContent:'center',alignItems:'center'}}
                        >
                            <MaterialIcons name="cancel" size={22} color="gray" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                    onPress={()=>{
                         this.props.navigation.navigate(navigation.getParam('lastRoute',null))
                    }}
                    >
                        <Text style={{marginLeft:5,fontSize:18}}>取消</Text>
                </TouchableOpacity>
                </View>
                <View>
                    <Text>
                        {JSON.stringify(navigation.getParam('lastRoute',null))}
                    </Text>
                </View>
            </View>
        )
    }
}
const SearchStack = createStackNavigator({
    Search: SearchScreen,
  },{
      initialRouteName: 'Search',
      defaultNavigationOptions:{
          headerStyle: {
              backgroundColor: '#11D6BB',
              height:0,
              paddingTop:statusBarHeight
          },
          headerTintColor: '#E3FAF8',
          headerTitleStyle: {
              fontWeight: 'bold',
          },
      },
  });


  export default SearchStack