import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Button} from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'

import store from './store'
import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import MapScreen from './screens/MapScreen'
import DeckScreen from './screens/DeckScreen'
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

export default class App extends Component {
  render() {
    const Tab = createBottomTabNavigator();

    const ReviewStack = createStackNavigator();
    
    function ReviewStackScreen({navigation}) {
      return (
        <ReviewStack.Navigator>
          <ReviewStack.Screen name="review" 
               options={{
                title: 'Review Jobs',
                headerRight: () => 
                  <Button 
                    title='Setting'
                    onPress={() => navigation.navigate('settings')}
                    backgroundColor="rgba(0,0,0,0)"
                    color="rgba(0, 122, 255, 1)"   
                  />
              }}
      
          component={ReviewScreen} />
          <ReviewStack.Screen name="settings" component={SettingsScreen} />
        </ReviewStack.Navigator>
      );
    }

    const MainTab = createBottomTabNavigator();
    function MainTabScreen() {
      return (
          <MainTab.Navigator>
            <MainTab.Screen name="map" component={MapScreen} />
            <MainTab.Screen name="deck" component={DeckScreen} />
            <Tab.Screen name="review" component={ReviewStackScreen} />
          </MainTab.Navigator>

      );
    }

    return (
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="welcome" component={WelcomeScreen} />
            <Tab.Screen name="auth" component={AuthScreen} />
            <Tab.Screen name="main" component={MainTabScreen} />
          </Tab.Navigator>
        </NavigationContainer>  
      </Provider>
    )
  }
}


const styles = StyleSheet.create({
  main:{
    flex: 1,
    width: 100,
    height: 500,
    overflow: 'visible',
    position: 'relative'
  },
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
