# expo-cli
 
## 环境搭建
1. 安装expo `npm install -g expo-cli`
2. 配置 `expo init <appName>`
   1. 安装的时候会下载(https://github.com/expo/react-native/archive/sdk-36.0.0.tar.gz), 会比较慢甚至卡死.
   2. 解决办法: 先手动下载, 然后修改 *package.json* 里 react-native 的路径为下载包的路径, 最后 npm install or yarn install.


# 完成目标

* 消息页
  * headerTitle https://github.com/expo/react-native/archive/sdk-36.0.0.tar.gz
  * search
* Drawer信息页
* 联系人
  * headerTitle 
  * search
* 动态
  * headerTitle 
  * search



# 图标
`yarn add @expo/vector-icons`

   * 图标查询地址 : [https://expo.github.io/vector-icons/](https://expo.github.io/vector-icons/)
   * 使用 : (注意替换名字和来源)
        ``` js
            import React from 'react';
            import { Ionicons } from '@expo/vector-icons';

            export default class IconExample extends React.Component {
            render() {
                return <Ionicons name="md-checkmark-circle" size={32} color="green" />;
            }
            }
        ```

   * 自定义阿里矢量的方法的方法(搜索相关资料)
   * https://github.com/expo/vector-icons
   * https://github.com/oblador/react-native-vector-icons


# App Ajax

[https://reactnative.cn/docs/network/](https://reactnative.cn/docs/network/)

[https://developer.mozilla.org/zh-CN/docs/Web/API/Request](https://developer.mozilla.org/zh-CN/docs/Web/API/Request)

``` js
fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
```

``` js
fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  }),
});
```

``` js
fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: 'key1=value1&key2=value2',
});
```