# teapp

TS REDUX

react-native-echarts 安卓版打包后，图表不显示
https://blog.csdn.net/wangyingming/article/details/78750879
复制文件tpl.html（路径： node_modules\native-echarts\src\components\Echarts）至android\app\src\main\assets目录下

source={require('./tpl.html')}
1
修改为

source={Platform.OS==='ios' ? require('./tpl.html'):{uri:'file:///android_asset/tpl.html'}}
1
另外，记得将

import { WebView, View, StyleSheet } from 'react-native';
1
修改为

import { WebView, View, StyleSheet, Platform } from 'react-native';