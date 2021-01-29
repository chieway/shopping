import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Setting({navigation}) {

  const logOut = () => {
    navigation.replace('Login')
  }

  return (
    <SafeAreaView style={Styles.container}>
      <TouchableOpacity onPress={logOut}>
        <Text>退出登录</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
