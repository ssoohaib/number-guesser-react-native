import { StyleSheet, Pressable, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import colorPallete from '../assets/ColorPallete';

export default function CustomButton(props) {
  return (
    <View style={styles.btnContainer}>
      <Pressable onPress={props.onPress}>
      
          {
            props.icon ? 
            <Ionicons style={styles.iconBtn} name={props.icon} size={24} color="white" />
            :
            <Text style={styles.btnText}>{props.title}</Text>
          }
          
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer:{
    backgroundColor: colorPallete.two,
    borderRadius:16,
    // width:130,
    // flex:1,
    alignItems:'center',
    marginHorizontal:8,
    marginVertical:4,
    
  },
  btnText:{
    color:colorPallete.textColor,
    fontSize:16,
    paddingVertical:16,
    paddingHorizontal:32,
    
  },
  iconBtn:{
    paddingVertical:16,
    paddingHorizontal:32,
  }
});
