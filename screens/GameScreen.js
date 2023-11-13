import React, { useState } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import Title from '../components/Title'
import colorPallete from '../assets/ColorPallete';
import CustomButton from '../components/CustomButton';

const randGenerator = (min, max, exclude)=>{
    const rndNum = Math.floor(Math.random()*(max-min))+min;

    if(rndNum===exclude)
        return randGenerator(min, max, exclude)
    else
        return rndNum
}

let minBoundary=1;
let maxBoundary=100;

export default function GameScreen(props) {
    const initialGuess = randGenerator(minBoundary,maxBoundary, props.userNum)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    const nextGuessHandler = (direction)=>{

        if (
            (direction === 'lower' && currentGuess < props.userNum) ||
            (direction === 'higher' && currentGuess > props.userNum)
        ){
            Alert.alert(
                "Don't lie!",
                "Getting smart, huh?",
                [{text:'Cancel',style:'cancel'}]
            )
            return;
        }

        if (direction==='lower')
            maxBoundary=currentGuess
        else
            minBoundary=currentGuess+1

        const newRandNum = randGenerator(minBoundary,maxBoundary,currentGuess)
        setCurrentGuess(newRandNum)
    }

  return (
    <View style={styles.gameContainer}>
        <Title title={"Opponent's Guess"} verticalPadding={8} color={colorPallete.textColor}/>
        <Title title={currentGuess} verticalPadding={32} color={colorPallete.titleColor}/>
        <View style={styles.btnContainer}>
            <CustomButton title={'-'} onPress={nextGuessHandler.bind(this,'lower')}/>
            <CustomButton title={'+'} onPress={nextGuessHandler.bind(this,'higher')}/>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    gameContainer:{
        // width:'100%',
        // alignItems:'center',
        // borderColor:'red',
        // borderWidth:1,
    },
    titleText:{

    },
    btnContainer:{
        // height:200,
        // alignItems:'center',
        // borderColor:'red',
        // borderWidth:1,
    }
})