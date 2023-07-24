import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  loginInput: {
    backgroundColor: colors.blue
  },
  loginButton: {
    width: 50,
    height: 50,
    backgroundColor: colors.red
  }
});
