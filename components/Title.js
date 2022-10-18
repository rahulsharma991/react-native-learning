import {Text, StyleSheet} from 'react-native';
import Colors from '../utils/color';

function Title({children}) {
  return <Text style={styles.title}>{children}</Text>;
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.secondary,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.secondary,
    padding: 12,
    maxWidth: '80%',
  },
});

export default Title;
