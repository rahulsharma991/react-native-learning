import {useEffect, useState} from 'react';
import {Text, StyleSheet, View, Alert} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum == exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
function GameScreen({userEnteredNumber, onGameOver}) {
  let minBoundary = 1;
  let maxBoundary = 100;
  const initialGuess = generateRandomBetween(1, 100, userEnteredNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess == userEnteredNumber) {
      onGameOver();
    }
  }, [userEnteredNumber, currentGuess, onGameOver]);

  function nextGuesshandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userEnteredNumber) ||
      (direction === 'greater' && currentGuess > userEnteredNumber)
    ) {
      Alert.alert("Don't lie fat fuck", 'You know me...', [
        {text: 'Fuck!', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <View>
        <Title>Opponent's guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>
      <View>
        <Title>Higher or lower?</Title>
        <View>
          <PrimaryButton dynamicPress={nextGuesshandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton dynamicPress={nextGuesshandler.bind(this, 'greater')}>
            +
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12,
  },
});
export default GameScreen;
