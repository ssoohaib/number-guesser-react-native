import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import CustomButton from '../components/CustomButton';
import colorPallete from '../assets/ColorPallete';
import { useState } from "react";
import Title from "../components/Title";


export default function MainScreen(props) {
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
        props.screenChange(num)
    }

  return (
    <View style={styles.rootContainer}>
        <Title title={"Game Guesser"} verticalPadding={8} color={colorPallete.titleColor}/>
        <View style={styles.mainContainer}>
            <Text style={styles.text}>Enter a number</Text>
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
    </View>
  )
}

const styles =StyleSheet.create({
    rootContainer:{
        alignItems:'center',
        flex:1,
        width:'100%',

        // borderWidth:1,
        // borderColor:'red',
    },
    text:{
        fontSize:20,
        color:colorPallete.textColor,
        marginBottom:16,
    },
    mainContainer:{
        // borderWidth:1,
        marginTop:16,
        borderColor:'red',
        elevation:16,
        padding:32,
        width:'90%',
        backgroundColor:colorPallete.three,
        alignItems:'center',
        borderRadius:16
    },
    textInput:{
        borderBottomColor:colorPallete.titleColor,
        borderBottomWidth:2,
        width:50,
        color:colorPallete.titleColor,
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