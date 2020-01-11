import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class GoodsDetailScreen extends Component {
    render() {
        let { id } = this.props.navigation.state.params
        console.log(id)
        return (
            <View>
                <Text> GoodsDetailScreen </Text>
            </View>
        )
    }
}
GoodsDetailScreen.path = 'GoodsDetail'