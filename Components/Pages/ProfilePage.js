import React, {Component} from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import styles from '../Style/Stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import GoBackButton from '../Tools/goBackButton';

export default class Profile extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Profil',
      headerTitleStyle: styles.topBarText,
      headerTransparent: true,
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Icon name="sliders-h" style={styles.topBarIcon}></Icon>
        </TouchableOpacity>
      ),
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
        <Image
          source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
          style={styles.profileImage}
        />
        <Text style={styles.textStyle}> Yunus Yarba </Text>
        <Text style={styles.textStyle}> YunusYarba@gmail.com </Text>
      </LinearGradient>
    );
  }
}
