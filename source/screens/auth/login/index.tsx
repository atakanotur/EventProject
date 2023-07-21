import React, {useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommonActions} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {Button, Input, Text} from '../../../components';
import {loginAsync} from '../../../store/auth';
import {styles} from './styles';

const LoginScreen = ({navigation}) => {
  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });

  const dispatch = useAppDispatch();

  const onChangeEmail = (e: string) => {
    setLoginState({
      ...loginState,
      email: e,
    });
  };

  const onChangePassword = (e: string) => {
    setLoginState({
      ...loginState,
      password: e,
    });
  };

  const login = () => {
    dispatch(loginAsync(loginState));
  };

  return (
    <SafeAreaView style={styles.main}>
      <Text text="Login Screen" style={{color: 'red'}} />
      {/* <Input
        placeholder="Email"
        onChangeText={e => onChangeEmail(e)}
        style={{color: 'red'}}
      />
      <Input
        placeholder="Password"
        onChangeText={e => onChangePassword(e)}
        style={{color: 'red'}}
      /> */}
      <Button onPress={() => login()} text="Login" style={{color: 'red'}} />
    </SafeAreaView>
  );
};

export default LoginScreen;
