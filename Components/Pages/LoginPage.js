import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Style/Stylesheet';

export default class LoginPage extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props); // super arguman geçmenizi sağlar eğer constructor kullanmak isterseniz kullanmak zorunlu oluyor.
  }

  Login() {
    console.log('ahmet');
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Icon size={160} color="#e74c3c" name="clipboard-check" solid></Icon>
        <Text style={styles.marka}>Ortak</Text>
        <TextInput placeholder="Email adresi" style={styles.textInput} />
        <TextInput
          secureTextEntry={true}
          placeholder="Parola"
          style={styles.textInput}
        />
        <Button
          title="Giriş Yap"
          style={styles.button}
          onPress={() => navigate('Home')}
        />
        <Text onPress={() => navigate('SignUp')}>
          {' '}
          Hesabınız yok mu? <Text style={styles.registerLink}>
            Kayıt Olun.
          </Text>{' '}
        </Text>
      </KeyboardAvoidingView>
    );
  }
}

/*const styles = StyleSheet.create({
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
  logo: {
    width: 150,
    height: 150,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 15,
    padding: 5,
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
