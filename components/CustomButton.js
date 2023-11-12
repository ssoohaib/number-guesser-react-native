import { StyleSheet, Pressable, View, Text } from 'react-native'
import colorPallete from '../assets/ColorPallete';

export default function CustomButton(props) {
  return (
    <View style={styles.btnContainer}>
      <Pressable onPress={({pressed})=>{pressed && console.log('lol')}}>
          <Text style={styles.btnText}>{props.title}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer:{
    backgroundColor: colorPallete.three,
    paddingVertical:16,
    paddingHorizontal:32,
    borderRadius:16,
    // width:130,
    flex:1,
    alignItems:'center',
    marginHorizontal:8,

  },
  btnText:{
    color:colorPallete.textColor,
    fontSize:16,
  
  }
});
