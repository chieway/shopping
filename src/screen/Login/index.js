import React,{useState} from 'react'
import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  Platform,
} from 'react-native'

export default function Login({navigation}) {
  const [username,setUserName] = useState('admin')
  const [password, setPassword] = useState('admin')
  
  const handleLogin = () => {
    if(username === 'admin' && password === 'admin') {
      navigation.replace('BottomPage')
    }else {
      Alert.alert()
    }
  }

  const toReg = () => {
    navigation.navigate('Register')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={Styles.container}
    >
      <View>
        <Text style={Styles.title}>App</Text>
        <Text style={Styles.subTitle}>a Simple React Native Demo For Expo</Text>
      </View>

      <View>
        <TextInput
          style={Styles.input}
          placeholder='用户名'
          // defaultValue={username}
          value={username}
          clearButtonMode='always'
          onChangeText={(e) => setUserName(e)}
        />
        <TextInput
          style={Styles.input}
          placeholder='密码'
          // defaultValue={password}
          value={password}
          clearButtonMode='always'
          onChangeText={(e) => setPassword(e)}
        />
        <TouchableOpacity onPress={handleLogin} style={Styles.loginBtn}>
          <Text style={Styles.loginText}>登录</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toReg}>
          <Text style={Styles.regText}>没有账号？去注册</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-around',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#3285f7',
    textAlign: 'center',
    paddingVertical: 20,
  },
  subTitle: {
    fontSize: 22,
    color: '#3285f7',
    textAlign: 'center',
  },
  input: {
    height: 40,
    marginVertical: 16,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#ccc',
  },
  loginBtn: {
    height: 60,
    borderRadius: 10,
    backgroundColor: '#3285f7',
    color: '#fff',
  },
  loginText: {
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
    lineHeight: 60,
  },
  regText: {
    color: '#3285f7',
    textAlign: 'right',
    marginVertical: 20
  },
})
