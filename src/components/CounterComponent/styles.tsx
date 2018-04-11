import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	touchable: {
	  alignItems: 'center',
	  backgroundColor: '#DDDDDD',
	  borderRadius: 10,
	  paddingBottom: 10,
	  paddingLeft: 30,
	  paddingRight: 30,
	  paddingTop: 10,
	},
  
	container: {
	  alignItems: 'center',
	  backgroundColor: '#72ba3a',
	  flex: 1,
	  flexDirection: 'row',
	  justifyContent: 'space-around',
	},
  
	text: {
	  fontSize: 40,
	  fontWeight: 'bold',
	},
  
	touchableText: {
	  fontSize: 30,
	},
  });
  
export default styles;
