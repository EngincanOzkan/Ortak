import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../Style/Stylesheet';

/**
 * header olarak static içerisinde çağırıldığı için <GoBackButton navigation={navigation} />
 * @param = 'navigation' parametresi 'navigation' değeri almalıdır bu sayfanın navigation dosyasını componente çeker
 */
export default class GoBackButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Icon style={styles.topBarIcon} name="arrow-left"></Icon>
        </TouchableOpacity>
      </View>
    );
  }
}
