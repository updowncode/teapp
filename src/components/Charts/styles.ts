import { StyleSheet } from "react-native";
import { Platform } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex:1,
    },
  
    titleView:{
      height:Platform.OS=='ios'?64:44,
      paddingTop:Platform.OS=='ios'?14:0,
      backgroundColor:'#ff6400',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title:{
      color:'white',
      fontSize:20,
      textAlign:'center',
    },
  });
  export default styles;
