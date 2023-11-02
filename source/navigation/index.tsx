import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  LoginScreen,
  RegisterScreen,
  MainScreen,
  ProfileScreen,
} from '../screens';
import colors from '../theme/colors';

const RootStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
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
    </EventStack.Navigator>
  );
};

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <TabStack.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        headerTitle: 'EventApp',
        headerBackgroundContainerStyle: {borderWidth: 0},
        tabBarIcon: ({focused, color, size}) => {
          let iconName: any;
          if (route.name === 'Events')
            iconName = focused ? 'bonfire' : 'bonfire-outline';
          else if (route.name === 'My Events')
            iconName = focused ? 'person' : 'person-outline';
          return <Icon name={iconName} size={25} color={colors.white} />;
        },
        tabBarStyle: {backgroundColor: colors.red, paddingTop: 10},
        tabBarLabelStyle: {color: colors.white},
      })}>
      <TabStack.Screen name="Events" component={EventNavigator} />
      <TabStack.Screen name="My Events" component={ProfileNavigator} />
    </TabStack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Auth"
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
