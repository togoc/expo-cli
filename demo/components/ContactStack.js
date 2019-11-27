import React, { Component } from 'react'
import {
     Text,View,
     Dimensions,Button,Image,StyleSheet,StatusBar,SectionList,
     TouchableHighlight,TouchableOpacity,TextInput,
     Vibration,DeviceEventEmitter,FlatList,BackHandler,Alert
     ,TouchableNativeFeedback
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

class ContactScreen extends React.Component {
    state={
        barStyle:'default',
        refreshing:false
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
                 style={{display:'flex',justifyContent:'center',alignItems:'center',flex:4,marginRight:70}}
                >
                    <Text>联系人</Text>
                </View>
                <TouchableHighlight
                style={{flex:1}}
                onPress={()=>{
                    alert("加好友")
                }}>
                <MaterialIcons name="add" size={28}/>
                
                </TouchableHighlight>
            </View>
        </View>
      }
    }
    _onRefresh = () => {
        this.setState({refreshing: true});
      //   fetchData().then(() => {
      //     this.setState({refreshing: false});
      //   });
      setTimeout(()=>{
          this.setState({refreshing: false});
          alert('刷新了')
      },1000)
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
    }
    render() {
        return (
        <View style={{ flex: 1,backgroundColor:'#F5F6FA'}}>
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
                        this.props.navigation.navigate('Search',{lastRoute:'Contact'});
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
            <View style={{paddingBottom:height/10}}> 
                <SectionList
                ref='sectionList'
                // 用来渲染每一个section中的每一个列表项的默认渲染器。
                // 可以在section级别上进行覆盖重写。必须返回一个react组件。
                renderItem={({ item, index, section }) => (
                    <TouchableNativeFeedback
                    onPress={()=>{
                       alert("你点击的是 "+item)
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
                                                {item}
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
                )}
                // 在每个section的头部渲染。
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{ fontWeight: "bold" ,backgroundColor:'#fff',paddingLeft:15}}>{title}</Text>
                )}
                // 用来渲染的数据,类似于FlatList中的data属性。
                sections={[
                    { title: "Title1", data: ["item1", "item2"] },
                    { title: "Title2", data: ["item3", "item4"] },
                    { title: "Title3", data: ["item5", "item6"] },
                    { title: "Title4", data: ["item7", "item8"] },
                    { title: "Title5", data: ["item9", "item0"] },
                    { title: "Title6", data: ["item11", "item12"] },
                    { title: "Title7", data: ["item13", "item14"] },
                    { title: "Title8", data: ["item15", "item16"] },
                    { title: "Title9", data: ["item17", "item18"] },
                    { title: "Title0", data: ["item19", "item20"] }
                ]}
                // 指定一开始渲染的元素数量,最好刚刚够填满一个屏幕,这样保证了用最短的时间给用户呈现可见的内容(包含title和item个数)。
                initialNumToRender={15}

                // 此函数用于为给定的item生成一个不重复的key。
                keyExtractor={(item, index) => item + index}

                // 当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用onEndReached。
                onEndReachedThreshold ={.5}
                onEndReached={()=>{
                    // alert('1')
                }}

                // 行与行之间的分隔线组件。不会出现在第一行之前和最后一行之后。
                // ItemSeparatorComponent={()=><Text style={{color:'#c00'}}>行与行分隔组件</Text>}

                // 头部组件。
                // ListHeaderComponent={()=><Text>头部组件</Text>}
                // 尾部组件。
                // ListFooterComponent={()=><Text>尾部组件</Text>}
                // 每个组的尾部组件。
                // renderSectionFooter={()=><Text style={{color:'#cc0'}}>每个section的尾部组件</Text>}
                // 在每个section的顶部和底部渲染(区别于ItemSeparatorComponent,它仅在列表项之间渲染)。
                // SectionSeparatorComponent={()=><Text style={{color:'#c00'}}>-----</Text>}

                // 当列表数据为空时渲染的组件。
                ListEmptyComponent={()=><Text>数据为空时渲染组件</Text>}

                // 如果设置了此选项,则会在列表头部添加一个标准的RefreshControl控件,以便实现“下拉刷新”的功能。
                //下拉刷新的执行的内容
                onRefresh={()=>this._onRefresh()}

                // 在等待加载新数据时将此属性设为true,列表就会显示出一个正在加载的符号。
                refreshing={this.state.refreshing}

                // 如果你想把刷新控件往下移动一些
                // progressViewOffset={0}
                
                // 当下一个section把它的前一个section的可视区推离屏幕的时候,让这个section的header粘连在屏幕的顶端。
                stickySectionHeadersEnabled

                // 是一个可选的优化，用于避免动态测量内容尺寸的开销，不过前提是你可以提前知道内容的高度。
                // 注意如果你指定了ItemSeparatorComponent,请把分隔线的尺寸也考虑到 offset 的计算之中。
                //如果用到跳转方法 请加入这个关于每一项的高度
                // getItemLayout={(data, index) => (
                //         {length: data.length, offset: 125 * index, index}
                //       )}
                />
            </View> 
        </View>
        );
  }
}

//   <Button
//             title="Go"
//             onPress={() => {
//                 this.props.navigation.navigate('Details');
//             }}
//             />


const ContactStack = createStackNavigator({
    Contact: ContactScreen,
  },{
    initialRouteName: 'Contact',
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
  
  export default ContactStack


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