import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class DetailScreen extends Component {
    // static navigationOptions = (navigate) => {
    //     return {
    //         headerRight: () => <View />
    //     }
    // }
    componentDidMount() {
    }
    render() {
        return (
            <View>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}

DetailScreen.path = 'Detail'
DetailScreen.navigationOptions = {
    headerRight: () => <View />
}