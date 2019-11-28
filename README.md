# expo-cli
 


# 完成目标

* 消息页
  * headerTitle 
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
      console.error(responseJson);
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