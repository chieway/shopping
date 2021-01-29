import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  // SafeAreaView
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Store from './src/store'
import {Provider} from 'react-redux'
import Router from './src/router'

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Provider store={Store}>
        <Router />
      </Provider>
    </SafeAreaProvider>

    // <SafeAreaView style={styles.container}>
    //   <Provider store={Store}>
    //     <Router />
    //   </Provider>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
