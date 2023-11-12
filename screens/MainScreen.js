import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import CustomButton from '../components/CustomButton';
import colorPallete from '../assets/ColorPallete';
import { useState } from "react";


export default function MainScreen() {
    const [enteredNumber,setEnteredNumber]=useState('');

    const handleInputChange = (input) =>{
        setEnteredNumber(input)
    }

    const resetInput =()=>{
        setEnteredNumber('')
    }

    const confirmInput=()=>{
        const num=parseInt(enteredNumber);

        if (isNaN(num) || num <= 0 || num > 99){
            Alert.alert(
                'Invalid Number',
                'Number has to be between 1 and 99.',
                [{text:'Okay',style:'destructive',onPress:resetInput}]
            )
            return;
        }
        console.log('success')
    }

  return (
    <View style={styles.mainContainer}>
        <TextInput style={styles.textInput} 
        inputMode="numeric" 
        maxLength={2}
        value={enteredNumber}
        onChangeText={handleInputChange}
        />
        <View style={styles.btnContainer}>
            <CustomButton title={'Reset'} onPress={resetInput}/>
            <CustomButton title={'Confirm'} onPress={confirmInput}/>
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
        width:50,
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