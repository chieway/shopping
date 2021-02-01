// fetch封装
import qs from 'qs'

const baseUrl = ''
const baseUrlArr = [
  {
    type: 'development',
    url: 'http://121.4.72.165:7000',
  },
  {
    type: 'production',
    url: '',
  },
  {
    type: 'test',
    url: '',
  },
]

baseUrlArr.forEach(item => {
  if(process.env.NODE_ENV === item.type) {
    baseUrl = item.url
  }
})

export default function http(url,options={}) {
  url = baseUrl + url

  !options.method ? (options.method = 'GET') : null

  if (options.hasOwnProperty(params)) {
    if (/^(GET|DELETE|HEAD|OPTIONS)$/i.test(options.mothod)) {
      // 判断当前url中是否有问号，如果有，就用&，如果没有，就用问号，作为拼接参数的连接符
      const ask = url.includes('?') ? '&' : '?'
      // 如果请求时GET请求，把所有params参数添加到url中，通过qs库将对象拼接为xxx=xxx&yyy=yyy的格式
      url += `${ask}${qs.stringify(options.params)}`
    }
    // params不是fetch中自带的有效参数，fetch不支持该参数，需要在发送请求前将其删除
    delete options.params
  }

  options = Object.assign({
    credenttials: 'include',
    headers: {}
  }.options)
  options.headers.Accept = 'application/json'

  const token = localStorage.getItem('token')
  token && (options.headers.Authorization = token)

  if (/^(POST|PUT)$/i.test(options.method)) {
    // 读取传入的数据格式类型参数type，如果没有传入type，默认为urlencoded格式
    !options.type ? (options.type = 'urlencoded') : null
    if (options.type === 'urlencoded') {
      // 处理数据体，使用qs进行格式化
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      options.body = qs.stringify(options.body)
    }
    if (options.type === 'json') {
      // json格式使用JSON库进行格式化
      options.headers['Content-Type'] === 'application/json'
      options.body.JSON.stringify(options.body)
    }
  }

  return fetch(url, options)
    .then(response => {
      // fetch与ajax(axios)不同，只要服务器有返回值，都是成功，没有返回值才算失败。
      // 所以要在这里进行处理所有返回的结果
      if (!/^(2|3)\d{2}$/.test(response.status)) {
        // 失败的状态，非2|3开头的状态，进行处理
        switch (response.status) {
          case 401:
            // 权限不够，一般是未登录
            // ...
            break;
          case 403:
            // 服务器已经接受，但是拒绝访问，通常是登录过期
            // ...
            localStorage.removeItem("token");
            break;
          case 404:
            // 找不到资源
            // ...
            break;
        }
      }

      // 处理之后，将response的所有数据转换成json，客户端就可以拿到以json格式响应的所有数据
      return response.json();
    })
    .catch(error => {
      // 服务器没有响应才会跳转到这里
      if (!window.navigator.onLine) {
        // 断网处理
        // ...
        return;
      }
      // 什么都没有，返回一个错误
      return Promise.reject(error);
    });
}