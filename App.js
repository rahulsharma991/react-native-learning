import {StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#72063c', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/dice.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backGroundImage}>
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.15,
  },
});
