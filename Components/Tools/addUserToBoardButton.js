import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../Style/Stylesheet';

/**
 * <AddUserToBoardButton navigation={this.props.navigation} navigateTo="sayfa navigasyon adı buraya gelir"/>
 * @param = 'navigateTo' navigate adeceği sayfanın adını alır, sayfa isimleri App.js dosyası içerisinde belirtiliyor
 * @param = 'navigation' parametresi 'this.props.navigation' değeri almalıdır bu sayfanın navigation dosyasını componente çeker
 */
export default class AddUserToBoardButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate(this.props.navigateTo)}
        style={styles.circleButton}>
        <Icon name="user-circle" style={styles.circleButtonIcon} solid></Icon>
        <Icon name="plus" style={styles.styleOfAddItem} solid></Icon>
      </TouchableOpacity>
    );
  }
}
