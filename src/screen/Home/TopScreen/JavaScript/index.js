import React,{useState} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  RefreshControl,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'

export default function JSScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false)

  const data = [
    {
      id: '1',
      title: '学习js',
      content: '学习学习=====',
      date: '2021-01-28',
      img: require('../../../../../assets/favicon.png'),
    },
    {
      id: '2',
      title: '学习前端',
      content: '学习学习=====',
      date: '2021-01-20',
      img: require('../../../../../assets/favicon.png'),
    },
    {
      id: '3',
      title: '学习前端',
      content: '学习学习=====',
      date: '2021-01-20',
      img: require('../../../../../assets/favicon.png'),
    },
    {
      id: '4',
      title: '学习前端',
      content: '学习学习=====',
      date: '2021-01-20',
      img: require('../../../../../assets/favicon.png'),
    },
    {
      id: '5',
      title: '学习前端',
      content: '学习学习=====',
      date: '2021-01-20',
      img: require('../../../../../assets/favicon.png'),
    },
    {
      id: '6',
      title: '学习前端',
      content: '学习学习=====',
      date: '2021-01-20',
      img: require('../../../../../assets/favicon.png'),
    },
  ]
  const renderItem = ({item}) => {
    console.log('===',item)
    return (
      <View style={Styles.item}>
        <View>
          <Text style={Styles.title}>{item.title}</Text>
          <Text style={Styles.subTitle}>{item.content}</Text>
          <Text style={Styles.date}>{item.date}</Text>
        </View>
        <Image source={item.img} />
      </View>
    )
  }
  const handleRefresh = () => {
    console.log('刷新')
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    },3000)
  }

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        ItemSeparatorComponent={
          Platform.OS !== 'android' &&
          (({ highlighted }) => (
            <View
              style={[Styles.separator, highlighted && { marginLeft: 0 }]}
            />
          ))
        }
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // refreshing={refreshing}
        // onRefresh={handleRefresh}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    minHeight: 80,
    padding: 10,
    // marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
  },
  subTitle: {
    fontSize: 16,
  },
  date: {
    fontSize: 16,
  },
  separator: {}
})
