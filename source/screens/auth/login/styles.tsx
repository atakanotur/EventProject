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
  loginInputContainer: {
    marginBottom: 10,
  },
  loginInput: {
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
  rememberMeAndForgotPassword: {
    flexDirection: 'row',
    marginLeft: 0,
    padding: 10
  },
  rememberMe: {
    color: colors.red,
  },
  rememberMeContainer: {
    alignItems: 'flex-start',
    marginLeft: 5,
  },
  forgotPasswordButton: {
    flex: 1,
  },
  forgotPasswordButtonText: {
    color: colors.red,
  },
  loginButton: {
    height: 50,
    backgroundColor: colors.red,
    borderRadius: 24,
  },
  loginButtonText: {
    color: colors.white,
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
  },
  registerButton: {
    height: 50,
  },
  registerButtonText: {
    color: colors.red,
  },
});
