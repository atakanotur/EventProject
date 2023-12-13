import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 15,
  },
  banner: {
    flex: 2,
  },
  bannerText: {
    color: colors.red,
    fontSize: 50,
  },
  main: {
    flex: 3,
  },
  registerInputContainer: {
    marginBottom: 10
  },
  registerInput: {
    padding: 5,
    margin: 10,
    height: 50,
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.red,
    fontSize: 17,
  },
  loginButton: {
    height: 50,
  },
  loginButtonText: {
    color: colors.red,
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
  },
  registerButton: {
    height: 50,
    backgroundColor: colors.red,
    borderRadius: 24,
  },
  registerButtonText: {
    color: colors.white,
  },
});
