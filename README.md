# teapp

TS REDUX

react-native-echarts 安卓版打包后，图表不显示
原创 2017年12月08日 13:53:34 55
1、兼容手机端

<meta name="viewport" content="width=device-width, initial-scale=1">
1
2、解决android打包后不显示(index.js)

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