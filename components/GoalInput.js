import {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

function GoalInput(props) {
  const [name, getName] = useState('');

  function inputHandler(name) {
    getName(name);
  }
  function submitData() {
    props.onAddGoal(name);
    getName('');
  }
  return (
    <View>
      <Text>{props.name}</Text>
      <TextInput
        placeholder="Enter name"
        style={styles.inputBox}
        onChangeText={inputHandler}
        value={name}></TextInput>
      <Button
        title="Submit"
        onPress={submitData}
        styles={styles.customButton}
      />
    </View>
  );
}
const styles = StyleSheet.create({
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
