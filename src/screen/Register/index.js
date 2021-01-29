
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Register({ navigation }) {
  const toLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={toLogin}>
        <Text>去登录</Text>
      </TouchableOpacity>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})