import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class SearchScreen extends Component {
    render() {
        return (
            <View>
                <Text> SearchScreen </Text>
            </View>
        )
    }
}

SearchScreen.path = 'Search'
SearchScreen.navigationOptions = {
    headerRight: () => <View />
}