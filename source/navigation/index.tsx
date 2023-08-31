import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  LoginScreen,
  RegisterScreen,
  MainScreen,
  ProfileScreen,
} from '../screens';
import colors from '../theme/colors';

const RootStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const EventStack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

const EventNavigator = () => {
  return (
    <EventStack.Navigator screenOptions={{headerShown: false}}>
      <EventStack.Screen name="Main" component={MainScreen} />
      <EventStack.Screen name="Profile" component={ProfileScreen} />
    </EventStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <TabStack.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Main') iconName = focused ? 'Main' : 'Main';
          else if (route.name === 'Profile')
            iconName = focused ? 'Profile' : 'Profile';
          // return <Icon type="ionicon" name={iconName} color={colors.green} />;
          return null;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <TabStack.Screen name="Main" component={EventNavigator} />
    </TabStack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="AuthNavigator"
        component={AuthNavigator}
        options={{headerShown: false}}
      />

      <RootStack.Screen
        name="Tab"
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);
