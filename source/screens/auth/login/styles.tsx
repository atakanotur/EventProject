import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 15
  },
  banner: {
    flex: 2
  },
  bannerText: {
    color: colors.red,
    fontSize: 50
  },
  main: {
    flex: 3,
  },
  loginInputContainer: {
    marginBottom: 10
  },
  loginInput: {
    borderBottomWidth: 2,
    borderColor: colors.purple,
    marginLeft: 5,
    fontSize: 17
  },
  rememberMeAndForgotPassword: {
    flexDirection: 'row',
    marginLeft: 0
  },
  rememberMe: {
    color: colors.red
  },
  forgotPasswordButton: {
    flex: 1
  },
  forgotPasswordButtonText: {
    color: colors.red
  },
  loginButton: {
    height: 50,
    backgroundColor: colors.red,
    borderRadius: 24
  },
  loginButtonText: {
    color: colors.white,
  },
  bottom: {
    flex: 1,
    justifyContent: 'center'
  },
  registerButton: {
    height: 50,
  },
  registerButtonText: {
    color: colors.red
  }
});
