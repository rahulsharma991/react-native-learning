import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItems from './components/GoalItems';

const App = () => {
  const [courseGoals, getCourseGoals] = useState([]);

  function submitData(name) {
    getCourseGoals(currentCourseGoal => [
      ...currentCourseGoal,
      {text: name, id: Math.random().toString()},
    ]);
  }

  function deleteData(id) {
    getCourseGoals(currentCourseGoal => {
      return currentCourseGoal.filter(goal => goal.id !== id);
    });
    console.log('DELETE');
  }
  return (
    <SafeAreaView>
      <View>
        <GoalInput onAddGoal={submitData} />
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
