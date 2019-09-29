import React, {Component} from 'react';
import {View} from 'react-native';

/**
 * <ProcessBar percent={0.7} /> şeklinde kullanılır
 * @param = 'percent' parametresi '0.0' ila '1.0' arasından bir de değeri almalıdır bu 0 - 100 arası bir processbarın yüzde değerini belirtir.
 */
export default class ProcessBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'lightgray',
          borderRadius: 4,
          overflow: 'hidden',
        }}>
        <View
          style={{
            flex: this.props.percent,
            height: 20,
            backgroundColor: '#e74c3c',
          }}
        />
        <View style={{flex: 1 - this.props.percent}} />
      </View>
    );
  }
}
