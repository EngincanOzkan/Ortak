import React, {Component} from 'react';
import {Text, Image, View, KeyboardAvoidingView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GoBackButton from '../Tools/goBackButton';
import styles from '../Style/Stylesheet';
import CheckButton from '../Tools/checkButton';
import TextInputStylish from '../Tools/textInputStylish';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Settings extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Ayarlar',
      headerTitleStyle: styles.topBarText,
      headerTransparent: true,
      headerLeft: <GoBackButton navigation={navigation} />,
    };
  };

  constructor(props) {
    super(props); // super arguman geçmenizi sağlar eğer constructor kullanmak isterseniz kullanmak zorunlu oluyor.
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <LinearGradient colors={['#56CCF2', '#2F80ED']} style={styles.container}>
        <KeyboardAvoidingView
          style={styles.sendControlContainerOuter}
          behavior="padding">
          <View style={styles.sendControlContainerInner}>
            <Image
              source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
              style={styles.profileImageSettings}
            />
            <Icon name="sync-alt" style={styles.styleOfChangeItem}></Icon>
          </View>
          <TextInputStylish placeholder="Kullanıcı Adınız" />
          <TextInputStylish placeholder="Eposta Adresi" />
          <TextInputStylish placeholder="Parola" />
          <TextInputStylish placeholder="Parola Tekrarı" />
        </KeyboardAvoidingView>
        <Text style={styles.marka}>Ortak</Text>
        <CheckButton navigation={this.props.navigation} navigateTo="Home" />
      </LinearGradient>
    );
  }
}
