import React,{useState,useEffect} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  Alert
} from 'react-native'

const url = 'https://api.github.com/search/repositories?q=javascript&sort=stars&page='
let pageNo = 1
let totalPage = 5
let itemNo = 0

export default function HtmlScreen({ navigation }) {
  const [loading,setLoading] = useState(true)
  const [data,setData] = useState([])
  const [showFoot,setShowFoot] = useState(0) // 0 隐藏、1 加载完成，没有更多数据、2 显示加载中
  const [isRefreshing, setRefreshing] = useState(false)

  useEffect(() => {
    fetchData(1)
  },[])

  const fetchData = (pageNo) => {
    fetch(url + pageNo).then((response) => {
      return response.json()
    }).then(res => {
      console.log('res', res)
      const data = res.items
      let i = itemNo
      let dataBlob = []

      data.map((item) => {
        dataBlob.push({ key: i, value: item })
      })
      itemNo++
      let foot = 0
      if (pageNo >= totalPage) {
        foot = 1
      }
      setLoading(false)
      setShowFoot(foot)
      setRefreshing(false)
      setData(data)
      data = null
      dataBlob = null
    })
  }

  const renderItem = ({item}) => {
    // console.log('item',item)
    return (
      <View style={Styles.itemBox}>
        <View style={Styles.leftArea}>
          <Image
            style={Styles.avatar}
            source={{ uri: item.owner.avatar_url }}
          />
        </View>
        <View style={Styles.rightArea}>
          <Text style={Styles.title}>{item.name}</Text>
          <Text style={Styles.desc}>{item.description}</Text>
        </View>
      </View>
    )
  }

  const footerComponent = () => {
    if(showFoot === 1) {
      return (
        <View
          style={{
            height: 30,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Text
            style={{
              color: '#999999',
              fontSize: 14,
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            没有更多数据了
          </Text>
        </View>
      )
    }else if(showFoot === 2) {
      return (
        <View style={Styles.footer}>
          <ActivityIndicator />
          <Text>正在加载...</Text>
        </View>
      )
    }else if(showFoot === 0) {
      return (
        <View style={Styles.footer}>
          <Text></Text>
        </View>
      )
    }
  }

  const onEndReached = () => {
    if(showFoot !== 0) {
      return
    }
    if(pageNo !== 1 && pageNo >= totalPage) {
      return
    }else {
      pageNo ++
    }
    setShowFoot(2)
    fetchData(pageNo)
  }

  const separator = () => {
    return <View style={{height: 1,backgroundColor: '#999'}} />
  }

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      Alert.alert('刷新成功')
      setRefreshing(false)
    },2000)
  }

  return (
    <View style={Styles.container}>
      {loading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListFooterComponent={footerComponent}
          onEndReached={onEndReached}
          onEndReachedThreshold={1}
          ItemSeparatorComponent={separator}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          }
        />
      )}
      {/* <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={footerComponent}
        onEndReached={onEndReached}
        onEndReachedThreshold={1}
        ItemSeparatorComponent={separator}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      /> */}
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  itemBox: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 6,
    paddingRight: 6,
  },
  leftArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
  },
  rightArea: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    color: 'blue',
  },
  desc: {
    fontSize: 15,
    color: 'black',
  },
})
