import { StyleSheet, View, Text, TextInput } from "react-native";
import CustomButton from '../components/CustomButton';
import colorPallete from '../assets/ColorPallete';


export default function MainScreen() {
  return (
    <View style={styles.mainContainer}>
        <TextInput style={styles.textInput} inputMode="numeric" maxLength={2}/>
        <View style={styles.btnContainer}>
            <CustomButton title={'Reset'} />
            <CustomButton title={'Confirm'} />
        </View>
    </View>
  )
}

const styles =StyleSheet.create({
    mainContainer:{
        // borderWidth:1,
        // borderColor:'red',
        width:'90%',
        backgroundColor:colorPallete.two,
        padding:32,
        alignItems:'center',
        borderRadius:16
    },
    textInput:{
        borderBottomColor:colorPallete.textColor,
        borderBottomWidth:2,
        width:80,
        color:colorPallete.textColor,
        fontSize:32,
        fontWeight:'bold',
        textAlign:'center'
    },
    btnContainer:{
        flexDirection:'row',
        marginTop:32,
        width:'100%',
        justifyContent:'center',

        // borderWidth:1,
        // borderColor:'red',

    }
})