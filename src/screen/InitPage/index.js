import React,{useEffect} from 'react'
import { View, Text } from 'react-native'

export default function InitPage({ navigation }) {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('Login')
  //   }, 3000)
  // }, [navigation])
  return (
    <View>
      <Text onPress={() => navigation.navigate('Login')}>InitPage</Text>
      <Text onPress={() => navigation.navigate('Home')}>TO Home</Text>
    </View>
  )
}

