import {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Modal} from 'react-native';

function GoalInput(props) {
  const [name, getName] = useState('');

  function inputHandler(name) {
    getName(name);
  }
  function submitData() {
    props.onAddGoal(name);
    getName('');
  }
  console.log(props);
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.mainContainer}>
        <Text>{props.name}</Text>
        <TextInput
          placeholder="Enter name"
          style={styles.inputBox}
          onChangeText={inputHandler}
          value={name}></TextInput>
        <View style={styles.buttonContainer}>
          <Button
            title="Submit"
            onPress={submitData}
            styles={styles.customButton}
          />
          <Button title="cancel" onPress={props.cancelModal} />
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 5,
    justifyContent: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    borderColor: 'black',
    padding: 10,
    borderWidth: 1,
    margin: 10,
  },
  customButton: {
    backgroundColor: 'red',
  },
});
export default GoalInput;
