import { ImageBackground, StyleSheet } from 'react-native';
import MainScreen from './screens/MainScreen'
import { LinearGradient } from 'expo-linear-gradient';
import colorPallete from './assets/ColorPallete';

export default function App() {
  return (
    <LinearGradient colors={[colorPallete.three,'#CFAA41']} 
      style={styles.container}>
      <ImageBackground source={require('./assets/images/dice.jpg')} 
        style={styles.container} 
        resizeMode='cover'
        imageStyle={{opacity:0.15}}>
        <MainScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%'
  }
});
