import React from 'react'
import {StyleSheet} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { SafeAreaView } from 'react-native-safe-area-context'

import JSScreen from '../TopScreen/JavaScript'
import HtmlScreen from '../TopScreen/Html'
import PhpScreen from '../TopScreen/PHP'

const Tab = createMaterialTopTabNavigator()

export default function TopScreen() {
  return (
    <SafeAreaView style={Styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#3285f7',
          labelStyle: { fontSize: 16 },
          style: { backgroundColor: 'powderblue' },
        }}
      >
        <Tab.Screen name='JavaScript' component={JSScreen} />
        <Tab.Screen name='HTML' component={HtmlScreen} />
        <Tab.Screen name='PHP' component={PhpScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1
  }
})