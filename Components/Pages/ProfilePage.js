import React, { Component } from 'react';
import { Text, View, Image, FlatList, Button, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import styles from '../Style/Stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ListItem from '../Tools/customListItem';

export default class Profile extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Profile',
      headerRight: (
        <Icon.Button
          name="cog"
          backgroundColor="rgba(0, 0, 0, 0.0)"
          color="#000000"
          onPress={() => navigation.navigate('Settings')}></Icon.Button>
      ),
      headerLeft: (
        <Icon.Button
          name="chevron-left"
          backgroundColor="rgba(0, 0, 0, 0.0)"
          color="#000000"
          onPress={() => navigation.navigate('Home')}></Icon.Button>
      ),
    };
  };

  constructor(props) {
    super(props); // super arguman geçmenizi sağlar eğer constructor kullanmak isterseniz kullanmak zorunlu oluyor.
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text> Yunus Yarba </Text>
      </View>
    );
  }
}
