import { SafeAreaView, ImageBackground, StyleSheet } from 'react-native';
import MainScreen from './screens/MainScreen'
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import colorPallete from './assets/ColorPallete';
import { useState } from 'react';
import OverScreen from './screens/OverScreen';

export default function App() {

  const [screenNum,setScreenNum]=useState();
  const [isGameOver,setIsGameOver]=useState(false);
  const [gameResult,setGameResult]=useState(0);
  const [totalRounds,setTotalRounds]=useState(0);

  const gameOverHandler=(result,totalRounds)=>{
    setIsGameOver(true)
    setTotalRounds(totalRounds)
    // setScreenNum(undefined)
  }

  const restartGame = ()=>{
    setScreenNum(undefined)
    setIsGameOver(false)
    setGameResult(0)
    setTotalRounds(0)
  }

  const screenHandler = (num)=>{
    setScreenNum(num)
    setGameResult(num)
  }

  return (
    <LinearGradient colors={[colorPallete.three,'#CFAA41']} 
      style={styles.container}>
      <ImageBackground source={require('./assets/images/dice.jpg')} 
        style={[styles.container,styles.containerSpecific]} 
        resizeMode='cover'
        imageStyle={{opacity:0.15}}>

        {/* Screens */}
        <SafeAreaView> 
          {!screenNum && !isGameOver && <MainScreen screenChange={screenHandler} />}
          {screenNum && !isGameOver && <GameScreen userNum={screenNum} gameOver={gameOverHandler} />}
          {isGameOver && <OverScreen totalRounds={totalRounds} result={gameResult} restartGame={restartGame}/>}
        </SafeAreaView>
      
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',

    width:'100%'
  },
  containerSpecific:{
    paddingTop:64,
  }
});
