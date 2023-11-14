import { View, Text, StyleSheet } from 'react-native'
import ColorPallete from '../assets/ColorPallete'

export default function ListItem(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>#{props.round}</Text>
        <Text style={styles.text}>Your Phone's Guess: {props.guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:8,
        paddingVertical:64,
        paddingHorizontal:16,
        backgroundColor:ColorPallete.titleColor,
        borderRadius:16,
        flexDirection:'row',
        justifyContent:'space-between',
        borderColor:ColorPallete.three,
        borderWidth:2
    },
    text:{
        
    }
})