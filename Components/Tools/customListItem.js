import React, {Component} from 'react';
import {View} from 'react-native';
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
          <Icon.Button
            backgroundColor="rgba(0, 0, 0, 0.0)"
            color="#000000"
            name="dot-circle">
            {this.props.title}
          </Icon.Button>
          <View style={styles.ItemGoArrowIcon}>
            <Icon name="chevron-right"></Icon>
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
