import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../Style/Stylesheet';

export default class AddExpenseToBoard extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Gider Ekle',
      headerLeft: (
        <Icon.Button
          name="chevron-left"
          backgroundColor="rgba(0, 0, 0, 0.0)"
          color="#000000"
          onPress={() => navigation.navigate('Home')}></Icon.Button>
      ),
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.explanationView}>
          <Text style={styles.explanationText}>Seçilen Panonun Adı</Text>
        </View>
        <TextInput placeholder="Tutar (₺)" style={styles.textInput} />
        <TextInput
          placeholder="Harcama yapılan Gün (Sayı)"
          style={styles.textInput}
        />
        <TextInput placeholder="Açıklama" style={styles.textInput} />
        <View style={styles.explanationView}>
          <Text style={styles.explanationText}>
            Ekleme Yapıldıktan sonra pano totali: 0₺
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigate('Board')}
          style={styles.circleButton}>
          <Icon
            name="check-circle"
            backgroundColor="#fff"
            title="plus"
            color="#000"
            size={70}
            solid></Icon>
        </TouchableOpacity>
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
  explanationView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  explanationText: {
    fontSize: 20,
    color: '#939393',
    textAlign: 'center',
  },
  ListContainer: {
    flex: 4,
    flexDirection: 'row',
  },
});*/
