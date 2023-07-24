import React, {useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommonActions} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {Button, Input, Text} from '../../../components';
import {loginAsync, registerAsync} from '../../../store/auth';
import {styles} from './styles';

const LoginScreen = ({navigation}) => {
  const [loginState, setLoginState] = useState({
    email: 'first@hotmail.com',
    password: 'first',
    firstName: 'first',
    lastName: 'first',
  });

  const dispatch = useAppDispatch();

  const onChangeEmail = (e: string) => {
    setLoginState({
      ...loginState,
      email: e,
    });
    console.log('email', loginState.email)
  };

  const onChangePassword = (e: string) => {
    setLoginState({
      ...loginState,
      password: e,
    });
    console.log('password', loginState.password)
  };

  const login = () => {
    dispatch(registerAsync(loginState));
  };

  return (
    <SafeAreaView style={styles.main}>
      <Text text="Login Screen" style={{color: 'red'}} />
      <Input
        placeholder="Email"
        onChangeText={e => onChangeEmail(e)}
        style={styles.loginInput}
      />
      <Input
        placeholder="Password"
        onChangeText={e => onChangePassword(e)}
        style={styles.loginInput}
      />
      <Button onPress={() => login()} text="Login" style={styles.loginButton} />
    </SafeAreaView>
  );
};

export default LoginScreen;
