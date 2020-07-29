/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';

import Geolocation from '@react-native-community/geolocation';

Geolocation.getCurrentPosition((info) => console.log(info));

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Teste</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
