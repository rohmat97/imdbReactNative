/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class LoginLat extends Component {
  shouldComponentUpdate() {}

  render() {
    return (
      <SafeAreaView style={{ flex: 1, paddingTop: 56 }}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'yellow',
              alignContent: 'center',
              justifyContent: 'center',
            }}
          >
            <Text>Username</Text>
          </View>
          <View style={{ flex: 2 }}>
            <TextInput style={{ borderColor: 'black', borderWidth: 1 }} />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
        <View
            style={{
              flex: 1,
              backgroundColor: 'blue',
              alignContent: 'center',
              justifyContent: 'center',
            }}
          >
            <Text>Passwor</Text>
          </View>
          <View style={{ flex: 2 }}>
            <TextInput />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
