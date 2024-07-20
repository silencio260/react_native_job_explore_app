import React, { Component } from 'react'
import MapView from 'react-native-maps';
import {connect} from 'react-redux'
import {Button} from 'react-native-elements'
import { StyleSheet, Text, View, Dimensions, 
    ActivityIndicator } from 'react-native';

import * as actions from '../actions'

class MapScreen extends Component {
    state = {
        mapLoaded: false,
        region: {
            longitude: -122,
            latitude: 37,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09
        }
    }

    componentDidMount() {
        this.setState({ mapLoaded: true })
    }

    onRegionChangeComplete = (region) => {
        this.setState({region})
    }

    onButtonPress = () => {
        this.props.fetchJobs(this.state.region)
    }

    render() {
        if(!this.state.mapLoaded) {
            return (
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator  size='large' />
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <MapView
                    style={styles.mapStyle} 
                    region={this.state.region}
                />
                <View style={styles.buttonContainter}>
                    <Button 
                        large
                        tittle='Search This Area'
                        backgroundColor='#009688'
                        icon={{name: 'search'}}
                        onPress={this.onButtonPress}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    buttonContainter: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0
    }
  });

export default connect(null, actions)(MapScreen)