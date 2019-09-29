/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Navigator,
} from 'react-native';

import {
  createStackNavigator,
  createAppContainer,
  StackViewTransitionConfigs,
} from 'react-navigation';

import {fadeOut} from 'react-navigation-transitions';

import LoginPage from './Components/Pages/LoginPage';
import SignUpPage from './Components/Pages/SignUpPage';
import HomePage from './Components/Pages/HomePage';
import ExpenseBoardCreatePage from './Components/Pages/ExpenseBoardCreatePage';
import AddPartnerToBoardPage from './Components/Pages/AddPartnerToBoardPage';
import AddExpenseToBoardPage from './Components/Pages/AddExpenseToBoardPage';
import SettingsPage from './Components/Pages/SettingsPage';
import BoardPage from './Components/Pages/BoardPage';
import ProfilePage from './Components/Pages/ProfilePage';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomePage},
    Profile: {screen: ProfilePage},
    AddExpenseToBoard: {screen: AddExpenseToBoardPage},
    Board: {screen: BoardPage},
    ExpenseBoardCreate: {screen: ExpenseBoardCreatePage},
    Login: {screen: LoginPage},
    SignUp: {screen: SignUpPage},
    Settings: {screen: SettingsPage},
    AddPartnerToBoard: {screen: AddPartnerToBoardPage},
  },
  {
    initialRouteName: 'Home',
    transitionConfig: () => fadeOut(),
  },
);

const App = createAppContainer(MainNavigator);

export default App;
