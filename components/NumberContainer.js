import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Colors from '../utils/color';

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colors.secondary,
    fontSize: deviceWidth < 380 ? 28 : 24,
    fontWeight: 'bold',
  },
});
export default NumberContainer;
