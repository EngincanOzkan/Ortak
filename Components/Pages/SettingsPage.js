import React, {Component} from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from '../Style/Stylesheet';

export default class Settings extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Ayarlar',
      headerRight: null,
      headerLeft: (
        <Icon.Button
          name="chevron-left"
          backgroundColor="rgba(0, 0, 0, 0.0)"
          color="#000000"
          onPress={() => navigation.navigate('Profile')}></Icon.Button>
      ),
    };
  };

  constructor(props) {
    super(props); // super arguman geçmenizi sağlar eğer constructor kullanmak isterseniz kullanmak zorunlu oluyor.
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.marka}>Ortak</Text>
        <TextInput placeholder="Kullanıcı Adınız" style={styles.textInput} />
        <TextInput placeholder="Email adresi" style={styles.textInput} />
        <TextInput placeholder="Parola" style={styles.textInput} />
        <TextInput placeholder="Tekrar Parola" style={styles.textInput} />
        <Button
          title="Güncelle"
          style={styles.button}
          onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 6,
    backgroundColor: '#2980b9',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    alignSelf: 'stretch',
    marginBottom: 2,
  },
  textInput: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#2980b9',
    padding: 6,
    alignSelf: 'stretch',
    marginHorizontal: 15,
    marginBottom: 4,
  },
  marka: {
    fontSize: 35,
    fontWeight: '600',
    marginBottom: 5,
    color: '#e74c3c',
  },
  registerLink: {
    color: '#3498db',
  },
});*/
