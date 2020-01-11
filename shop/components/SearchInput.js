import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'

import TabBarIcon from '../components/TabBarIcon';
import { relativeWidth } from '../constants/Layout'
import Colors from '../constants/Colors'

export default class SearchInput extends Component {
    render() {
        const { props } = this.props
        return (
            <View style={Style.SearchInput} >
                <TouchableHighlight style={Style.Outer} onPress={
                    () => props.navigation.navigate('Search')
                }>
                    <Text style={Style.Input} > <TabBarIcon size={15} name="md-search"></TabBarIcon>搜索 </Text>
                </TouchableHighlight>
            </View>
        )
    }
}


const Style = StyleSheet.create({
    SearchInput: {
        padding: relativeWidth(10),
        height: relativeWidth(100),
        backgroundColor: Colors.themeColor,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: relativeWidth(30),
        paddingRight: relativeWidth(30),
    },
    Outer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: relativeWidth(30),
        padding: relativeWidth(10),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Input: {
        textAlignVertical: "bottom",
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        letterSpacing: 1
    }
})
