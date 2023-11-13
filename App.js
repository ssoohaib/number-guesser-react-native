import { SafeAreaView, ImageBackground, StyleSheet } from 'react-native';
import MainScreen from './screens/MainScreen'
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import colorPallete from './assets/ColorPallete';
import { useState } from 'react';

export default function App() {

  const [screenNum,setScreenNum]=useState(1);

  const screenHandler = (num)=>{
    setScreenNum(num)
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
          {!screenNum && <MainScreen screenChange={screenHandler} />}
          {screenNum && <GameScreen userNum={screenNum}/>}
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
