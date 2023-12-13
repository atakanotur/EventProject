import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommonActions} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {Button, Input, Loading, Text} from '../../../components';
import {styles} from './styles';
import colors from '../../../theme/colors';
import {loginAsync, registerAsync} from '../../../store/auth';

const RegisterScreen = ({navigation}: any) => {
  const token = useAppSelector(state => state.auth.token);

  const error = useAppSelector(state => state.auth.error);

  const loading = useAppSelector(state => state.auth.isLoading);

  const [registerState, setRegisterState] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const [opening, setOpening] = useState(false);

  useEffect(() => {
    console.log('token', token);
    console.log('error', error);
    registerState.email;
    if (
      token !== null &&
      registerState.email !== '' &&
      registerState.password !== ''
    )
      dispatch(
        loginAsync({
          email: registerState.email,
          password: registerState.password,
        }),
      ).then((response: any) => {
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
  }, [token, error]);

  const dispatch = useAppDispatch();

  const onChangeFirstName = (e: string) => {
    setRegisterState({
      ...registerState,
      firstName: e,
    });
    console.log('email', registerState.firstName);
  };

  const onChangeLastName = (e: string) => {
    setRegisterState({
      ...registerState,
      lastName: e,
    });
    console.log('password', registerState.lastName);
  };

  const onChangeEmail = (e: string) => {
    setRegisterState({
      ...registerState,
      email: e,
    });
    console.log('email', registerState.email);
  };

  const onChangePassword = (e: string) => {
    setRegisterState({
      ...registerState,
      password: e,
    });
    console.log('password', registerState.password);
  };

  const login = () => {
    navigation.navigate('Login');
  };

  const register = async() => {
    await dispatch(registerAsync(registerState));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}>
        <Text text="Welcome" style={styles.bannerText} />
      </View>
      <View style={styles.main}>
        <Input
          containerStyle={styles.registerInputContainer}
          placeholder="First Name"
          onChangeText={e => onChangeFirstName(e)}
          style={styles.registerInput}
          selectionColor={colors.white}
          placeholderTextColor={colors.blue}
          iconName="person-circle-outline"
          iconColor={colors.red}
          iconSize={30}
        />
        <Input
          containerStyle={styles.registerInputContainer}
          placeholder="Last Name"
          onChangeText={e => onChangeLastName(e)}
          style={styles.registerInput}
          selectionColor={colors.white}
          placeholderTextColor={colors.blue}
          iconName="people-circle-outline"
          iconColor={colors.red}
          iconSize={30}
        />
        <Input
          containerStyle={styles.registerInputContainer}
          placeholder="Email"
          onChangeText={e => onChangeEmail(e)}
          style={styles.registerInput}
          selectionColor={colors.green}
          placeholderTextColor={colors.blue}
          iconName="at-outline"
          iconColor={colors.red}
          iconSize={30}
        />
        <Input
          containerStyle={styles.registerInputContainer}
          placeholder="Password"
          onChangeText={e => onChangePassword(e)}
          style={styles.registerInput}
          selectionColor={colors.white}
          placeholderTextColor={colors.blue}
          iconName="key-outline"
          iconColor={colors.red}
          iconSize={30}
        />
      </View>
      <View style={styles.bottom}>
        <Button
          onPress={() => register()}
          text="Register"
          style={styles.registerButton}
          textStyle={styles.registerButtonText}
        />
        <Button
          onPress={() => login()}
          text="Login"
          style={styles.loginButton}
          textStyle={styles.loginButtonText}
        />
      </View>
      <Loading visible={opening} />
    </SafeAreaView>
  );
};

export default RegisterScreen;
