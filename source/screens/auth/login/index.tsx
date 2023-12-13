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
import {UserForLogin} from '../../../types';

const RegisterScreen = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(state => state.auth.token);
  const loading = useAppSelector(state => state.auth.isLoading);
  const [opening, setOpening] = useState(true);
  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });
  const [rememberSelect, setRememberSelect] = useState(false);

  const getUser = async () => {
    const email: any = await AsyncStorage.getItem('eventProjectEmail');
    const password: any = await AsyncStorage.getItem('eventProjectPassword');
    console.log('email', email);
    console.log('password', password);
    if (email && password) await navigateToTabNavigator({email, password});
    else setOpening(false);
  };

  const navigateToTabNavigator = async ({email, password}: UserForLogin) => {
    console.log('email', email);
    console.log('password', password);
    await dispatch(loginAsync({email, password})).then((response: any) => {
      console.log('response');
      if (response.payload?.status === 200) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Tab'}],
          }),
        );
      } else {
        setOpening(false);
      }
    });
  };

  useEffect(() => {
    getUser();
  }, []);

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
    navigateToTabNavigator(loginState);
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
