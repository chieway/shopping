import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function HtmlScreen({ navigation }) {
  return (
    <View style={Styles.container}>
      <TouchableOpacity>
        <Text>JS</Text>
      </TouchableOpacity>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
