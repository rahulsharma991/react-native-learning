import {View, Text, StyleSheet} from 'react-native';
import Colors from '../utils/color';

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colors.secondary,
    fontSize: 36,
    fontWeight: 'bold',
  },
});
export default NumberContainer;
