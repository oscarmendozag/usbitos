/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import firebase from 'react-native-firebase';

export default class App extends Component {

  componentDidMount() {
    this.removeNotificationListener = firebase.notifications().onNotification((notification)=> {
      // Process your notification as required
      alert(notification.body)
  });
}

  
    componentWillUnmount(){
        this.removeNotificationListener();
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Button  onPress={() => {
        firebase.messaging().subscribeToTopic('NOGALES');
      }} title="buttonSubscribe"></Button>
      <Button title='Permission' onPress={() => {
        try {
          firebase.messaging().requestPermission();
          // User has authorised
      } catch (error) {
          // User has rejected permissions
          alert(error);
      }

      }}> </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
