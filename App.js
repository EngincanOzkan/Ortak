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

import {createStackNavigator, createAppContainer} from 'react-navigation';

import LoginPage from './Components/Pages/LoginPage';
import SignUpPage from './Components/Pages/SignUpPage';
import HomePage from './Components/Pages/HomePage';
import ExpenseBoardCreatePage from './Components/Pages/ExpenseBoardCreatePage';
import AddPartnerToBoardPage from './Components/Pages/AddPartnerToBoardPage';
import AddExpenseToBoardPage from './Components/Pages/AddExpenseToBoardPage';
import SettingsPage from './Components/Pages/SettingsPage';
import BoardPage from './Components/Pages/BoardPage';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginPage},
  SignUp: {screen: SignUpPage},
  Home: {screen: HomePage},
  Settings: {screen: SettingsPage},
  AddExpenseToBoard: {screen: AddExpenseToBoardPage},
  ExpenseBoardCreate: {screen: ExpenseBoardCreatePage},
  AddPartnerToBoard: {screen: AddPartnerToBoardPage},
  Board: {screen: BoardPage},
});

const App = createAppContainer(MainNavigator);

export default App;
