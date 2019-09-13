import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../Style/Stylesheet';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={styles.ItemView}>
          <Icon
            style={{margin: 10, flex: 2}}
            size={30}
            color="#000"
            name="user-circle"
            solid></Icon>
          <Text style={styles.ItemExpenseTitle}>{this.props.title}</Text>
          <View style={styles.ItemExpenseAmount}>
            <Text style={styles.ItemText}>{this.props.amount}</Text>
          </View>
        </View>
      </View>
    );
  }
}
/*const styles = StyleSheet.create({
  ItemView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ItemGoArrowIcon: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: 10,
  },
});*/
