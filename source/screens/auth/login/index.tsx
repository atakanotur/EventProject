import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommonActions} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {Button, Input, Text, CheckBox, Loading} from '../../../components';
import {styles} from './styles';
import colors from '../../../theme/colors';
import {loginAsync} from '../../../store/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({navigation}: any) => {
  const token = useAppSelector(state => state.auth.token);
  const loading = useAppSelector(state => state.auth.isLoading);
  const [opening, setOpening] = useState(true);
  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });
  const [rememberSelect, setRememberSelect] = useState(false);

  const navigateToTabNavigator = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Tab'}],
      }),
    );
  };

  useEffect(() => {
    console.log('loading', loading);
    console.log('opening', opening);
  }, [loading, opening]);

  useEffect(() => {
    const getUser = async () => {
      const email: any = await AsyncStorage.getItem('eventProjectEmail');
      const password: any = await AsyncStorage.getItem('eventProjectPassword');
      dispatch(loginAsync({email, password})).then((response: any) => {
        if (response.payload?.status === 200) {
          navigateToTabNavigator();
        } else {
          setOpening(false);
        }
      });
    };
    getUser();
  }, []);

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

  const login = async () => {
    if (rememberSelect) {
      await AsyncStorage.setItem('eventProjectEmail', loginState.email);
      await AsyncStorage.setItem('eventProjectPassword', loginState.email);
    }
    console.log('heree', loginState);
    dispatch(loginAsync(loginState)).then((response: any) => {
      if (response.payload.status === 200) {
        navigateToTabNavigator();
      }
    });
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
          <CheckBox
            selected={rememberSelect}
            onSelected={() => setRememberSelect(!rememberSelect)}
          />
          <Text
            text="Remember Me"
            style={styles.rememberMe}
            containerStyle={styles.rememberMeContainer}
          />
          <Button
            text="Forgot Password?"
            onPress={forgotPassword}
            style={styles.forgotPasswordButton}
            textStyle={styles.forgotPasswordButtonText}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <Button
          onPress={login}
          text="Login"
          style={styles.loginButton}
          textStyle={styles.loginButtonText}
        />
        <Button
          onPress={register}
          text="Register"
          style={styles.registerButton}
          textStyle={styles.registerButtonText}
        />
      </View>
      <Loading visible={loading} />
      <Loading visible={opening} />
    </SafeAreaView>
  );
};

export default RegisterScreen;
