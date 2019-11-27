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


