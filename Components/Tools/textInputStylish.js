import React, {Component} from 'react';
import {View, Animated, TextInput} from 'react-native';
import styles from '../Style/Stylesheet';

/**
 * <TextInputStylish placeholder="Parola Tekrarı" />
 * @param = 'placeholder' parametresi string olarak palce holder değerini alır
 * KeyboardAvoidingView uygun bir view içerisinde TextInput itemini gösterir
 */
export default class TextInputStylish extends Component {
  constructor(props) {
    super(props);

    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }

  handlePressIn() {
    Animated.spring(this.animatedValue, {
      toValue: 1.2,
    }).start();
  }
  handlePressOut() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
    }).start();
  }

  render() {
    const animatedStyle = {
      transform: [{scale: this.animatedValue}],
    };
    return (
      <View style={styles.sendControlContainerInner}>
        <Animated.View style={[styles.animatedTextInputsView, animatedStyle]}>
          <TextInput
            placeholderTextColor={'#BFBBC4'}
            placeholder={this.props.placeholder}
            style={styles.textInput}
            onFocus={this.handlePressIn}
            onBlur={this.handlePressOut}
          />
        </Animated.View>
      </View>
    );
  }
}
