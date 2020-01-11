import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import SearchInput from '../components/SearchInput'
import { Carousel } from '@ant-design/react-native';
import { relativeWidth, width } from '../constants/Layout'

import { getSwiperList, getCateList, getFloorList, } from '../http'

export default class HomeScreen extends React.Component {
  state = {
    swiperList: [],
    cateList: [],
    floorList: []
  }
  constructor() {
    super()

    getSwiperList().then(res => {
      this.setState({
        swiperList: res.data.message || []
      })
    }).catch(err => console.error(err))

    getCateList().then(res => {
      this.setState({
        cateList: res.data.message || []
      })
    }).catch(err => console.error(err))

    getFloorList().then(res => {
      this.setState({
        floorList: res.data.message || []
      })
    }).catch(err => console.error(err))
  }

  render() {
    return (
      <ScrollView style={styles.Home}>
        {/* 搜索 */}
        <SearchInput props={this.props} name="123"></SearchInput>
        {/* 轮播图 */}
        <Carousel
          autoplay
          autoplayInterval={3000}
          infinite
          afterChange={this.onHorizontalSelectedIndexChange}
          dotStyle={{
            backgroundColor: '#ccc'
          }}
          dotActiveStyle={{
            backgroundColor: 'red'
          }}
        >
          {
            this.state.swiperList.map(v =>
              <View style={styles.swiper} key={v.goods_id} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('GoodsDetail', { id: v.goods_id })}>
                  <Image
                    style={{ width: width, height: '100%' }}
                    source={{ uri: v.image_src }} />
                </TouchableOpacity>
              </View>)
          }
        </Carousel>
        {/* 分类 */}
        <View style={{ display: 'flex', flexDirection: 'row', width, height: 100 * width / 375 }}>
          {
            this.state.cateList.map(v => <TouchableOpacity
              onPress={() => this.props.navigation.navigate(v.navigator_url.indexOf('category') !== -1 ? 'Category' : '', { query: v.name })}
              key={v.name} style={{ flex: 1, padding: relativeWidth(20) }}
            >
              <View style={{ flex: 1 }}>
                <Image
                  style={{ flex: 1 }}
                  source={{ uri: v.image_src }}
                />
              </View>
            </TouchableOpacity>)
          }
        </View>
        {/* floor */}
        <View style={{ flex: 1 }}>
          {
            // 250 / 375  = x / w
            this.state.floorList.map((v1, index) =>
              <View key={v1.floor_title.name} style={{ width, height: 250 * width / 375, display: 'flex', flexDirection: 'column' }}>
                <Image
                  resizeMode="contain"
                  style={{ width, height: 30 * width / 375 }}
                  source={{ uri: v1.floor_title.image_src }}
                />
                <View style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
                  <View style={{ flex: 1 }}>
                    {
                      v1.product_list.map((v2, i) =>
                        i === 0 ? <TouchableOpacity
                          key={v2.name + i}
                          onPress={() => this.props.navigation.navigate('GoodsListScreen', { query: v2.name })}
                          style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <Image
                            resizeMode="contain"
                            style={{ width: width / 3, height: 210 * width / 375 }}
                            source={{ uri: v2.image_src }}
                          />
                        </TouchableOpacity>
                          : <></>
                      )
                    }
                  </View>
                  <View style={{ flex: 2, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                      v1.product_list.map((v2, i) =>
                        i === 0 ? <></>
                          : <TouchableOpacity
                            key={v2.name + i}
                            onPress={() => this.props.navigation.navigate('GoodsListScreen', { query: v2.name })}
                            style={{ alignSelf: 'center', width: '50%', height: '50%', backgroundColor: '#fff', display: 'flex', justifyContent: 'center' }}>
                            <Image
                              resizeMode="stretch"
                              style={{ width: width / 3, height: 100 * width / 375, marginLeft: 5, alignSelf: 'center' }}
                              source={{ uri: v2.image_src }}
                            />
                          </TouchableOpacity>
                      )
                    }
                  </View>
                </View>
              </View>)
          }
        </View>
      </ScrollView >
    )
  }
}

const styles = StyleSheet.create({
  Home: {
    flex: 1,
  },
  swiper: {
    width: relativeWidth(750),
    height: relativeWidth(340),
    backgroundColor: '#dedede'
  }
})



