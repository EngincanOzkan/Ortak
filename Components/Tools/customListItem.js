import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Style/Stylesheet';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={styles.ItemView}>
          <Text style={styles.ItemText}>{this.props.title}</Text>
          <View style={styles.ItemGoArrowIconView}>
            <Icon style={styles.ItemGoArrowIcon} name="chevron-right"></Icon>
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
