import React, { Component } from 'react'
import {View, Text, Animated} from 'react-native'

export default class Ball extends Component {
    UNSAFE_componentWillMount(){
        this.position = new Animated.ValueXY(0,0)
        Animated.spring(this.position, {
            toValue: {x: 200, y: 500}
        }).start()
    }


    render() {
        return (
            <Animated.View style={this.position.getLayout()}>
                <View style={styles.ball}/>
                <Text>some moving text</Text>
            </Animated.View>
     
        )
    }
}

const styles = {
    ball:{
        height: 60,
        width: 60,
        borderRadius: 30, 
        borderWidth: 30, 
        borderColor: 'black'
    }
}
