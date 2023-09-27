import React, {useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommonActions} from '@react-navigation/native';
import {useAppDispatch} from '../../../hooks';
import {Button, Input, Text} from '../../../components';
import {styles} from './styles';
import colors from '../../../theme/colors';

const RegisterScreen = ({navigation}: any) => {
  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const dispatch = useAppDispatch();
  const onChangeEmail = (e: string) => {
    setLoginState({
      ...loginState,
      email: e,
    });
    console.log('email', loginState.email);
  };

  const onChangePassword = (e: string) => {
    setLoginState({
      ...loginState,
      password: e,
    });
    console.log('password', loginState.password);
  };

  const remember = () => {};
  const login = () => {
    // dispatch(getMyEventsAsync());
    navigation.navigate('Tab');
  };
  const register = () => {
    navigation.navigate('Register');
  };
  const forgotPassword = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}>
        <Text text="Welcome" style={styles.bannerText} />
      </View>
      <View style={styles.main}>
        <Input
          containerStyle={styles.loginInputContainer}
          placeholder="Email"
          onChangeText={(e: string) => onChangeEmail(e)}
          style={styles.loginInput}
          selectionColor={colors.green}
          placeholderTextColor={colors.blue}
          iconName="at-outline"
          iconColor={colors.red}
          iconSize={30}
        />
        <Input
          containerStyle={styles.loginInputContainer}
          placeholder="Password"
          onChangeText={(e: string) => onChangePassword(e)}
          style={styles.loginInput}
          selectionColor={colors.white}
          placeholderTextColor={colors.blue}
          iconName="key-outline"
          iconColor={colors.red}
          iconSize={30}
        />
        <View style={styles.rememberMeAndForgotPassword}>
          <Text text="Remember Me" style={styles.rememberMe} />
          <Button
            text="Forgot Password?"
            onPress={() => forgotPassword()}
            style={styles.forgotPasswordButton}
            textStyle={styles.forgotPasswordButtonText}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <Button
          onPress={() => login()}
          text="Login"
          style={styles.loginButton}
          textStyle={styles.loginButtonText}
        />
        <Button
          onPress={() => register()}
          text="Register"
          style={styles.registerButton}
          textStyle={styles.registerButtonText}
        />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
