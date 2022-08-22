import {StyleSheet} from 'react-native';
const buttonSize = 100;
export const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: buttonSize,
    width: buttonSize,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  label: {
    position: 'relative',
    textAlign: 'center',
    color: '#C0C',
    fontWeight: 'bold',
    fontSize: 50,
  },
});
