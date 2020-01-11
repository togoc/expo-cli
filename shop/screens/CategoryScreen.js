
import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity, Image
} from 'react-native'

import { relativeWidth, width } from '../constants/Layout'
import { getCategoriesList } from '../http'

export default class CategoryScreen extends Component {
  state = {
    cates: [],
    leftMenuList: [],
    rightContent: [],
    currentIndex: 0
  }
  constructor() {
    super()

    getCategoriesList().then(res => {
      let cates = res.data.message || []
      let rightContent = cates[0].children || []
      let leftMenuList = cates.map(v => v.cat_name)
      this.setState({
        cates,
        leftMenuList,
        rightContent
      })
    })

  }
  handleLeftItem = (index) => {
    let rightContent = this.state.cates[index].children || []
    this.setState({
      currentIndex: index,
      rightContent
    })
  }
  render() {
    return (
      <View style={{ display: 'flex', flexDirection: 'row', flex: 1, width }}>
        <ScrollView style={{ width: width / 3 }}>
          {
            this.state.leftMenuList.map((item, index) =>
              <TouchableOpacity key={item} style={{}}
                onPress={() => this.handleLeftItem(index)}
              >
                <Text style={{ textAlign: 'center', paddingTop: 5, paddingBottom: 5, color: this.state.currentIndex === index ? 'red' : 'black' }}>{item}</Text>
              </TouchableOpacity>
            )
          }
        </ScrollView>
        <ScrollView style={{ width: 2 * width / 3, display: 'flex' }}>
          {
            this.state.rightContent.map((item, index) =>
              <View key={item.cat_id} style={{ display: 'flex' }}>
                <Text style={{ textAlign: 'center' }}>/{item.cat_name}/</Text>
                <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                  {
                    item.children ? item.children.map(v =>
                      <TouchableOpacity
                        style={{
                          display: 'flex', flexDirection: 'column', width: (width / 5), height: (width / 3), margin: 1,
                          justifyContent: 'center', alignItems: 'center'
                        }}>
                        <Image
                          resizeMode="contain"
                          style={{ width: '80%', height: '80%', textAlign: 'center' }}
                          source={{ uri: v.cat_icon }} />
                        <Text style={{ textAlign: 'center' }}>{v.cat_name}</Text>
                      </TouchableOpacity>) : <></>
                  }
                </View>
              </View>
            )
          }
        </ScrollView>
      </View>
    )
  }
}



CategoryScreen.path = 'Category'