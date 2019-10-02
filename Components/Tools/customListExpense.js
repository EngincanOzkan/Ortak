import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Style/Stylesheet';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let isStrikePrint;
    if (this.props.paid) {
      isStrikePrint = 'line-through';
    } else {
      isStrikePrint = 'none';
    }

    return (
      <View>
        <View style={styles.ItemView}>
          <View style={styles.partnersProfileImageContainerView}>
            <Image
              source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
              style={styles.partnersProfileImage}
            />
          </View>
          <Text
            style={[
              styles.ItemExpenseTitle,
              {textDecorationLine: isStrikePrint},
            ]}>
            {this.props.title}
          </Text>
          <View style={styles.ItemExpenseAmount}>
            <Text
              style={[styles.ItemText, {textDecorationLine: isStrikePrint}]}>
              {this.props.amount}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
