/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Main from './Pages/Main';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" hidden />
      <Main />
    </NavigationContainer>
  );
}
