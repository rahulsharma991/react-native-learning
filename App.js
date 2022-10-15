import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList, Button} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItems from './components/GoalItems';

const App = () => {
  const [courseGoals, getCourseGoals] = useState([]);
  const [modalVisible, setModalVisibility] = useState(false);

  function submitData(name) {
    getCourseGoals(currentCourseGoal => [
      ...currentCourseGoal,
      {text: name, id: Math.random().toString()},
    ]);
    dismissModal();
  }

  function deleteData(id) {
    getCourseGoals(currentCourseGoal => {
      return currentCourseGoal.filter(goal => goal.id !== id);
    });
  }
  function addNewGoals() {
    setModalVisibility(true);
  }
  function dismissModal() {
    setModalVisibility(false);
  }

  return (
    <SafeAreaView>
      <View>
        <Button title="Add new goal" onPress={addNewGoals} />
        <GoalInput
          visible={modalVisible}
          onAddGoal={submitData}
          cancelModal={dismissModal}
        />
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={itemData => {
              return (
                <GoalItems textOrId={itemData.item} onDeleteGoal={deleteData} />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  goalContainer: {
    height: 500,
  },
});

export default App;
