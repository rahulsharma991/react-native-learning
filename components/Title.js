import {Text, StyleSheet, Platform} from 'react-native';
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
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ios: 0, android: 2}),
    borderColor: Colors.secondary,
    padding: 12,
    maxWidth: '80%',
  },
});

export default Title;

// If we create file title.ios.js or title.android.js then it will became platform specific files
