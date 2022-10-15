import {StyleSheet, View, Text, Pressable} from 'react-native';

function GoalItems(props) {
  return (
    <View style={styles.goalList}>
      <Pressable
        style={pressedItem => pressedItem.pressed && styles.pressedItem}
        onPress={props.onDeleteGoal.bind(this, props.textOrId.id)}>
        <Text style={styles.goalText}>{props.textOrId.text}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  goalList: {
    margin: 10,
    backgroundColor: 'purple',
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
});
export default GoalItems;
