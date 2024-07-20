import React, { Component } from 'react'
import {View, Text, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import * as actions from '../actions/auth_actions'

class AuthScreen extends Component {
    componentDidMount(){
        // this.props.facebookLogin()
    }

    componentWillReceiveProps(nextProps){
        this.onAuthComplete(nextProps)
        this.onAuthComplete(this.props)
    }

    onAuthComplete(props){
        if(props.token){
            this.props.navigation.navigate('map')
        }
    }

    render() {
        return (
            <View>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
            </View>
        )
    }
}

function mapStateToProps({auth}){
    return {token: auth.token}
}

export default connect(null, actions)(AuthScreen)