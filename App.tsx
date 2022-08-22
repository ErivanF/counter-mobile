/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {AppRegistry, SafeAreaView, StyleSheet} from 'react-native';

import Counter from './Counter/Counter';

AppRegistry.registerComponent('main', () => App);
const App = () => {
  const appStyle = StyleSheet.create({
    screen: {
      backgroundColor: '#909',
      height: '100%',
      justifyContent: 'center',
    },
  });
  return (
    <SafeAreaView style={appStyle.screen}>
      <Counter />
    </SafeAreaView>
  );
};

export default App;
