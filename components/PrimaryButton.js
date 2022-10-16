import {View, Text, Pressable, StyleSheet} from 'react-native';
import Colors from '../utils/color';

function PrimaryButton({children, dynamicPress}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={dynamicPress}
        android_ripple={{color: Colors.ripplePrimaryColor}}
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2, //android shadow property
  },
  buttonText: {
    color: Colors.whilteColor,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
