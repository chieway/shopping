import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import BottomTabBar from '../components/BottomTabBar'

import InitPage from '../screen/InitPage'
import Login from '../screen/Login'
import Register from '../screen/Register'

import Home from '../screen/Home'
import Cate from '../screen/Cate'
import Setting from '../screen/Setting'

const Stack = createStackNavigator()
// const Tab = createBottomTabNavigator()
const Tab = createMaterialBottomTabNavigator()

function BottomPage() {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabBar {...props} />}
      activeColor='#fff'
      barStyle={{ backgroundColor: '#3285f7', height: 60 }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='home' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Cate'
        component={Cate}
        options={{
          tabBarLabel: '分类',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='ballot' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Setting'
        component={Setting}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='account' color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='InitPage' component={InitPage} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen
            name='Login'
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            headerMode='none'
            name='BottomPage'
            component={BottomPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
