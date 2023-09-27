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
    borderBottomWidth: 2,
    borderColor: colors.purple,
    marginLeft: 5,
    fontSize: 17
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
