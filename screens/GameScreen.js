import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Alert, FlatList } from 'react-native'
import Title from '../components/Title'
import colorPallete from '../assets/ColorPallete';
import CustomButton from '../components/CustomButton';
import { Ionicons } from '@expo/vector-icons';
import ListItem from '../components/ListItem';

const randGenerator = (min, max, exclude)=>{
    const rndNum = Math.floor(Math.random()*(max-min))+min;

    if(rndNum===exclude)
        return randGenerator(min, max, exclude)
    else
        return rndNum
}

let minBoundary=1;
let maxBoundary=100;
let totalRounds=0;

export default function GameScreen(props) {
    const initialGuess = randGenerator(1,100, props.userNum)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [roundLogs,setRoundLogs]=useState([])

    useEffect(()=>{
        if(currentGuess==props.userNum){
            props.gameOver(currentGuess,totalRounds)
            totalRounds=0
            setRoundLogs([])
        }
    },[currentGuess])

    useEffect(()=>{
        setRoundLogs((i)=>[...i,initialGuess])
    },[])

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

        totalRounds++;
        if (minBoundary === maxBoundary) {
            setCurrentGuess(minBoundary);
            return;
        }
        const newRandNum = randGenerator(minBoundary,maxBoundary,currentGuess)
        setRoundLogs((i)=>[...i,newRandNum])
        setCurrentGuess(newRandNum)
    }

  return (
    <View style={styles.gameContainer}>
        <Title title={"Your Phone's Guess"} verticalPadding={8} color={colorPallete.textColor}/>
        <Title title={currentGuess} verticalPadding={32} color={colorPallete.titleColor}/>
        
        <View style={styles.gameBottom}>
            <Text style={styles.text}>Higher or Lower?</Text>
            <View style={styles.btnContainer}>
                <CustomButton title={'-'} icon={'md-remove'} onPress={nextGuessHandler.bind(this,'lower')} />
                <CustomButton title={'+'} icon={'md-add'} onPress={nextGuessHandler.bind(this,'higher')}/>
            </View>
        </View>
        <View style={styles.listContainer}>
            <FlatList 
                data={roundLogs}
                keyExtractor={(item)=>item}
                renderItem={({item, index})=><ListItem round={index + 1} guess={item} />}
            />
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
    gameBottom:{
        backgroundColor:colorPallete.three,
        padding:16,
        borderRadius:16,
        marginBottom:16,
        elevation:16, //android specific
        // borderColor:'red',
        // borderWidth:1,
    },
    titleText:{

    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'center',
        // height:200,
        // alignItems:'center',
        // borderColor:'red',
        // borderWidth:1,
    },
    text:{
        textAlign:'center',
        fontSize:24,
        // fontWeight:'bold',
        marginBottom:8,
        color:colorPallete.textColor
        // borderColor:'red',
        // borderWidth:1,
    },
    listContainer:{
        flex:1,
        // flexDirection:'column-reverse'
    }
})