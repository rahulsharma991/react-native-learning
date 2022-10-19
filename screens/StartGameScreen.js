import {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  useWindowDimensions,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Colors from '../utils/color';

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');
  const {width, height} = useWindowDimensions();

  function numberInputhandler(getNumber) {
    setEnteredNumber(getNumber);
  }
  function resetInputHandler() {
    setEnteredNumber('');
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 to 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }
    onPickNumber(chosenNumber);
  }
  const marginTopDistance = height < 380 ? 30 : 100;
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View style={[styles.inputContainer, {marginTop: marginTopDistance}]}>
          <Title>OPPONONET NUMBER</Title>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputhandler}
            value={enteredNumber}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton dynamicPress={resetInputHandler}>
                Reset
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton dynamicPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary600,
    borderRadius: 8,
    elevation: 4, //android shadow property
    shadowColor: 'black', // ios shadow property
    shadowOffset: {width: 0, height: 2}, // ios shadow property
    shadowRadius: 6, // ios shadow property
    shadowOpacity: 0.25, // ios shadow property
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 2,
    color: Colors.secondary,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
export default StartGameScreen;
