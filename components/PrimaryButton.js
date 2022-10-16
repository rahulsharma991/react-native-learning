import {View, Text, Pressable, StyleSheet} from 'react-native';
function PrimaryButton({children}) {
  function presshandler() {
    console.log('pressed');
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={presshandler}
        android_ripple={{color: '#640233'}}
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
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2, //android shadow property
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
